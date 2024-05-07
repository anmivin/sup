import { Controller, Get, Param } from '@nestjs/common';
import { HandbookService } from './handbook.service';
import { ApiOperation, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import {
  AchievementsDto,
  AspirationGroupsDto,
  AspirationsDto,
  SkillsDto,
  TraitGroupsDto,
  TraitsDto,
} from '@translations/dto/handbook.dto';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';

@ApiTags('Handbook Translations Module')
@Controller('')
export class HandbookController {
  constructor(private handbookService: HandbookService) {}
  @Get('/achievements/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: AchievementsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAchievements(@Param('lang') lang: 'ru' | 'en'): Promise<AchievementsDto> {
    return await this.handbookService.getAchievements(lang);
  }

  @Get('/aspiration-groups/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: AspirationGroupsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAspirationGroups(@Param('lang') lang: 'ru' | 'en'): Promise<AspirationGroupsDto> {
    return await this.handbookService.getAspirationGroups(lang);
  }

  @Get('/aspirations/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: AspirationsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAspirations(@Param('lang') lang: 'ru' | 'en'): Promise<AspirationsDto> {
    return await this.handbookService.getAspirations(lang);
  }
  @Get('/skills/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: SkillsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSkills(@Param('lang') lang: 'ru' | 'en'): Promise<SkillsDto> {
    return await this.handbookService.getSkills(lang);
  }

  @Get('/trait-groups/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: TraitGroupsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTraitGroups(@Param('lang') lang: 'ru' | 'en'): Promise<TraitGroupsDto> {
    return await this.handbookService.getTraitGroups(lang);
  }

  @Get('/traits/:lang')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiParam({ name: 'lang', required: true, description: 'Language' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: TraitsDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTraits(@Param('lang') lang: 'ru' | 'en'): Promise<TraitsDto> {
    return await this.handbookService.getTraits(lang);
  }
}
