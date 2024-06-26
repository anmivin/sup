import { PrimaryKey, DataType, Column, Model, Table } from 'sequelize-typescript';

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
}
