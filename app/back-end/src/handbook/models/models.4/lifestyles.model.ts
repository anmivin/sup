import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'lifestyles_4', underscored: true, timestamps: false })
export class Lifestyle4Model extends Model<Lifestyle4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;
}
