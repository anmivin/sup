import { UserModel } from '@back/users/models/users.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
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

  @Column(DataType.STRING)
  @ForeignKey(() => FileModel)
  declare imageId: string | null;
}
