import { CollectionItem4Model } from '@back/handbook/models/models.4/collection-item.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';

@Table({ tableName: 'collections', underscored: true, timestamps: false })
export class Collection4Model extends Model<Collection4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare count: number;

  @Column
  declare part: string;

  @HasMany(() => CollectionItem4Model)
  declare collectionItems: CollectionItem4Model[];
}
