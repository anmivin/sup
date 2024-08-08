import {
  ForeignKey,
  PrimaryKey,
  Column,
  Model,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
@Table({ tableName: 'achievements', underscored: true, timestamps: false })
export class Achievement4Model extends Model<Achievement4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @BelongsTo(() => FileModel)
  declare icon: FileModel | null;

  @Column
  declare points: number;

  @Column(DataType.ENUM({ values: ['sims_3', 'sims_4'] }))
  declare part: string;
}
