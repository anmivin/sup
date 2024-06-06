import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';

export class BasicTranslationModel extends Model<BasicTranslationModel> {
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

@Table({ tableName: 'base', underscored: true, timestamps: false })
export class BaseTranslationModel extends BasicTranslationModel {}

@Table({ tableName: 'other', underscored: true, timestamps: false })
export class OtheTranslationModel extends BasicTranslationModel {}

@Table({ tableName: 'tree', underscored: true, timestamps: false })
export class TreeRelatedTranslationModel extends BasicTranslationModel {}
