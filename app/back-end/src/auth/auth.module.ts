import { AuthController } from '@back/auth/auth.controller';
import { AuthService } from '@back/auth/auth.service';
import { TokenModule } from '@back/token/token.module';
import { AvatarModel } from '@back/user/models/avatars.model';
import { PackModel } from '@back/user/models/packs.model';
import { UserModel } from '@back/user/models/users.model';
import { UsersService } from '@back/user/user.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { TokenModel } from '@back/token/token.model';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, PackModel, AvatarModel, TokenModel]),
    PassportModule,
    TokenModule,
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
