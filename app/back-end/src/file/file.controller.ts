import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Debug, EditFileDto, DeleteFileDto } from '@minio/minio.dto';
import { FileService } from './file.service';
import { FileResponseDTO } from './file.dto';
@ApiTags('File Controller')
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Save debug file' })
  @ApiBody({ type: Debug })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async saveDebugFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.saveDebugFile({ file: file });
  }

  @Post('/save/:type')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Save file' })
  @ApiBody({ type: Debug })
  @ApiParam({ name: 'type', required: true, description: 'File type' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: FileResponseDTO,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async saveFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('type') type: string,
  ): Promise<FileResponseDTO> {
    return this.fileService.saveFile({
      file: file,
      type: type,
    });
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
