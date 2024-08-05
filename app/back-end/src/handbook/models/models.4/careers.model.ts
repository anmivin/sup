import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
  DataType,
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

  @Column(DataType.ARRAY(DataType.STRING))
  declare age: string[];

  @Column(DataType.ARRAY(DataType.INTEGER))
  declare roots: number[];

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare part: string;
}
