import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { AuthService } from '@back/auth/auth.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Body, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { InputUserDto } from '@back/user/user.dto';
@ApiTags('Auth Module')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Log In' })
  @ApiBody({ type: UserCredentials })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: { token: string },
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async login(
    @Body() loginUserDto: UserCredentials,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.login(loginUserDto);
    response.cookie('access', data.access_token, { httpOnly: true });
    return data.id;
  }

  @Post('/signup')
  @ApiOperation({ summary: 'Sign Up' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async signup(
    @Body() loginUserDto: InputUserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.signup(loginUserDto);
    response.cookie('access', data.access_token, { httpOnly: true });
    return data.id;
  }

  @Post('/google-login')
  @ApiOperation({ summary: 'Google Log In' })
  @ApiBody({ type: UserCredentials })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async loginGoogle(
    @Body() loginUserDto: UserGoogleCredentials,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.loginGoogle(loginUserDto);
    response.cookie('access', data.access_token, { httpOnly: true });
    return data.id;
  }
}
