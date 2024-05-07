import { AuthController } from '@back/auth/auth.controller';
import { AuthService } from '@back/auth/auth.service';
import { TokenModule } from '@back/token/token.module';
import { AvatarModel } from '@back/users/models/avatars.model';
import { PackModel } from '@back/users/models/packs.model';
import { UserModel } from '@back/users/models/users.model';
import { UsersService } from '@back/users/users.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, PackModel, AvatarModel]),
    PassportModule,
    TokenModule,
  ],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
