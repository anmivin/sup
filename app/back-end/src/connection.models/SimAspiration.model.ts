import { Aspiration4Model } from '@back/handbook/models/models.4/aspirations.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'sim_aspiration_4', underscored: true, timestamps: false })
export class SimAspirationModel extends Model<SimAspirationModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Aspiration4Model)
  declare aspirationKey: string;

  @BelongsTo(() => Aspiration4Model)
  declare aspiration: Aspiration4Model;

  @Column
  declare aspirationStep: number;
}
