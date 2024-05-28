import {
  AutoIncrement,
  PrimaryKey,
  DataType,
  Column,
  Table,
  ForeignKey,
  HasMany,
  BelongsTo,
  Model,
  DefaultScope,
} from 'sequelize-typescript';
import {GameParts} from '@backend-shared/types'
export class TranslationWithDescriptionModel extends Model<TranslationWithDescriptionModel> {
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
  @Column(DataType.ENUM({ values: [GameParts] }))
  declare part: string;

  @Column
  declare ruDescription: string;

  @Column
  declare enDescription: string;
}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'achievements', underscored: true, timestamps: false })
export class AchievementsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'aspirations', underscored: true, timestamps: false })
export class AspirationsTranslationModel extends TranslationWithDescriptionModel {
  @HasMany(() => AspirationStepsTranslationModel)
  declare items: AspirationStepsTranslationModel[];
}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'skills', underscored: true, timestamps: false })
export class SkillsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'traits', underscored: true, timestamps: false })
export class TraitsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'expansions', underscored: true, timestamps: false })
export class ExpansionsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'deaths', underscored: true, timestamps: false })
export class DeathsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'fears', underscored: true, timestamps: false })
export class FearsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'towns', underscored: true, timestamps: false })
export class TownsTranslationModel extends TranslationWithDescriptionModel {}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'collections', underscored: true, timestamps: false })
export class CollectionsTranslationModel extends TranslationWithDescriptionModel {
  @HasMany(() => CollectionItemsTranslationModel)
  declare items: CollectionItemsTranslationModel[];
}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'collection_items', underscored: true, timestamps: false })
export class CollectionItemsTranslationModel extends TranslationWithDescriptionModel {
  @ForeignKey(() => CollectionsTranslationModel)
  @Column
  declare collectionKey: string;

  @BelongsTo(() => CollectionsTranslationModel)
  declare collection: CollectionsTranslationModel;
}

@DefaultScope(() => ({
  order: [['key', 'ASC']],
}))
@Table({ tableName: 'aspiration_steps', underscored: true, timestamps: false })
export class AspirationStepsTranslationModel extends TranslationWithDescriptionModel {
  @ForeignKey(() => AspirationsTranslationModel)
  @Column
  declare aspirationKey: string;

  @BelongsTo(() => AspirationsTranslationModel)
  declare aspiration: AspirationsTranslationModel;
}
