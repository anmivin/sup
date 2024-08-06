import { TraitGroup } from '@back/handbook/handbook.dto';
import {
  PrimaryKey,
  ForeignKey,
  Column,
  Model,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';

@Table({ tableName: 'traits', underscored: true, timestamps: false })
export class Trait4Model extends Model<Trait4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  @ForeignKey(() => FileModel)
  declare iconId: string;

  @BelongsTo(() => FileModel)
  declare icon: FileModel | null;

  @Column
  declare group: TraitGroup;

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare part: string;
}
