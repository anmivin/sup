import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BaseTranslationModel } from './models/base.model';
import { HandbookModule } from './handbook/handbook.module';
import {
  OtherTranslationModel,
  AspirationGroupsTranslationModel,
  TraitGroupsTranslationModel,
} from './models/withPart.model';
import {
  AchievementsTranslationModel,
  AspirationsTranslationModel,
  SkillsTranslationModel,
  TraitsTranslationModel,
  ExpansionsTranslationModel,
  DeathsTranslationModel,
  FearsTranslationModel,
  TownsTranslationModel,
  CollectionItemsTranslationModel,
  AspirationStepsTranslationModel,
  CollectionsTranslationModel,
} from './models/withDescription.model';

import { BasicModule } from './basic/basic.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'translations',
      /*       autoLoadModels: true, */
      /*       synchronize: true, */
      models: [
        BaseTranslationModel,
        OtherTranslationModel,
        AspirationGroupsTranslationModel,
        TraitGroupsTranslationModel,
        CollectionsTranslationModel,
        AchievementsTranslationModel,
        AspirationsTranslationModel,
        SkillsTranslationModel,
        TraitsTranslationModel,
        ExpansionsTranslationModel,
        DeathsTranslationModel,
        FearsTranslationModel,
        TownsTranslationModel,
        CollectionItemsTranslationModel,
        AspirationStepsTranslationModel,
      ],
    }),
    BasicModule,
    HandbookModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
