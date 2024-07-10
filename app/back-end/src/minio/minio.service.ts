/* import { AvatarModel } from '@back/users/models/avatars.model';
import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { InputUserDto, EditUserDto } from '@back/users/user.dto'; */
import { Injectable /* NotFoundException */ } from '@nestjs/common';
/* import { InjectModel } from '@nestjs/sequelize'; */
/* import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { v4 } from 'uuid';
 */
/* import { FileModel } from './file.model'; */

import * as Minio from 'minio';

@Injectable()
export class MinioService {
  constructor(/* @InjectModel(FileModel) private fileModel: typeof FileModel */) {}

  async justFunc() {
    const minioClient = new Minio.Client({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });

    const sad = await minioClient.listBuckets();
    const asd = await minioClient.listObjects('icons');

    const presignedUrl = await minioClient.presignedUrl(
      'GET',
      'icons',
      'favicon.png',
      24 * 60 * 60,
    );
    console.log(sad);
    console.log('================');
    console.log(asd);
    console.log('================');
    console.log(presignedUrl);
    return 'asda';
  }

  async createBucket(backet: string) {
    const minioClient = new Minio.Client({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });
    minioClient.makeBucket(backet);
  }

  /*  async saveFile(bucket: string, files: File[]) {
    const minioClient = new Minio.Client({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'minioadmin',
      secretKey: 'minioadmin',
    });
    minioClient.fPutObject(bucket, )
    const actions = files.map(async (file) => {
      const url = `${25}`;

      return this.fileModel.create({
        path: url,
        pathTn: `${url}Tn`,
        name: file.originalname,
        size: file.size,
      });
    });
    return Promise.all(actions);
  }

  async deleteFile(basket: string, id: string) {
    const file = await this.fileModel.findOne({ where: { id } });
    await file.destroy();
  } */
}
