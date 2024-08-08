import { Achievement4Model } from '@back/handbook/models/models.4/achievements.model';
import { UserModel } from '@back/user/models/users.model';
import {
  PrimaryKey,
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'user_achievement', underscored: true, timestamps: false })
export class UserAchievementModel extends Model<UserAchievementModel> {
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  @ForeignKey(() => UserModel)
  declare userId: string;

  @BelongsTo(() => UserModel)
  declare user: UserModel;

  @Column
  @ForeignKey(() => Achievement4Model)
  declare achievementKey: string;

  @BelongsTo(() => Achievement4Model)
  declare achievement: Achievement4Model;
}
