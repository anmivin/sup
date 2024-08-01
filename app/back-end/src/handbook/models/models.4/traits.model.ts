import { TraitGroup } from '@back/handbook/handbook.dto';
import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';

@Table({ tableName: 'traits_4', underscored: true, timestamps: false })
export class Trait4Model extends Model<Trait4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare group: TraitGroup;

  @Column
  declare part: string;
}
