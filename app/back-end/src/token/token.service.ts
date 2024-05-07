import { InputTokenDto } from '@back/token/token.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async generateAccessToken(creds: InputTokenDto) {
    return this.jwtService.sign(creds, {
      secret: this.configService.get('jwt_secret'),
      expiresIn: this.configService.get('jwt_expired'),
    });
  }
}
