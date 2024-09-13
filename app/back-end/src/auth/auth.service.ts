import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { InputUserDto } from '@back/user/user.dto';
import { UsersService } from '@back/user/user.service';

import { TokenService } from '@back/token/token.service';
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
  ) {}

  async login(userCredentials: UserCredentials) {
    const existingUser = await this.userService.findUser(userCredentials.name);
    if (!existingUser || !existingUser?.password)
      throw new NotFoundException('');
    if (!bcrypt.compareSync(userCredentials.password, existingUser.password))
      throw new UnauthorizedException('Неверный пароль');

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
          password: null,
        },
        'google',
      );
      const token = await this.tokenService.generateTokens({
        id: user.id,
        role: 'simple',
      });
      return {
        access_token: token.accessToken,
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
    return tokens.accessToken;
  }
}
