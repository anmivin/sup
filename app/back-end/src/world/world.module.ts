import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { LotModel } from '@back/world/models/lot.model';
import { NeighborhoodModel } from '@back/world/models/neighbourhood.model';
import { WorldModel } from '@back/world/models/world.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([LotModel, NeighborhoodModel, WorldModel]),
  ],
  providers: [WorldService],
  controllers: [WorldController],
})
export class WorldModule {}
