import {} from /*   AutoIncrement, */
/*   BelongsToMany, */
/*   Column, */
/*   HasOne, */
/*   Model,
  PrimaryKey,
  Table, */
'sequelize-typescript';

export interface FileModelCreate extends Omit<FileModel, keyof Model> {}

@Table({ tableName: 'files', underscored: true, timestamps: false })
export class FileModel extends Model<FileModel, FileModelCreate> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: string;

  @Column
  declare path: string;

  @Column
  declare pathTn?: string;

  @Column
  declare name: string;
}
