import {
  PrimaryKey,
  DataType,
  ForeignKey,
  Column,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';

import { UserModel } from '@back/user/models/users.model';
export interface TokenModelCreate extends Omit<TokenModel, keyof Model> {}

@Table({ tableName: 'tokens', underscored: true, timestamps: false })
export class TokenModel extends Model<TokenModel, TokenModelCreate> {
  @PrimaryKey
  @Column
  declare token: string;

  @Column
  declare expires: Date;

  @Column(DataType.STRING)
  @ForeignKey(() => UserModel)
  declare userId: string | null;

  @BelongsTo(() => UserModel)
  declare user: UserModel | null;
}
