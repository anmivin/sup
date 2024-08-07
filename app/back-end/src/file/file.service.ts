import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { v4 } from 'uuid';

import { Debug, PUBLIC_BUCKET_NAMES } from '@minio/minio.dto';
import { TreeModel } from '@back/dynasty/models/Tree.model';
import { UserModel } from '@user/models/users.model';
import { SimsModel } from '@back/dynasty/models/Sim.model';
import { MinioService } from '@minio/minio.service';
import { FileModel } from './file.model';
import { SaveFileDto, EditFileDto, DeleteFileDto } from '@minio/minio.dto';

@Injectable()
export class FileService {
  constructor(
    private minioService: MinioService,

    @InjectModel(FileModel) private fileModel: typeof FileModel,
    @InjectModel(SimsModel) private simsModel: typeof SimsModel,
    @InjectModel(TreeModel) private treeModel: typeof TreeModel,
    @InjectModel(UserModel) private userModel: typeof UserModel,
  ) {}

  async saveDebugFile(props: Debug) {
    console.log('==================');
    console.log(props);

    const filePath = await this.minioService.saveFile('debug', props.file);
    const fileId = v4();
    console.log('-----------------', filePath);
    await this.fileModel.create({
      id: fileId,
      path: filePath,
      pathTn: '',
      name: `DEBUG_${props.file.originalname}`,
    });
  }

  async saveFile(props: SaveFileDto) {
    console.log('--------------------', props);
    const filePath = await this.minioService.saveFile(props.type, props.file);
    console.log('--------------------', filePath);
    const fileId = v4();

    const file = await this.fileModel.create({
      id: fileId,
      path: filePath,
      pathTn: '',
      name: props.file.originalname,
    });
    return { id: file.id, url: filePath };
  }

  async editFile(props: EditFileDto) {
    const filePath = await this.minioService.saveFile(props.type, props.file);
    const fileId = v4();

    await this.fileModel.create({
      id: fileId,
      path: filePath,
      pathTn: '',
      name: props.file.originalname,
    });
  }

  async deleteFile(props: DeleteFileDto) {
    let fileId: string | null = null;
    switch (props.type) {
      case PUBLIC_BUCKET_NAMES.UserImage: {
        const entity = await this.userModel.findOne({
          where: { id: props.entityId },
        });
        if (!entity) throw new Error('Не найдено');
        fileId = entity.imageId;
        await entity.update({ imageId: null });
      }

      case PUBLIC_BUCKET_NAMES.SimImage: {
        const entity = await this.simsModel.findOne({
          where: { id: props.entityId },
        });
        if (!entity) throw new Error('Не найдено');
        fileId = entity.imageId;
        await entity.update({ imageId: null });
      }

      case PUBLIC_BUCKET_NAMES.TreeImage: {
        const entity = await this.treeModel.findOne({
          where: { id: props.entityId },
        });
        if (!entity) throw new Error('Не найдено');
        fileId = entity.imageId;
        await entity.update({ imageId: null });
      }
    }
    if (!fileId) throw new Error('Not found');
    const file = await this.fileModel.findOne({ where: { id: fileId } });
    if (!file) throw new Error('Not found');
    await this.minioService.deleteFile(props.type, file.name);
    await file.destroy();
  }
}
