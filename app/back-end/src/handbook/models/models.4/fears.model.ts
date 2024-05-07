import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'fears_4', underscored: true, timestamps: false })
export class Fear4Model extends Model<Fear4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;
}
