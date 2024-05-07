import { TokenService } from '@back/token/token.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [TokenService, JwtService],
  exports: [TokenService],
})
export class TokenModule {}
