import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
  DataType,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
@Table({ tableName: 'skills_4', underscored: true, timestamps: false })
export class Skill4Model extends Model<Skill4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare age: string;

  @Column
  declare steps: number;

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare part: string;
}
