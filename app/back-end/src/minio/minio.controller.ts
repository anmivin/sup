import { InputUserDto } from '@back/users/user.dto';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Get, Body } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { MinioService } from './minio.service';
@ApiTags('Minio Module')
@Controller('minio')
export class MinioController {
  constructor(private minioService: MinioService) {}
  @Get()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createUser() {
    return this.minioService.justFunc();
  }

  @Get('/create')
  @ApiOperation({ summary: 'Create bucket' })
  @ApiBody({ type: InputUserDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createBucketUser(@Body() bucketName: string) {
    return this.minioService.createBucket(bucketName);
  }
}
