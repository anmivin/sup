import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
@Table({ tableName: 'lifestyles', underscored: true, timestamps: false })
export class Lifestyle4Model extends Model<Lifestyle4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;
}
