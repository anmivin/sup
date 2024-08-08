import { UserModel } from '@back/user/models/users.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
export interface TreeModelCreate extends Omit<TreeModel, keyof Model> {
  id: string;
}

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

  @BelongsTo(() => FileModel)
  declare image: FileModel | null;
}
