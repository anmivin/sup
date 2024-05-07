import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';

import { AspirationGroupsTranslationModel, TraitGroupsTranslationModel } from '../models/withPart.model';
import {
  AchievementsTranslationModel,
  AspirationsTranslationModel,
  SkillsTranslationModel,
  TraitsTranslationModel,
  AspirationStepsTranslationModel,
} from '../models/withDescription.model';
import { HandbookService } from './handbook.service';
import { HandbookController } from './handbook.controller';
@Module({
  imports: [
    SequelizeModule.forFeature([
      AchievementsTranslationModel,
      AspirationGroupsTranslationModel,
      TraitGroupsTranslationModel,
      AspirationsTranslationModel,
      SkillsTranslationModel,
      TraitsTranslationModel,
      AspirationStepsTranslationModel,
    ]),
  ],
  providers: [HandbookService],
  controllers: [HandbookController],
})
export class HandbookModule {}
