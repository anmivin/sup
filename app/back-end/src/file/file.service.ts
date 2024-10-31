import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { v4 } from 'uuid';

import { I18nContext, I18nService } from 'nestjs-i18n';
import { MinioService } from '@minio/minio.service';
import { FileModel } from './file.model';
import { SaveFileDto, EditFileDto, DeleteFileDto } from '@minio/minio.dto';

@Injectable()
export class FileService {
  constructor(
    private minioService: MinioService,
    @InjectModel(FileModel) private fileModel: typeof FileModel,
    private readonly i18n: I18nService,
  ) {}

  async saveFile(props: SaveFileDto) {
    const filePath = await this.minioService.saveFile(props.type, props.file);
    const fileId = v4();

    const file = await this.fileModel.create({
      id: fileId,
      path: filePath,
      pathTn: '',
      name: props.file.originalname,
    });
    return { id: file.id, url: filePath };
  }

  async deleteFile(props: DeleteFileDto) {
    const file = await this.fileModel.findOne({
      where: { id: props.file.path },
    });
    if (!file)
      throw new NotFoundException(
        `${this.i18n.t('exceptions.file', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.notfound.masculine', { lang: I18nContext.current()?.lang })}`,
      );
    await this.minioService.deleteFile(props.type, file.name);
    await file.destroy();
  }
}
