import {
  PrimaryKey,
  DataType,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'deaths', underscored: true, timestamps: false })
export class Death4Model extends Model<Death4Model> {
  @PrimaryKey
  @Column
  declare key: string;

  @Column(DataType.ENUM({ values: ['sims_1', 'sims_2', 'sims_3', 'sims_4'] }))
  declare part: string;
}
