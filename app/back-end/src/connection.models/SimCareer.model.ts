import { Career4Model } from '@back/handbook/models/models.4/careers.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'sim_career_4', underscored: true, timestamps: false })
export class SimCareerModel extends Model<SimCareerModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Career4Model)
  declare careerKey: string;

  @BelongsTo(() => Career4Model)
  declare career: Career4Model;

  @Column
  declare root: string;

  @Column
  declare step: number;
}
