import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from '@back/users/models/users.model';
import { LotModel } from './lot.model';
import { FileModel } from '@back/file/file.model';
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

  @BelongsTo(() => LotModel)
  declare lot: LotModel;

  @Column
  @ForeignKey(() => FileModel)
  declare imageId: string;

  @BelongsTo(() => FileModel)
  declare image: FileModel | null;
}
