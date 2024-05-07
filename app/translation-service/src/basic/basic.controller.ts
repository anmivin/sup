import { Controller, Get, Param } from '@nestjs/common';
import { BasicService } from './basic.service';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { BasicTranslationDto } from '@translations/dto/base.dto';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';

@ApiTags('Base Translations Module')
@Controller('translation')
export class BasicController {
  constructor(private basicService: BasicService) {}
  @Get('/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: BasicTranslationDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getBaseTranslations(@Param('lang') lang: 'ru' | 'en'): Promise<BasicTranslationDto> {
    return await this.basicService.getBaseTranslations(lang);
  }
}
