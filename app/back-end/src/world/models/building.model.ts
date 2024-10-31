import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { UserModel } from '@back/user/models/users.model';
import { LotModel } from './lot.model';

export interface BuildingModelCreate
  extends Omit<BuildingModel, keyof Model | 'lot'> {
  id: string;
}
@Table({ tableName: 'buildings', underscored: true, timestamps: false })
export class BuildingModel extends Model<BuildingModel, BuildingModelCreate> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => UserModel)
  declare userId: string;

  @Column
  @ForeignKey(() => LotModel)
  declare lotId: string;

  @BelongsTo(() => LotModel)
  declare lot: LotModel;

  @Column(DataType.JSON)
  declare layout: object | null;
}
