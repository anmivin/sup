import {
  PrimaryKey,
  DataType,
  ForeignKey,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
export interface UserModelCreate extends Omit<UserModel, keyof Model> {
  id: string;
}

@Table({ tableName: 'users', underscored: true, timestamps: false })
export class UserModel extends Model<UserModel, UserModelCreate> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  declare name: string;

  @Column(DataType.STRING)
  declare password: string | null;

  @Column(DataType.STRING)
  declare email: string | null;

  @Column(DataType.ENUM({ values: ['local', 'google'] }))
  declare type: string;

  @Column(DataType.STRING)
  @ForeignKey(() => FileModel)
  declare imageId: string | null;
}
