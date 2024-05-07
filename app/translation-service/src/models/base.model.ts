import { PrimaryKey, AutoIncrement, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'base', underscored: true, timestamps: false })
export class BaseTranslationModel extends Model<BaseTranslationModel> {
  @AutoIncrement
  @Column
  declare id: number;

  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare ru_name: string;

  @Column
  declare en_name: number;
}
