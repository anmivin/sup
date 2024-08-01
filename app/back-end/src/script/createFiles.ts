const Minio = require('minio');
const { Sequelize } = require('sequelize');
const { unlink, createReadStream, existsSync, statSync } = require('fs');
const path = require('path');

const login = process.env.DB_USERNAME || 'postgres';
const password = process.env.DB_PASSWORD || 'password';
const database = process.env.DB_DATABASE || 'db';
const port = process.env.DB_PORT || '5432';
const host = process.env.DB_HOST || '127.0.0.1';
const dialect = process.env.DB_DIALECT || 'postgres';

const endpoint = process.env.MINIO_ENDPOINT || 'domain.com';
const minioPort = process.env.S3_PORT || 443;
const accessKey = process.env.MINIO_ACCESS || 'accessKey';
const secretKey = process.env.MINIO_SECRET || 'secretKey';

const uploadPath = process.env.UPLOADS_PATH || './files/uploads';

const minioConfig = {
  endPoint: endpoint,
  accessKey: accessKey,
  secretKey: secretKey,
  port: +minioPort,
  useSSL: true,
};

const minioClient = new Minio.Client(minioConfig);

const sequelize = new Sequelize(database, login, password, {
  dialect,
  host,
  port,
  logging: false,
});

const FILE_TYPE = {
  AvatarUser: 'avatar-users',
  AvatarProject: 'avatar-projects',
  Attachment: 'attachments',
  Template: 'templates',
  LaborReport: 'labor-reports',
  LeavePeriod: 'leave-periods',
  Certificate: 'certificates',
  Education: 'educations',
};

const commandSelect = (tableName, columnName = 'file_id') => {
  return `SELECT * FROM ${tableName} WHERE ${columnName} IS NOT NULL`;
};

const convertToMulterFile = (file) => {
  const multerFile = {
    size: statSync(file.path).size,
  };

  file.on('data', (chunk) => {
    multerFile.buffer = Buffer.from(chunk);
  });

  return multerFile;
};

// @NOTE: Если у таблицы поле с файлом !== file_id, то необходимо внести поле columnName
const tables = [
  {
    tableName: 'projects',
    columnName: 'image_file_id',
    type: FILE_TYPE.AvatarProject,
  },
  {
    tableName: 'kk_profiles',
    columnName: 'image_file_id',
    type: FILE_TYPE.AvatarUser,
  },
  {
    tableName: 'kk_education',
    type: FILE_TYPE.Education,
  },
  {
    tableName: 'kk_certificates',
    type: FILE_TYPE.Certificate,
  },
  {
    tableName: 'statement_files',
    type: FILE_TYPE.Attachment,
  },
  {
    tableName: 'labor_report_files',
    type: FILE_TYPE.LaborReport,
  },
  {
    tableName: 'leave_period_files',
    type: FILE_TYPE.LeavePeriod,
  },
];

const moveFromLocalStorageToS3 = async () => {
  const transaction = await sequelize.transaction();

  try {
    const notFoundFiles = [];
    const findFilesWithType = [];

    const getFiles = async (array, fileType) => {
      await Promise.all(
        array.map(async (item) => {
          if (!item.file_id) return;

          const file = (
            await sequelize.query(`SELECT * FROM files WHERE id = :file_id`, {
              replacements: { file_id: item.file_id },
            })
          )[1].rows[0];

          const filePath = path.resolve(uploadPath, file.path);

          if (existsSync(filePath)) {
            const fileInLocal = createReadStream(filePath);
            const multerFile = convertToMulterFile(fileInLocal);

            findFilesWithType.push({
              fileId: file.id,
              type: fileType,
              path: file.path,
              file: multerFile,
              name: file.name,
            });
          } else {
            notFoundFiles.push({
              fileId: file.id,
            });
            console.warn(`Файл не найден: ${filePath}`);
          }
        }),
      );
    };

    await Promise.all(
      tables.map(async (table) => {
        let rows = (
          await sequelize.query(
            commandSelect(table.tableName, table.columnName),
            { transaction },
          )
        )[1].rows;

        if (table.columnName === 'image_file_id') {
          rows = rows.map((row) => {
            return {
              ...row,
              file_id: row.image_file_id,
            };
          });
        }

        await getFiles(rows, table.type);
      }),
    );

    await Promise.all(
      findFilesWithType.map(async (fileWithType) => {
        const customBucketName = getPrefixNameBucket(fileWithType.type);

        const hasBucketName = await s3Client.bucketExists(customBucketName);

        if (!hasBucketName) await s3Client.makeBucket(customBucketName);

        s3Client.putObject(
          customBucketName,
          fileWithType.path,
          fileWithType.file.buffer,
          fileWithType.file.size,
          (error) => {
            if (error) throw error;
          },
        );

        unlink(path.resolve(uploadPath, fileWithType.path), (error) => {
          if (error) {
            console.error('Ошибка при удалении файла:', error);
          }
        });

        await sequelize.query(
          `UPDATE files SET path = :new_path WHERE id = :file_id`,
          {
            replacements: {
              new_path: `${getPrefixNameBucket(fileWithType.type)}/${fileWithType.path}`,
              file_id: fileWithType.fileId,
            },
          },
        );
      }),
    );

    await Promise.all(
      notFoundFiles.map(async (file) => {
        await sequelize.query(
          `UPDATE files SET deleted_at = NOW() WHERE id = :file_id`,
          {
            replacements: {
              file_id: file.fileId,
            },
          },
        );
      }),
    );

    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
  }
};

moveFromLocalStorageToS3()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error('Ошибка при переносе файлов. Причина:', err.original);
    process.exit(1);
  });
