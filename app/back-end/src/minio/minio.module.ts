/* import { FileModel } from './file.model'; */
import { MinioController } from './minio.controller';
import { MinioService } from './minio.service';

import { Module } from '@nestjs/common';
/* import { SequelizeModule } from '@nestjs/sequelize'; */

@Module({
  /*   imports: [SequelizeModule.forFeature([FileModel])], */
  providers: [MinioService],
  controllers: [MinioController],
})
export class MinioModule {}
