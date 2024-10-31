import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { AuthService } from '@back/auth/auth.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Body, Post, Res, Req, Get } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { InputUserDto, TokenDto, UserDto } from '@back/user/user.dto';

@ApiTags('Auth Module')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/me')
  @ApiOperation({ summary: 'Get user info' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: UserDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async me(@Req() request: Request): Promise<any> {
    const data = await this.authService.me(request.cookies['access']);
    return data;
  }

  @Post('/login')
  @ApiOperation({ summary: 'Log In' })
  @ApiBody({ type: UserCredentials })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: TokenDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async login(
    @Body() loginUserDto: UserCredentials,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const data = await this.authService.login(loginUserDto);
    response.cookie('refresh', data.refresh_token, { httpOnly: true });
    response.cookie('access', data.access_token, { httpOnly: true });
    return 'ok';
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
    response.cookie('refresh', data.refresh_token, { httpOnly: true });
    response.cookie('access', data.access_token, { httpOnly: true });
    return 'ok';
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
    response.cookie('access', data.access_token, { httpOnly: true });
    return 'ok';
  }

  @Post('/refresh')
  @ApiOperation({ summary: 'Refresh Tokens' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async refreshToken(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<string> {
    const refresh = request.cookies['refresh'];
    const data = await this.authService.refreshToken(refresh);
    response.cookie('refresh', data.tokens.refreshToken, { httpOnly: true });
    response.cookie('access', data.tokens.accessToken, { httpOnly: true });
    return data.id;
  }
}
