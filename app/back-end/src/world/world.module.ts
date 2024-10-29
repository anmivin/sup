import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { LotModel } from '@back/world/models/lot.model';
import { NeighborhoodModel } from '@back/world/models/neighbourhood.model';
import { WorldModel } from '@back/world/models/world.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BuildingModel } from './models/building.model';
import { TokenModule } from '@back/token/token.module';
@Module({
  imports: [
    SequelizeModule.forFeature([
      BuildingModel,
      LotModel,
      NeighborhoodModel,
      WorldModel,
    ]),
    TokenModule,
  ],
  providers: [WorldService],
  controllers: [WorldController],
})
export class WorldModule {}
