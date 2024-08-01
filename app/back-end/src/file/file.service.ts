import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
/* import bcrypt from 'bcryptjs';
import { Op } from 'sequelize'; */
import { v4 } from 'uuid';

import { PUBLIC_BUCKET_NAMES } from '@back/minio/minio.dto';
import { TreeModel } from '@back/tree/models/Tree.model';
import { UserModel } from '@back/users/models/users.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { MinioService } from '@back/minio/minio.service';
import { FileModel } from './file.model';
import { SaveFileDto, EditFileDto, DeleteFileDto } from '../minio/minio.dto';
import * as Minio from 'minio';
import { FileTable } from './file.dto';

@Injectable()
export class FileService {
  private minioService: MinioService;
  constructor(
    @InjectModel(FileModel) private fileModel: typeof FileModel,
    @InjectModel(SimsModel) private simsModel: typeof SimsModel,
    @InjectModel(TreeModel) private treeModel: typeof TreeModel,
    @InjectModel(UserModel) private userModel: typeof UserModel,
  ) {}

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

  getModel(bucket: PUBLIC_BUCKET_NAMES) {
    switch (bucket) {
      case PUBLIC_BUCKET_NAMES.Avatars:
        return this.userModel;
      case PUBLIC_BUCKET_NAMES.SimImage:
        return this.simsModel;
      case PUBLIC_BUCKET_NAMES.TreeImage:
        return this.treeModel;
    }
  }
  async saveFile(props: SaveFileDto, bucket: PUBLIC_BUCKET_NAMES) {
    await this.minioService.createBucket(bucket);
    const entity = await this.getModel(bucket).findOne({
      where: { id: props.entityId },
    });
    await Promise.all(
      props.file.map((item) => {
        const filePath = this.minioService.saveFile(bucket, item);
        const file = this.fileModel.create({
          id: v4(),
          path: filePath,
          name: props.file.name,
        });
      }),
      entity.update({ imageId: file.id }),
    );
  }
  async editFile(props: EditFileDto) {}

  async deleteFile(props: DeleteFileDto) {
    const file = await this.fileModel.findOne({ where: { id } });
    await file.destroy();
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

 */
}
