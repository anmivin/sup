import { Age } from '@back/handbook/handbook.dto';
import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'skills_4', underscored: true, timestamps: false })
export class Skill4Model extends Model<Skill4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @Column
  declare steps: number;

  @Column
  declare age: Age;
}
