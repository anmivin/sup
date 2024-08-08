import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'avatars', underscored: true, timestamps: false })
export class AvatarModel extends Model<AvatarModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare image: string;

  @Column
  declare thumbnale: string;
}
