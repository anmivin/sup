import { Death4Model } from '@back/handbook/models/models.4/deaths.model';
import { SimsModel } from '@back/dynasty/models/Sim.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'sim_death', underscored: true, timestamps: false })
export class SimDeathModel extends Model<SimDeathModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Death4Model)
  declare deathKey: string;

  @BelongsTo(() => Death4Model)
  declare death: Death4Model;
}
