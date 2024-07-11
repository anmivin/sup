import { LotModel } from './lot.model';
import { NeighborhoodModel } from './neighbourhood.model';
import {
  ForeignKey,
  PrimaryKey,
  Column,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { FileModel } from '@back/minio/file.model';

@Table({ tableName: 'worlds', underscored: true, timestamps: false })
export class WorldModel extends Model<WorldModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare part: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  @ForeignKey(() => FileModel)
  declare filledMapId: string;

  @Column
  @ForeignKey(() => FileModel)
  declare emptyMapId: string;

  @HasMany(() => NeighborhoodModel)
  declare neighborhoods: NeighborhoodModel[];

  @HasMany(() => LotModel)
  declare lots: LotModel[];
}
