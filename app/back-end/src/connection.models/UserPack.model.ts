import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'user_pack', underscored: true, timestamps: false })
export class UserPackModel extends Model<UserPackModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => UserModel)
  declare userId: number;

  @BelongsTo(() => UserModel)
  declare user: UserModel;

  @Column
  @ForeignKey(() => PackModel)
  declare packKey: string;

  @BelongsTo(() => PackModel)
  declare pack: PackModel;
}
