import { LotModel } from './lot.model';
import { WorldModel } from './world.model';
import { PrimaryKey, HasMany, BelongsTo, Column, Model, Table, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'neighborhoods', underscored: true, timestamps: false })
export class NeighborhoodModel extends Model<NeighborhoodModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare part: string;

  @Column
  declare icon: string;

  @Column
  @ForeignKey(() => WorldModel)
  declare worldKey: string;

  @BelongsTo(() => WorldModel)
  declare world: WorldModel;

  @HasMany(() => LotModel)
  declare lots: LotModel[];
}
