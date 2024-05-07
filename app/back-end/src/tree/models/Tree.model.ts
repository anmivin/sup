import { UserModel } from '@back/users/models/users.model';
import { PrimaryKey, Column, Model, Table, ForeignKey } from 'sequelize-typescript';

export interface TreeModelCreate extends Omit<TreeModel, keyof Model> {}

@Table({ tableName: 'trees', underscored: true, timestamps: false })
export class TreeModel extends Model<TreeModel, TreeModelCreate> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => UserModel)
  declare userId: string;

  @Column
  declare name: string;

  @Column
  declare image: string;
}
