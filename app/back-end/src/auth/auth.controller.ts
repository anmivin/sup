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
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async login(
    @Body() loginUserDto: UserCredentials,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.login(loginUserDto);
    response.cookie('refresh', data.refresh_token, { httpOnly: true });
    return data.access_token;
  }

  @Post('/signup')
  @ApiOperation({ summary: 'Log In' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async signup(
    @Body() loginUserDto: InputUserDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.signup(loginUserDto);
    response.cookie('refresh', data.refresh_token, { httpOnly: true });
    return data.access_token;
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
    response.cookie('refresh', data.refresh_token, { httpOnly: true });
    return data.access_token;
  }

  @Post('/token')
  @ApiOperation({ summary: 'Refresh' })
  @ApiBody({ type: UserCredentials })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async refreshToken(@Body() token: string): Promise<string> {
    const data = await this.authService.refreshToken(token);
    return data;
  }
}
