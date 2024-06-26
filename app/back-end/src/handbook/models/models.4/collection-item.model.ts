import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { PackModel } from '@back/users/models/packs.model';
import { PrimaryKey, ForeignKey, Column, Model, Table, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'collection_items_4', underscored: true, timestamps: false })
export class CollectionItem4Model extends Model<CollectionItem4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @ForeignKey(() => Collection4Model)
  @Column
  declare collectionKey: string;

  @BelongsTo(() => Collection4Model)
  declare collection: Collection4Model;

  @ForeignKey(() => PackModel)
  @Column
  declare packKey: string;

  @BelongsTo(() => PackModel)
  declare pack: PackModel;

  @Column
  declare rarity: string;
}
