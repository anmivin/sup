import { HandbookController } from '@back/handbook/handbook.controller';
import { HandbookService } from '@back/handbook/handbook.service';
import { Achievement4Model } from '@back/handbook/models/models.4/achievements.model';
import { Aspiration4Model } from '@back/handbook/models/models.4/aspirations.model';
import { Career4Model } from '@back/handbook/models/models.4/careers.model';
import { CollectionItem4Model } from '@back/handbook/models/models.4/collection-item.model';
import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { Death4Model } from '@back/handbook/models/models.4/deaths.model';
import { Skill4Model } from '@back/handbook/models/models.4/skills.model';
import { Trait4Model } from '@back/handbook/models/models.4/traits.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModel } from '@file/file.model';
import { TokenModule } from '@back/token/token.module';
@Module({
  imports: [
    SequelizeModule.forFeature([
      Achievement4Model,
      Aspiration4Model,
      Career4Model,
      CollectionItem4Model,
      Collection4Model,
      Death4Model,
      Skill4Model,
      Trait4Model,
      FileModel,
    ]),
    TokenModule,
  ],
  providers: [HandbookService],
  controllers: [HandbookController],
})
export class HandbookModule {}
