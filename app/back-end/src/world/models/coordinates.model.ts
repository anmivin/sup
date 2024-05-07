import { LotModel } from './lot.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'coordinates', underscored: true, timestamps: false })
export class CoordinatesModel extends Model<CoordinatesModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => LotModel)
  declare lotKey: string;

  @BelongsTo(() => LotModel)
  declare lot: LotModel;

  @Column
  declare topLeftX: number;

  @Column
  declare topLeftY: number;

  @Column
  declare topRightX: number;

  @Column
  declare topRightY: number;

  @Column
  declare bottomRightX: number;

  @Column
  declare bottomRightY: number;

  @Column
  declare bottomLeftX: number;

  @Column
  declare bottomLeftY: number;
}
