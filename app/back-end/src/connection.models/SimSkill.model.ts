import { Skill4Model } from '@back/handbook/models/models.4/skills.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'sim_skill_4', underscored: true, timestamps: false })
export class SimSkillModel extends Model<SimSkillModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Skill4Model)
  declare skillKey: string;

  @BelongsTo(() => Skill4Model)
  declare skill: Skill4Model;

  @Column
  declare level: number;
}
