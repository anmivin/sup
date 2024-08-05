import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

export interface FileModelCreate extends Omit<FileModel, keyof Model> {
  id: string;
}

@Table({ tableName: 'files', underscored: true, timestamps: false })
export class FileModel extends Model<FileModel, FileModelCreate> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  declare path: string;

  @Column
  declare pathTn?: string;

  @Column
  declare name: string;
}
