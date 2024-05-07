import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'achievements_4', underscored: true, timestamps: false })
export class Achievement4Model extends Model<Achievement4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @Column
  declare points: number;
}
