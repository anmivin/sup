import { SimAspirationModel } from './connection.models/SimAspiration.model';
import { SimCareerModel } from './connection.models/SimCareer.model';
import { SimCollectionModel } from './connection.models/SimCollection.model';
import { SimSkillModel } from './connection.models/SimSkill.model';
import { SimTraitModel } from './connection.models/SimTrait.model';
import { UserAchievementModel } from './connection.models/UserAchievement.model';
import { UserPackModel } from './connection.models/UserPack.model';
import { AuthModule } from '@back/auth/auth.module';
import { NEST_CONFIG } from '@back/config';
import { HandbookModule } from '@back/handbook/handbook.module';
import { Achievement4Model } from '@back/handbook/models/models.4/achievements.model';
import { Aspiration4Model } from '@back/handbook/models/models.4/aspirations.model';
import { Career4Model } from '@back/handbook/models/models.4/careers.model';
import { CollectionItem4Model } from '@back/handbook/models/models.4/collection-item.model';
import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { Death4Model } from '@back/handbook/models/models.4/deaths.model';
import { Fear4Model } from '@back/handbook/models/models.4/fears.model';
import { Skill4Model } from '@back/handbook/models/models.4/skills.model';
import { Trait4Model } from '@back/handbook/models/models.4/traits.model';
import { TokenModule } from '@back/token/token.module';
import { ParentChildModel } from '@back/tree/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/tree/models/PartnerPartner.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { TreeModel } from '@back/tree/models/Tree.model';
import { TreeModule } from '@back/tree/tree.module';
import { AvatarModel } from '@back/users/models/avatars.model';
import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { UsersModule } from '@back/users/users.module';
import { CoordinatesModel } from '@back/world/models/coordinates.model';
import { LotModel } from '@back/world/models/lot.model';
import { NeighborhoodModel } from '@back/world/models/neighbourhood.model';
import { WorldModel } from '@back/world/models/world.model';
import { WorldModule } from '@back/world/world.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

/* import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
 */
//из енва значения поставить
@Module({
  imports: [
    /*  I18nModule.forRoot({
      fallbackLanguage: 'ru',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
    }), */
    ConfigModule.forRoot({
      isGlobal: true,
      load: [NEST_CONFIG],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: config.get('dialect'),
        host: config.get('host'),
        port: config.get('db_port'),
        username: config.get('db_username'),
        password: config.get('db_password'),
        database: config.get('db_database'),
        autoLoadModels: true,
        synchronize: true,
        models: [
          Achievement4Model,
          Aspiration4Model,
          Career4Model,
          CollectionItem4Model,
          Collection4Model,
          Death4Model,
          Fear4Model,
          Skill4Model,
          Trait4Model,
          SimsModel,
          TreeModel,
          UserModel,
          AvatarModel,
          PackModel,
          ParentChildModel,
          PartnerPartnerModel,
          SimAspirationModel,
          SimCareerModel,
          SimCollectionModel,
          SimSkillModel,
          SimTraitModel,
          UserAchievementModel,
          UserPackModel,
          CoordinatesModel,
          LotModel,
          NeighborhoodModel,
          WorldModel,
        ],
      }),
    }),
    HandbookModule,
    TreeModule,
    UsersModule,
    WorldModule,
    TokenModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
