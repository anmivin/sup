import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  TreeRelatedTranslationModel,
  OtheTranslationModel,
} from '../models/base.model';
import { MiscService } from './misc.service';
import { MiscController } from './misc.controller';
@Module({
  imports: [
    SequelizeModule.forFeature([
      TreeRelatedTranslationModel,
      OtheTranslationModel,
    ]),
  ],
  providers: [MiscService],
  controllers: [MiscController],
})
export class MiscModule {}
