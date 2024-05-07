import { CoordinatesModel } from './coordinates.model';
import { NeighborhoodModel } from './neighbourhood.model';
import { WorldModel } from './world.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';

@Table({ tableName: 'lots', underscored: true, timestamps: false })
export class LotModel extends Model<LotModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare part: string;

  @Column
  declare filledImage: string;

  @Column
  declare emptyImage: string;

  @Column
  declare priceFilled: number;

  @Column
  declare priceEmpty: number;

  @Column
  declare size: string;

  @Column
  @ForeignKey(() => WorldModel)
  declare worldKey: string;

  @BelongsTo(() => WorldModel)
  declare world: WorldModel;

  @Column
  @ForeignKey(() => NeighborhoodModel)
  declare neighborhoodKey: string;

  @BelongsTo(() => NeighborhoodModel)
  declare neighborhood: NeighborhoodModel;

  @HasOne(() => CoordinatesModel)
  declare coordinates?: CoordinatesModel;
}
