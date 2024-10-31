import { AvatarModel } from '@back/user/models/avatars.model';
import { PackModel } from '@back/user/models/packs.model';
import { UserModel } from '@back/user/models/users.model';
import { UsersController } from '@back/user/user.controller';
import { UsersService } from '@back/user/user.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TokenModule } from '@back/token/token.module';
@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, AvatarModel, PackModel]),
    TokenModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
