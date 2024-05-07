import { AspirationGroup } from '@back/handbook/handbook.dto';
import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'aspirations_4', underscored: true, timestamps: false })
export class Aspiration4Model extends Model<Aspiration4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare icon: string;

  @Column
  declare steps: number;

  @Column
  declare group: AspirationGroup;

  @Column
  declare bonus: string;
}
