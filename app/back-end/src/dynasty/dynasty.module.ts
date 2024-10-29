import { SimAspirationModel } from '@back/connection.models/SimAspiration.model';
import { SimCareerModel } from '@back/connection.models/SimCareer.model';
import { SimCollectionModel } from '@back/connection.models/SimCollection.model';
import { SimPositionModel } from '@back/connection.models/SimPosition.model';
import { SimSkillModel } from '@back/connection.models/SimSkill.model';
import { SimTraitModel } from '@back/connection.models/SimTrait.model';
import { ParentChildModel } from '@back/dynasty/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/dynasty/models/PartnerPartner.model';
import { SimsModel } from '@back/dynasty/models/Sim.model';
import { TreeModel } from '@back/dynasty/models/Tree.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DynastyController } from '@dynasty/dynasty.controller';
import { DynastyService } from '@back/dynasty/dynasty.service';
import { FileModel } from '@back/file/file.model';
import { TokenModule } from '@back/token/token.module';
@Module({
  imports: [
    SequelizeModule.forFeature([
      SimsModel,
      TreeModel,
      ParentChildModel,
      PartnerPartnerModel,
      SimAspirationModel,
      SimCareerModel,
      SimCollectionModel,
      SimPositionModel,
      SimSkillModel,
      SimTraitModel,
      FileModel,
    ]),
    TokenModule,
  ],
  providers: [DynastyService],
  controllers: [DynastyController],
})
export class DynastyModule {}
