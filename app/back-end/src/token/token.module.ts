import { TokenService } from '@back/token/token.service';
import { Module } from '@nestjs/common';
import { TokenModel } from '@back/token/token.model';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [SequelizeModule.forFeature([TokenModel])],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
