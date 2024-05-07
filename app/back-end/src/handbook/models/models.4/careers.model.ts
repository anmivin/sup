import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'careers_4', underscored: true, timestamps: false })
export class Career4Model extends Model<Career4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;
}
