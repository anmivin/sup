import { TraitGroup } from '@back/handbook/handbook.dto';
import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'traits_4', underscored: true, timestamps: false })
export class Trait4Model extends Model<Trait4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @Column
  declare group: TraitGroup;
}
