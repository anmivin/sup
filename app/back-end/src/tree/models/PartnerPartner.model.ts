import { SimsModel } from '@back/tree/models/Sim.model';
import { PrimaryKey, AutoIncrement, Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

export interface PartnerPartnerModelCreate
  extends Omit<PartnerPartnerModel, keyof Model | 'partnerFirst' | 'partnerSecond'> {}
@Table({ tableName: 'partner_partner', underscored: true, timestamps: false })
export class PartnerPartnerModel extends Model<PartnerPartnerModel, PartnerPartnerModelCreate> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  @ForeignKey(() => SimsModel)
  declare partnerFirstId: string;

  @BelongsTo(() => SimsModel)
  declare partnerFirst: SimsModel;

  @Column
  @ForeignKey(() => SimsModel)
  declare partnerSecondId: string;

  @BelongsTo(() => SimsModel)
  declare partnerSecond: SimsModel;

  @Column
  declare isEx: boolean;

  @Column
  declare type: string;
}
