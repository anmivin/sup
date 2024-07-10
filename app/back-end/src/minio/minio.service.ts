import multer from 'koa-multer';
import * as Minio from 'minio';
import * as process from 'process';
import { MINIO_CONFIG } from '@back/config';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { FileTypes } from './minio.dto';

const minioUrl = process.env.MINIO_URL;
@Injectable()
export class MinioService {
  private minioClient: Minio.Client;
  constructor() {
    this.minioClient = new Minio.Client(MINIO_CONFIG);
  }

  async createBucket(bucket: string) {
    const existed = this.minioClient.bucketExists(bucket);
    if (!existed) await this.minioClient.makeBucket(bucket);
    return `Bucket ${bucket} ${existed ? 'already exist' : 'created'}`;
  }

  async saveFile(bucket: FileTypes, file: multer.File) {
    this.minioClient.putObject(
      bucket,
      file.name,
      file.buffer,
      file.size,
      (error) => {
        if (error) throw error;
      },
    );
    return `${minioUrl}/${bucket}/${file.name}`;
  }
  async deleteFile(bucket: string, fileName: string) {}
}
