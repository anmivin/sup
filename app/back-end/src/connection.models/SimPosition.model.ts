import { SimsModel } from '@back/dynasty/models/Sim.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'sim_position', underscored: true, timestamps: false })
export class SimPositionModel extends Model<SimPositionModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => SimsModel)
  declare simId: string;

  @BelongsTo(() => SimsModel)
  declare sim: SimsModel;

  @Column
  declare xPos: number;

  @Column
  declare yPos: number;
}
