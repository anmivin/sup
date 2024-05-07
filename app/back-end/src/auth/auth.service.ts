import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { TokenService } from '@back/token/token.service';
import { UsersService } from '@back/users/users.service';
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
    if (!existingUser.password) throw new NotFoundException('');
    if (!bcrypt.compareSync(userCredentials.password, existingUser.password))
      throw new UnauthorizedException('Неверный пароль');

    const token = await this.tokenService.generateAccessToken({
      id: existingUser.id,
      name: existingUser.name,
    });
    return {
      id: existingUser.id,
      access_token: token,
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
      const token = await this.tokenService.generateAccessToken({
        id: user.id,
        name: user.name,
      });
      return {
        id: user.id,
        access_token: token,
      };
    } else {
      const token = await this.tokenService.generateAccessToken({
        id: existingUser.id,
        name: existingUser.name,
      });
      return {
        id: existingUser.id,
        access_token: token,
      };
    }
  }
}
