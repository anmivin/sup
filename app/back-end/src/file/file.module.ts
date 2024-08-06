import { FileModel } from './file.model';
import { MinioService } from '@back/minio/minio.service';
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TreeModel } from '@back/dynasty/models/Tree.model';
import { UserModel } from '@user/models/users.model';
import { SimsModel } from '@back/dynasty/models/Sim.model';
@Module({
  imports: [
    SequelizeModule.forFeature([FileModel, TreeModel, UserModel, SimsModel]),
  ],
  providers: [MinioService, FileService],
  controllers: [FileController],
})
export class FileModule {}
