import { existsSync } from 'fs';
import * as Minio from 'minio';
import path from 'path';

import achievements from '../../../backend-shared/database/achievements.json';
import aspirations from '../../../backend-shared/database/aspirations.json';
import careers from '../../../backend-shared/database/careers.json';
import skills from '../../../backend-shared/database/skills.json';
import traits from '../../../backend-shared/database/traits.json';

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT || '127.0.0.1';
const MINIO_PORT = +(process.env.MINIO_PORT || 9000);
const MINIO_ACCESS = process.env.MINIO_ACCESS || 'accessKey';
const MINIO_SECRET = process.env.MINIO_SECRET || 'secretKey';

const UPLOADS_PATH = process.env.UPLOADS_PATH || '../front-end/public/sims4/';

const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT,
  port: MINIO_PORT,
  useSSL: false,
  accessKey: MINIO_ACCESS,
  secretKey: MINIO_SECRET,
});
const policy = (bucketName: string) => {
  return {
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: {
          AWS: ['*'],
        },
        Action: ['s3:GetObject'],
        Resource: [`arn:aws:s3:::${bucketName}/*`],
      },
    ],
  };
};

const existsBucket = async (bucketName: string) => {
  const hasBucketName = await minioClient.bucketExists(bucketName);
  if (!hasBucketName) await minioClient.makeBucket(bucketName);
  const bucketPolicy = JSON.stringify(policy(bucketName));
  console.log(bucketPolicy);
  await minioClient.setBucketPolicy(bucketName, bucketPolicy);
};

/* const deleteFilesFromDisk = (files: FoundFile[]) => {
  files.map((file) => {
    unlink(path.resolve(UPLOADS_PATH, file.path), (error) => {
      if (error) {
        console.error('Ошибка при удалении файла:', error);
      }
    });
  });
}; */

const moveFromLocalStorageToS3 = async () => {
  try {
    const notFoundFiles: string[] = [];
    const foundFiles: { name: string; path: string }[] = [];
    const achievementIcons = achievements.map((item) => item.icon);
    await Promise.all(
      achievementIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'achievements/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push(item);

          console.warn(`Файл не найден: ${filePath}`);
          return;
        }

        await existsBucket('icons');

        await minioClient.fPutObject('icons', `achievements_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const aspirationsIcons = aspirations.map((item) => item.icon);
    await Promise.all(
      aspirationsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'aspirations/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push(item);

          console.warn(`Файл не найден: ${filePath}`);
          return;
        }

        await existsBucket('icons');

        await minioClient.fPutObject('icons', `aspirations_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const skillsIcons = skills.map((item) => item.icon);
    await Promise.all(
      skillsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'skills/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push(item);

          console.warn(`Файл не найден: ${filePath}`);
          return;
        }

        await existsBucket('icons');

        await minioClient.fPutObject('icons', `skills_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const traitsIcons = traits.map((item) => item.icon);
    await Promise.all(
      traitsIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'traits/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push(item);

          console.warn(`Файл не найден: ${filePath}`);
          return;
        }

        await existsBucket('icons');

        await minioClient.fPutObject('icons', `traits_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );

    const careersIcons = careers.map((item) => item.icon);
    await Promise.all(
      careersIcons.map(async (item) => {
        const filePath = path.resolve(UPLOADS_PATH, 'careers/', item);

        if (!existsSync(filePath)) {
          notFoundFiles.push(item);

          console.warn(`Файл не найден: ${filePath}`);
          return;
        }

        await existsBucket('icons');

        await minioClient.fPutObject('icons', `careers_${item}`, filePath);

        foundFiles.push({
          name: item,
          path: filePath,
        });
      }),
    );
    console.info(
      '-------------------------------------------------------------------------',
    );
    console.info(
      `Удалось перенести в объектное хранилище ${foundFiles.length} файлов`,
    );
    console.info(
      '-------------------------------------------------------------------------',
    );
    console.info(
      `НЕ удалось перенести в объектное хранилище ${notFoundFiles.length} файлов`,
    );
    console.info(
      '-------------------------------------------------------------------------',
    );

    /* deleteFilesFromDisk(foundFiles); */
  } catch (error) {
    throw error;
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
