import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'deaths', underscored: true, timestamps: false })
export class Death4Model extends Model<Death4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare part: string;
}
