import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { InputUserDto } from '@back/user/user.dto';
import { UsersService } from '@back/user/user.service';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { TokenService } from '@back/token/token.service';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private tokenService: TokenService,
    private readonly i18n: I18nService,
    private jwtService: JwtService,
  ) {}

  async me(token?: string) {
    if (!token)
      throw new UnauthorizedException(
        `${this.i18n.t('exceptions.unauthorized', { lang: I18nContext.current()?.lang })}`,
      );
    try {
      const payload = await this.jwtService.verify(token);
      const userData = await this.userService.findUserById(payload.id);
      return userData;
    } catch (e) {
      console.error(e);
      throw new Error('bad');
    }
  }
  async login(userCredentials: UserCredentials) {
    const existingUser = await this.userService.findUser(userCredentials.name);
    if (!existingUser || !existingUser?.password)
      throw new NotFoundException(
        `${this.i18n.t('exceptions.user', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.notfound.masculine', { lang: I18nContext.current()?.lang })}`,
      );
    if (!bcrypt.compareSync(userCredentials.password, existingUser.password))
      throw new UnauthorizedException(
        `${this.i18n.t('exceptions.invalid.masculine', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.username', { lang: I18nContext.current()?.lang })} ${this.i18n.t('exceptions.and')}/${this.i18n.t('exceptions.or', { lang: I18nContext.current()?.lang })} ${(this.i18n.t('exceptions.password'), { lang: I18nContext.current()?.lang })}`,
      );

    const token = await this.tokenService.generateTokens({
      id: existingUser.id,
      role: existingUser.role,
    });
    return {
      access_token: token.accessToken,
      refresh_token: token.refreshToken,
    };
  }

  async signup(userCredentials: InputUserDto) {
    const user = await this.userService.createUser(userCredentials);
    const token = await this.tokenService.generateTokens({
      id: user.id,
      role: user.role,
    });
    return {
      access_token: token.accessToken,
      refresh_token: token.refreshToken,
    };
  }

  async loginGoogle(userCredentials: UserGoogleCredentials) {
    const existingUser = await this.userService.findUserByEmail(
      userCredentials.email,
    );
    if (!existingUser) {
      const user = await this.userService.createUser(
        {
          name: userCredentials.name,
          email: userCredentials.email,
          password: undefined,
        },
        'google',
      );
      const token = await this.tokenService.generateTokens({
        id: user.id,
        role: 'simple',
      });
      return {
        access_token: token.accessToken,
        id: user.id,
        refresh_token: token.refreshToken,
      };
    } else {
      const token = await this.tokenService.generateTokens({
        id: existingUser.id,
        role: existingUser.role,
      });
      return {
        access_token: token.accessToken,
        refresh_token: token.refreshToken,
      };
    }
  }

  async refreshToken(token: string) {
    const tokens = await this.tokenService.refreshToken(token);
    return { ...tokens };
  }
}
