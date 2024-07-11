import {
  ForeignKey,
  PrimaryKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/minio/file.model';
@Table({ tableName: 'achievements', underscored: true, timestamps: false })
export class Achievement4Model extends Model<Achievement4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @Column
  declare points: number;

  @Column
  declare part: string;
}
