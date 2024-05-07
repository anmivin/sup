import { PrimaryKey, DefaultScope, AutoIncrement, Model, DataType, Column, Table } from 'sequelize-typescript';

export class TranslationWithPartModel extends Model<TranslationWithPartModel> {
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
  @Column(DataType.ARRAY(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] })))
  declare part: string[];
}

@Table({ tableName: 'other', underscored: true, timestamps: false })
export class OtherTranslationModel extends TranslationWithPartModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'aspiration_groups', underscored: true, timestamps: false })
export class AspirationGroupsTranslationModel extends TranslationWithPartModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'trait_groups', underscored: true, timestamps: false })
export class TraitGroupsTranslationModel extends TranslationWithPartModel {}
