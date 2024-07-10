import { Age } from '@back/handbook/handbook.dto';
import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/minio/file.model';
@Table({ tableName: 'skills_4', underscored: true, timestamps: false })
export class Skill4Model extends Model<Skill4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare steps: number;

  @Column
  declare age: Age;

  @Column
  declare part: string;
}
