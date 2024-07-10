import { AvatarModel } from '@back/users/models/avatars.model';
import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { InputUserDto, EditUserDto } from '@back/users/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { v4 } from 'uuid';

import FileModel from './file.model';
export enum TYPE_STORAGE {
  S3 = 's3',
  Local = 'local',
}

export const UPLOADS_PATH = process.env.PATH_UPLOADS as string;
export const TYPE_STORAGE_FILES =
  process.env.TYPE_STORAGE_FILES || TYPE_STORAGE.Local;
export const S3_NAMESPACE = process.env.S3_NAMESPACE || 'local';

import s3Client, { FILE_TYPE, getPrefixNameBucket } from './minio.handler';

@Injectable()
export class MinioService {
  constructor(@InjectModel(FileModel) private fileModel: typeof FileModel) {}

  async saveFile(basket: string, files: File[]) {
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
  }
}
