import { SimAspirationModel } from '@back/connection.models/SimAspiration.model';
import { SimCareerModel } from '@back/connection.models/SimCareer.model';
import { SimCollectionModel } from '@back/connection.models/SimCollection.model';
import { SimSkillModel } from '@back/connection.models/SimSkill.model';
import { SimTraitModel } from '@back/connection.models/SimTrait.model';
import { ParentChildModel } from '@back/dynasty/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/dynasty/models/PartnerPartner.model';
import { TreeModel } from '@back/dynasty/models/Tree.model';
import { UserModel } from '@back/users/models/users.model';
import { SimPositionModel } from '@back/connection.models/SimPosition.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType,
  HasOne,
} from 'sequelize-typescript';
import { FileModel } from '@back/file/file.model';
export interface SimsModelCreate
  extends Omit<
    SimsModel,
    | keyof Model
    | 'user'
    | 'tree'
    | 'parents'
    | 'children'
    | 'partnerFirst'
    | 'partnerSecond'
    | 'isInTree'
    | 'aspirations'
    | 'careers'
    | 'collections'
    | 'skills'
    | 'traits'
    | 'position'
  > {}
@Table({ tableName: 'sims', underscored: true, timestamps: false })
export class SimsModel extends Model<SimsModel, SimsModelCreate> {
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

  @Column
  declare isInTree: boolean;

  @Column
  @ForeignKey(() => TreeModel)
  declare treeId: string;

  @BelongsTo(() => TreeModel)
  declare tree: TreeModel;

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare part: string;

  @HasMany(() => PartnerPartnerModel, {
    foreignKey: 'partnerFirstId',
    as: 'partnerFirst',
  })
  partnerFirst: PartnerPartnerModel[];

  @HasMany(() => PartnerPartnerModel, {
    foreignKey: 'partnerSecondId',
    as: 'partnerSecond',
  })
  partnerSecond: PartnerPartnerModel[];

  @HasMany(() => ParentChildModel, { foreignKey: 'childId', as: 'children' })
  children: ParentChildModel[];

  @HasMany(() => ParentChildModel, { foreignKey: 'parentId', as: 'parents' })
  parents: ParentChildModel[];

  @HasMany(() => SimAspirationModel, { foreignKey: 'aspirationKey' })
  aspirations: SimAspirationModel[];

  @HasMany(() => SimCareerModel, { foreignKey: 'careerKey' })
  careers: SimCareerModel[];

  @HasMany(() => SimCollectionModel, { foreignKey: 'collectionKey' })
  collections: SimCollectionModel[];

  @HasMany(() => SimSkillModel, { foreignKey: 'skillKey' })
  skills: SimSkillModel[];

  @HasMany(() => SimTraitModel, { foreignKey: 'traitKey' })
  traits: SimTraitModel[];

  @HasOne(() => SimPositionModel)
  position: SimPositionModel;
}
