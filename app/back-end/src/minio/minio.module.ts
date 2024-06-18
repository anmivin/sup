import { AvatarModel } from '@back/users/models/avatars.model';
import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { UsersController } from '@back/users/users.controller';
import { UsersService } from '@back/users/users.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([UserModel, AvatarModel, PackModel])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
