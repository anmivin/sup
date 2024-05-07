import { UserCredentials, UserGoogleCredentials } from '@back/auth/auth.dto';
import { AuthService } from '@back/auth/auth.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Body, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

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
  async login(@Body() loginUserDto: UserCredentials): Promise<string> {
    const data = await this.authService.login(loginUserDto);
    return data.id;
  }

  @Get('/google-login')
  async loginGoogle(
    @Body() loginUserDto: UserGoogleCredentials,
  ): Promise<string> {
    const data = await this.authService.loginGoogle(loginUserDto);
    return data.id;
  }
}
