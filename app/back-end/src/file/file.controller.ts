import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

import { SaveFileDto, EditFileDto, DeleteFileDto } from '@minio/minio.dto';
import { FileService } from './file.service';
@ApiTags('File Controller')
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('/save')
  @ApiOperation({ summary: 'Save file' })
  @ApiBody({ type: SaveFileDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async saveFile(@Body() props: SaveFileDto) {
    return this.fileService.saveFile(props);
  }

  @Post('/edit')
  @ApiOperation({ summary: 'Edit file' })
  @ApiBody({ type: EditFileDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editFile(@Body() props: EditFileDto) {
    return this.fileService.editFile(props);
  }

  @Post('/delete')
  @ApiOperation({ summary: 'Delete file' })
  @ApiBody({ type: DeleteFileDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async deleteFile(@Body() props: DeleteFileDto) {
    return this.fileService.deleteFile(props);
  }
}
