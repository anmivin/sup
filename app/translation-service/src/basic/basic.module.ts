import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BaseTranslationModel } from '../models/base.model';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';
@Module({
  imports: [SequelizeModule.forFeature([BaseTranslationModel])],
  providers: [BasicService],
  controllers: [BasicController],
})
export class BasicModule {}
