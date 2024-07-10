import { AspirationGroup } from '@back/handbook/handbook.dto';
import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';

@Table({ tableName: 'aspirations', underscored: true, timestamps: false })
export class Aspiration4Model extends Model<Aspiration4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare steps: number;

  @Column
  declare group: AspirationGroup;

  @Column
  declare bonus: string;

  @Column
  declare part: string;
}
