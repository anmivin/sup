import { SimAspirationModel } from '@back/connection.models/SimAspiration.model';
import { SimCareerModel } from '@back/connection.models/SimCareer.model';
import { SimCollectionModel } from '@back/connection.models/SimCollection.model';
import { SimSkillModel } from '@back/connection.models/SimSkill.model';
import { SimTraitModel } from '@back/connection.models/SimTrait.model';
import { ParentChildModel } from '@back/tree/models/ParentChild.model';
import { PartnerPartnerModel } from '@back/tree/models/PartnerPartner.model';
import { TreeModel } from '@back/tree/models/Tree.model';
import { UserModel } from '@back/users/models/users.model';
import { DataType, PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';

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

  @Column
  declare image: string;

  @Column
  declare isInTree: boolean;

  @Column
  @ForeignKey(() => TreeModel)
  declare treeId: string;

  @BelongsTo(() => TreeModel)
  declare tree: TreeModel;

  @Column
  declare part: string;

  @Column(DataType.INTEGER)
  declare birthYear: number | null;

  @Column(DataType.INTEGER)
  declare deathYear: number | null;

  @HasMany(() => PartnerPartnerModel, { foreignKey: 'partnerFirstId', as: 'partnerFirst' })
  partnerFirst: PartnerPartnerModel[];

  @HasMany(() => PartnerPartnerModel, { foreignKey: 'partnerSecondId', as: 'partnerSecond' })
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
}
