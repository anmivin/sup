import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { UserModel } from '@back/users/models/users.model';
import { LotModel } from './lot.model';
import { FileModel } from '@back/minio/file.model';
@Table({ tableName: 'buildings', underscored: true, timestamps: false })
export class BuildingModel extends Model<BuildingModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => UserModel)
  declare userId: string;

  @Column
  @ForeignKey(() => LotModel)
  declare lotId: string;

  @Column
  @ForeignKey(() => FileModel)
  declare imageId: string;
}
