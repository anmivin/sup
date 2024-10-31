import { InputTokenDto } from '@back/token/token.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { TokenModel } from '@back/token/token.model';
import { v4 } from 'uuid';
import { Op } from 'sequelize';
import { I18nContext, I18nService } from 'nestjs-i18n';
@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly i18n: I18nService,
    @InjectModel(TokenModel) private tokenModel: typeof TokenModel,
  ) {}

  async generateAccessToken(creds: InputTokenDto) {
    return this.jwtService.sign(creds, {
      expiresIn: this.configService.get('jwt_expired'),
    });
  }

  async generateRefreshToken() {
    return v4();
  }

  async saveRefreshToken(token: string, userId: string) {
    const existingToken = await this.tokenModel.findOne({
      where: {
        token,
        expires: { [Op.gte]: new Date() },
      },
    });
    if (existingToken) existingToken.destroy();
    const expires = new Date();
    expires.setDate(expires.getDate() + 3);
    await this.tokenModel.create({ token, userId, expires: expires });
  }

  async generateTokens(creds: InputTokenDto) {
    const accessToken = await this.generateAccessToken(creds);
    const refreshToken = await this.generateRefreshToken();
    await this.saveRefreshToken(refreshToken, creds.id);

    return { accessToken, refreshToken };
  }

  async refreshToken(token: string) {
    const existingToken = await this.tokenModel.findOne({
      where: {
        token,
        expires: { [Op.gte]: new Date() },
      },
    });

    const info = this.jwtService.verify(token);

    if (!existingToken)
      throw new UnauthorizedException(
        `${this.i18n.t('exceptions.unauthorized', { lang: I18nContext.current()?.lang })}`,
      );

    const tokens = await this.generateTokens({ id: info.id, role: info.role });
    return { tokens, id: info.id };
  }
}
