import { SimAspirationModel } from '@back/connection.models/SimAspiration.model';
import { SimCareerModel } from '@back/connection.models/SimCareer.model';
import { SimCollectionModel } from '@back/connection.models/SimCollection.model';
import { SimPositionModel } from '@back/connection.models/SimPosition.model';
import { SimSkillModel } from '@back/connection.models/SimSkill.model';
import { SimTraitModel } from '@back/connection.models/SimTrait.model';
import { ParentChildModel } from '@back/tree/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/tree/models/PartnerPartner.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { TreeModel } from '@back/tree/models/Tree.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TreeController } from '@tree/tree.controller';
import { TreeService } from '@tree/tree.service';

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
    ]),
  ],
  providers: [TreeService],
  controllers: [TreeController],
})
export class TreeModule {}
