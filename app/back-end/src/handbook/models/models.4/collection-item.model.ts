import { Collection4Model } from '@back/handbook/models/models.4/collections.model';

import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { FileModel } from '@file/file.model';
@Table({ tableName: 'collection_items', underscored: true, timestamps: false })
export class CollectionItem4Model extends Model<CollectionItem4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @BelongsTo(() => FileModel)
  declare icon: FileModel | null;

  @ForeignKey(() => Collection4Model)
  @Column
  declare collectionKey: string;

  @BelongsTo(() => Collection4Model)
  declare collection: Collection4Model;

  @Column
  declare rarity: string;
}
