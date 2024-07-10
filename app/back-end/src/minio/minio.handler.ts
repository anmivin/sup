import multer from 'koa-multer';
import * as Minio from 'minio';
import * as process from 'process';

const TYPE_STORAGE_FILES = 'local';

const S3_DOMAIN = 'domain.com';
const S3_PORT = 443;
const S3_ACCESS_KEY = 'accessKey';
const S3_SECRET_KEY = 'secretKey';
const S3_NAMESPACE = 'local';
const UPLOADS_PATH = './files/uploads';

export enum TYPE_STORAGE {
  S3 = 's3',
  Local = 'local',
}

export enum FILE_TYPE {
  Icons = 'icons',
  Avatars = 'avatars',
  SimImage = 'simImage',
  TreeImage = 'treeImage',
  WorldImage = 'worldImage',
}

export const getPrefixNameBucket = (bucketName: string) => {
  return `resource-${S3_NAMESPACE}-${bucketName}`;
};

export const getBucketAndObjectNames = (pathFile: string) => {
  const index = pathFile.indexOf('/');

  const bucketName = pathFile.slice(0, index);
  const objectName = pathFile.slice(index + 1);

  return { bucketName, objectName };
};

export class S3Client {
  private readonly s3Client: Minio.Client;
  private readonly tags = {};

  constructor() {
    const accessKey = process.env.S3_ACCESS_KEY;
    const secretKey = process.env.S3_SECRET_KEY;
    const domain = process.env.S3_DOMAIN;
    const port = process.env.S3_PORT;
    const tags = process.env.S3_TAGS;

    if (!domain || !accessKey || !secretKey || !port || isNaN(+port) || !tags) {
      throw new Error('Проверьте данные конфигурации для клиента S3');
    }

    const s3Config = {
      endPoint: domain,
      accessKey: accessKey,
      secretKey: secretKey,
      port: +port,
      useSSL: true,
    };

    this.s3Client = new Minio.Client(s3Config);

    const valueTags = tags.split(',');

    this.tags = keyTags.reduce((resultObjectWithTags, key, index) => {
      resultObjectWithTags[key] = valueTags[index];
      return resultObjectWithTags;
    }, {});

    for (const bucketName in FILE_TYPE) {
      const customBucketName = getPrefixNameBucket(FILE_TYPE[bucketName]);

      this.s3Client.bucketExists(
        customBucketName,
        async (_error, hasBucketName) => {
          if (!hasBucketName) await this.makeBucketS3(customBucketName);
        },
      );
    }
  }

  async makeBucketS3(bucketName: string) {
    await this.s3Client.makeBucket(bucketName);
    await this.s3Client.setBucketTagging(bucketName, this.tags);
  }

  async sendFile(bucketName: FILE_TYPE, nameFile: string, file: multer.File) {
    const customBucketName = getPrefixNameBucket(bucketName);

    this.s3Client.putObject(
      customBucketName,
      nameFile,
      file.buffer,
      file.size,
      (error) => {
        if (error) throw error;
      },
    );
  }

  async getStreamFile(pathFile: string) {
    const { bucketName, objectName } = getBucketAndObjectNames(pathFile);

    return this.s3Client.getObject(bucketName, objectName);
  }

  async getBinaryFile(pathFile: string) {
    const { bucketName, objectName } = getBucketAndObjectNames(pathFile);

    return new Promise((resolve, reject) => {
      this.s3Client.getObject(bucketName, objectName, (err, dataStream) => {
        if (err) {
          return reject(err);
        }

        const chunks: Buffer[] = [];

        dataStream.on('data', (chunk) => {
          chunks.push(chunk);
        });

        dataStream.on('end', () => {
          const binaryData = Buffer.concat(chunks);
          resolve(binaryData);
        });

        dataStream.on('error', (err) => {
          reject(err);
        });
      });
    });
  }
}

const s3Client = new S3Client();

export default s3Client;
