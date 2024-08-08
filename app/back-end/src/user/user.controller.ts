import { InputUserDto } from '@back/user/user.dto';
import { UsersService } from '@back/user/users.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Users Module')
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createUser(@Body() createUserDto: InputUserDto): Promise<string> {
    return (await this.usersService.createUser(createUserDto)).id;
  }

  @Post('/edit')
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editUser(@Body() createUserDto: InputUserDto): Promise<string> {
    return (await this.usersService.createUser(createUserDto)).id;
  }

  @Post('/delete')
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async deleteUser(@Body() createUserDto: InputUserDto): Promise<string> {
    return (await this.usersService.createUser(createUserDto)).id;
  }
}
