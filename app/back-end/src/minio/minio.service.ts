import * as Minio from 'minio';

import { v4 } from 'uuid';
import { Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { FileTypes } from './minio.dto';

import { FileTable } from '@back/file/file.dto';

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

  async createBucket(bucket: string) {
    const existed = await this.minioClient.bucketExists(bucket);
    if (!existed) await this.minioClient.makeBucket(bucket);
    return `Bucket ${bucket} ${existed ? 'already exist' : 'created'}`;
  }

  async getFileUrl(bucket: FileTypes, fileName: string) {
    return await this.minioClient.presignedUrl('GET', bucket, fileName);
  }

  async saveFile(bucket: FileTypes, file: Express.Multer.File) {
    const fileName = `${v4()}_${file.originalname}`;
    await this.createBucket(FileTable[bucket]);
    await this.minioClient.putObject(
      bucket,
      fileName,
      file.buffer,
      file.size,
      (error) => {
        if (error) throw error;
      },
    );
    const url = await this.getFileUrl(bucket, fileName);
    return url;
  }

  async deleteFile(bucket: string, fileName: string) {
    await this.minioClient.removeObject(bucket, fileName);
  }
}
