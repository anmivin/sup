import * as Minio from 'minio';

import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

const MINIO_URL = process.env.MINIO_URL ?? 'http://127.0.0.1:9000';

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

@Injectable()
export class MinioService {
  private minioClient: Minio.Client;
  constructor(private configService: ConfigService) {
    this.minioClient = new Minio.Client({
      endPoint: this.configService.get('minio_endpoint') ?? '',
      port: Number(this.configService.get('minio_port')),
      useSSL: this.configService.get('minio_useSSL'),
      accessKey: this.configService.get('minio_access') ?? '',
      secretKey: this.configService.get('minio_secret') ?? '',
    });
  }

  async dosmth() {
    return 'working';
  }
  async createBucket(bucket: string) {
    console.log('createBucket', bucket);
    const existed = await this.minioClient.bucketExists(bucket);
    console.log('existed', existed);
    if (!existed) await this.minioClient.makeBucket(bucket);
    const bucketPolicy = JSON.stringify(policy(bucket));
    console.log(bucketPolicy);
    await this.minioClient.setBucketPolicy(bucket, bucketPolicy);
    return `Bucket ${bucket} ${existed ? 'already exist' : 'created'}`;
  }

  async saveFile(bucket: string, file: Express.Multer.File) {
    const fileName = `${v4()}_${file.originalname}`;
    await this.createBucket(bucket);
    await this.minioClient.putObject(
      bucket,
      fileName,
      file.buffer,
      file.size,
      (error) => {
        if (error) throw error;
      },
    );
    const url = `${MINIO_URL}/${bucket}/${fileName}`;

    return url;
  }

  async deleteFile(bucket: string, fileName: string) {
    await this.minioClient.removeObject(bucket, fileName);
  }
}
