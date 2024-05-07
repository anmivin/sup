import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { SimsModel } from '@back/tree/models/Sim.model';
import { PrimaryKey, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({ tableName: 'sim_collection_4', underscored: true, timestamps: false })
export class SimCollectionModel extends Model<SimCollectionModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  @ForeignKey(() => Collection4Model)
  declare collectionKey: string;

  @BelongsTo(() => Collection4Model)
  declare collection: Collection4Model;
}
