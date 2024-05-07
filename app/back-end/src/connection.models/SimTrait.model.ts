import { Trait4Model } from '@back/handbook/models/models.4/traits.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'sim_trait_4', underscored: true, timestamps: false })
export class SimTraitModel extends Model<SimTraitModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Trait4Model)
  declare traitKey: string;

  @BelongsTo(() => Trait4Model)
  declare trait: Trait4Model;
}
