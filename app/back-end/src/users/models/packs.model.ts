import { PrimaryKey, DataType, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'packs', underscored: true, timestamps: false })
export class PackModel extends Model<PackModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @Column
  declare part: string;

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare type: string;
}
