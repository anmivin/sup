import { LotModel } from './lot.model';
import { NeighborhoodModel } from './neighbourhood.model';
import {
  ForeignKey,
  PrimaryKey,
  Column,
  Model,
  Table,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';

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

  @BelongsTo(() => FileModel)
  declare icon: FileModel | null;

  @Column
  @ForeignKey(() => FileModel)
  declare filledMapId: string;

  @BelongsTo(() => FileModel)
  declare filledMap: FileModel | null;

  @Column
  @ForeignKey(() => FileModel)
  declare emptyMapId: string;

  @BelongsTo(() => FileModel)
  declare emptyMap: FileModel | null;

  @HasMany(() => NeighborhoodModel)
  declare neighborhoods: NeighborhoodModel[];

  @HasMany(() => LotModel)
  declare lots: LotModel[];
}
