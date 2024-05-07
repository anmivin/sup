import { CoordinatesModel } from '@back/world/models/coordinates.model';
import { LotModel } from '@back/world/models/lot.model';
import { NeighborhoodModel } from '@back/world/models/neighbourhood.model';
import { WorldModel } from '@back/world/models/world.model';
import { OutputWorldDto, OutputWorldMapDto } from '@back/world/world.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WorldService {
  constructor(
    @InjectModel(WorldModel) private worldModel: typeof WorldModel,
    @InjectModel(NeighborhoodModel) private neighbourhoodModel: typeof NeighborhoodModel,
    @InjectModel(LotModel) private lotModel: typeof LotModel,
    @InjectModel(CoordinatesModel) private coordinatesModel: typeof CoordinatesModel,
  ) {}

  async getWorlds(part: string): Promise<OutputWorldDto[]> {
    const worlds = await this.worldModel.findAll({ where: { part } });
    return worlds.map((world) => ({ key: world.key, icon: world.icon }));
  }

  async getWorldMap(worldKey: string): Promise<OutputWorldMapDto> {
    const world = await this.worldModel.findOne({
      where: { key: worldKey },
      include: [
        { model: this.lotModel, include: [{ model: this.coordinatesModel }] },
        { model: this.neighbourhoodModel },
      ],
    });

    if (!world) throw new Error();
    const result = {
      filledMap: world.filledMap,
      emptyMap: world.emptyMap,
      neighbourhoods: world.neighborhoods.map((neighbourhood) => ({
        key: neighbourhood.key,
        icon: neighbourhood.icon,
      })),
      lots: world.lots.map((lot) => ({
        key: lot.key,
        filledImage: lot.filledImage,
        emptyImage: lot.emptyImage,
        priceFilled: lot.priceFilled,
        priceEmpty: lot.priceEmpty,
        size: lot.size,
        coordinates: lot.coordinates
          ? `M${lot.coordinates.topLeftX} ${lot.coordinates.topLeftY}L${lot.coordinates.topRightX} ${lot.coordinates.topRightY} L${lot.coordinates.bottomRightX} ${lot.coordinates.bottomRightY} L${lot.coordinates.bottomLeftX} ${lot.coordinates.bottomLeftY}Z`
          : '',
      })),
    };

    return result;
  }

  async getLotInfo(lotId: number) {
    return await this.lotModel.findOne({ where: { id: lotId } });
  }
}
