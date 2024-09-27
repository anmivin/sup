import { InputUserDto, EditUserDto } from '@back/user/user.dto';
import { UsersService } from '@back/user/user.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@back/guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Post('/edit')
  @ApiOperation({ summary: 'Edit User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editUser(@Body() editUserDto: EditUserDto): Promise<string> {
    return (await this.usersService.editUser(editUserDto)).id;
  }

  @UseGuards(AuthGuard)
  @Post('/delete')
  @ApiOperation({ summary: 'Delete User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async deleteUser(@Body() createUserDto: InputUserDto): Promise<string> {
    return (await this.usersService.createUser(createUserDto)).id;
  }
}
