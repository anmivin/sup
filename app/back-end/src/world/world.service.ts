import { LotModel } from '@back/world/models/lot.model';
import { NeighborhoodModel } from '@back/world/models/neighbourhood.model';
import { WorldModel } from '@back/world/models/world.model';
import {
  OutputWorldDto,
  OutputWorldMapDto,
  InputBuildingDto,
} from '@back/world/world.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingModel } from './models/building.model';
@Injectable()
export class WorldService {
  constructor(
    @InjectModel(WorldModel) private worldModel: typeof WorldModel,
    @InjectModel(NeighborhoodModel)
    private neighbourhoodModel: typeof NeighborhoodModel,
    @InjectModel(LotModel) private lotModel: typeof LotModel,
    @InjectModel(BuildingModel) private buildingModel: typeof BuildingModel,
  ) {}

  async getWorlds(part: string): Promise<OutputWorldDto[]> {
    const worlds = await this.worldModel.findAll({ where: { part } });
    return worlds.map((world) => ({ key: world.key, icon: world.iconId }));
  }

  async getWorldMap(worldKey: string): Promise<OutputWorldMapDto> {
    const world = await this.worldModel.findOne({
      where: { key: worldKey },
      include: [{ model: this.lotModel }, { model: this.neighbourhoodModel }],
    });

    if (!world) throw new Error();
    const result = {
      filledMap: world.filledMapId,
      emptyMap: world.emptyMapId,
      neighbourhoods: world.neighborhoods.map((neighbourhood) => ({
        key: neighbourhood.key,
        icon: neighbourhood.iconId,
      })),
      lots: world.lots.map((lot) => ({
        key: lot.key,
        price: lot.price,
        width: lot.width,
        height: lot.height,
        svgPath: lot.svgPath,
      })),
    };

    return result;
  }

  async getLotInfo(lotId: number) {
    return await this.lotModel.findOne({ where: { id: lotId } });
  }

  async getBuildingInfo(key: string) {
    const found = await this.buildingModel.findOne({ where: { id: key } });
    if (!found) throw new NotFoundException('');
    return found;
  }

  async createBuilding(
    buildingId: string,
    userId: string,
    lotId: string,
    layout: JSON,
  ) {
    const building = await this.buildingModel.create({
      id: buildingId,
      userId,
      lotId,
      layout,
    });
    if (!building) throw new NotFoundException('');
  }

  async editBuilding(buildingId: string, props: InputBuildingDto) {
    const building = await this.buildingModel.findOne({
      where: { id: buildingId },
    });
    if (!building) throw new NotFoundException('');
    const b = await building.update({
      id: buildingId,
      ...props,
    });
    return b.id;
  }

  async getBuilding(buildingId: string) {
    const building = await this.buildingModel.findOne({
      where: { id: buildingId },
    });
    if (!building) throw new NotFoundException('');

    return building;
  }
}
