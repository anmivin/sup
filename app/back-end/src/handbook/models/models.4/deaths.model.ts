import { PackModel } from '@back/users/models/packs.model';
import { PrimaryKey, ForeignKey, Column, Model, Table, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'deaths_4', underscored: true, timestamps: false })
export class Death4Model extends Model<Death4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @ForeignKey(() => PackModel)
  @Column
  declare packKey: string;

  @BelongsTo(() => PackModel)
  declare pack: PackModel;
}
