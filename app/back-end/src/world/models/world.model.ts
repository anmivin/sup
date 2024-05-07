import { LotModel } from './lot.model';
import { NeighborhoodModel } from './neighbourhood.model';
import { PrimaryKey, Column, Model, Table, HasMany } from 'sequelize-typescript';

@Table({ tableName: 'worlds', underscored: true, timestamps: false })
export class WorldModel extends Model<WorldModel> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column
  declare part: string;

  @Column
  declare icon: string;

  @Column
  declare filledMap: string;

  @Column
  declare emptyMap: string;

  @HasMany(() => NeighborhoodModel)
  declare neighborhoods: NeighborhoodModel[];

  @HasMany(() => LotModel)
  declare lots: LotModel[];
}
