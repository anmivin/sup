import { SimsModel } from '@back/tree/models/Sim.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

export interface ParentChildModelCreate
  extends Omit<ParentChildModel, keyof Model | 'parent' | 'child'> {}
@Table({ tableName: 'parent_child', underscored: true, timestamps: false })
export class ParentChildModel extends Model<
  ParentChildModel,
  ParentChildModelCreate
> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare parentId: string;

  @BelongsTo(() => SimsModel, 'parentId')
  declare parent: SimsModel;

  @Column
  @ForeignKey(() => SimsModel)
  declare childId: string;

  @BelongsTo(() => SimsModel, 'childId')
  declare child: SimsModel;

  @Column
  declare type: string;
}
