import { FileModel } from './file.model';
import { MinioService } from '@back/minio/minio.service';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([FileModel])],
  providers: [MinioService, FileService],
  controllers: [FileController],
})
export class FileModule {}
