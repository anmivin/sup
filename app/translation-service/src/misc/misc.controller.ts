import { Controller, Get, Param } from '@nestjs/common';
import { MiscService } from './misc.service';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MiscTranslationDto } from '@translations/dto/misc.dto';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { TreeTranslationDto } from '@translations/dto/tree.dto';
@ApiTags('Misc Translations Module')
@Controller('')
export class MiscController {
  constructor(private miscService: MiscService) {}
  @Get('/misc/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: MiscTranslationDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getMiscTranslations(
    @Param('lang') lang: 'ru' | 'en',
  ): Promise<MiscTranslationDto> {
    return await this.miscService.getMiscTranslations(lang);
  }
  @Get('/tree/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: TreeTranslationDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTreeTranslations(
    @Param('lang') lang: 'ru' | 'en',
  ): Promise<TreeTranslationDto> {
    return await this.miscService.getTreeTranslations(lang);
  }
}
