import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';

@Table({ tableName: 'careers', underscored: true, timestamps: false })
export class Career4Model extends Model<Career4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare age: string[];

  @Column
  declare roots: number[];

  @Column
  declare part: string;
}
