import { InputUserDto } from '@back/users/user.dto';
import { UsersService } from '@back/users/users.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Minio Module')
@Controller('minio')
export class MinioController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createUser(@Body() createUserDto: InputUserDto): Promise<string> {
    return (await this.usersService.createUser(createUserDto)).id;
  }
}
