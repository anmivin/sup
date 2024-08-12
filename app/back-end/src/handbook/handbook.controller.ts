import {
  OutputAchievement4Dto,
  OutputAchievementList4Dto,
  OutputAspiration4Dto,
  OutputAspirationList4Dto,
  OutputCareer4Dto,
  OutputCareerList4Dto,
  OutputCollection4Dto,
  OutputCollectionList4Dto,
  OutputDeaths4Dto,
  OutputSkill4Dto,
  OutputSkillList4Dto,
  OutputTrait4Dto,
  OutputTraitList4Dto,
} from '@back/handbook/handbook.dto';
import { HandbookService } from '@back/handbook/handbook.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Handbook Module')
@Controller('handbook')
export class HandbookController {
  constructor(private handbookService: HandbookService) {}
  @Get('/achievements')
  @ApiOperation({ summary: 'Get all achievements' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputAchievementList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllAchievements(): Promise<OutputAchievementList4Dto[]> {
    return await this.handbookService.getAllAchievements();
  }

  @Get('/achievement/:key')
  @ApiOperation({ summary: 'Get achievement by key' })
  @ApiParam({ name: 'key', required: true, description: 'Achievement key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputAchievement4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAchievementById(
    @Param('key') key: string,
  ): Promise<OutputAchievement4Dto> {
    return await this.handbookService.getAchievementByKey(key);
  }

  @Get('/aspirations')
  @ApiOperation({ summary: 'Get all aspirations' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputAspirationList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllAspirations(): Promise<OutputAspirationList4Dto[]> {
    return await this.handbookService.getAllAspirations();
  }

  @Get('/aspirations/:key')
  @ApiOperation({ summary: 'Get aspiration by key' })
  @ApiParam({ name: 'key', required: true, description: 'Aspiration id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputAspiration4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAspirationById(
    @Param('key') key: string,
  ): Promise<OutputAspiration4Dto> {
    return await this.handbookService.getAspirationByKey(key);
  }

  @Get('/careers')
  @ApiOperation({ summary: 'Get all careers' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputCareerList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllCareers(): Promise<OutputCareerList4Dto[]> {
    return await this.handbookService.getAllCareers();
  }

  @Get('/career/:key')
  @ApiOperation({ summary: 'Get career by key' })
  @ApiParam({ name: 'key', required: true, description: 'Career key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputCareer4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getCareerById(@Param('key') key: string): Promise<OutputCareer4Dto> {
    return await this.handbookService.getCareerByKey(key);
  }

  @Get('/collections')
  @ApiOperation({ summary: 'Get all collections' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputCollectionList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllCollections(): Promise<OutputCollectionList4Dto[]> {
    return await this.handbookService.getAllCollections();
  }

  @Get('/collection/:key')
  @ApiOperation({ summary: 'Get collection id' })
  @ApiParam({ name: 'key', required: true, description: 'Collection id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputCollection4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getCollectionByKey(
    @Param('key') key: string,
  ): Promise<OutputCollection4Dto> {
    return await this.handbookService.getCollectionByKey(key);
  }

  @Get('/deaths')
  @ApiOperation({ summary: 'Get all deaths' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputDeaths4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllDeaths(): Promise<OutputDeaths4Dto[]> {
    return await this.handbookService.getAllDeaths();
  }

  @Get('/deaths/:key')
  @ApiOperation({ summary: 'Get death by key' })
  @ApiParam({ name: 'key', required: true, description: 'Death key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputDeaths4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getDeathById(@Param('key') key: string): Promise<OutputDeaths4Dto> {
    return await this.handbookService.getDeathByKey(key);
  }

  @Get('/skills')
  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputSkillList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllSkills(): Promise<OutputSkillList4Dto[]> {
    return await this.handbookService.getAllSkills();
  }

  @Get('/skills/:key')
  @ApiOperation({ summary: 'Get skill by id' })
  @ApiParam({ name: 'key', required: true, description: 'Skill key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputSkill4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSkillById(@Param('key') key: string): Promise<OutputSkill4Dto> {
    return await this.handbookService.getSkillByKey(key);
  }

  @Get('/traits')
  @ApiOperation({ summary: 'Get all traits' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputTraitList4Dto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getAllTraits(): Promise<OutputTraitList4Dto[]> {
    return await this.handbookService.getAllTraits();
  }

  @Get('/traits/:key')
  @ApiOperation({ summary: 'Get trait by key' })
  @ApiParam({ name: 'key', required: true, description: 'Trait key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputTrait4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTraitById(@Param('key') key: string): Promise<OutputTrait4Dto> {
    return await this.handbookService.getTraitByKey(key);
  }

  @Get('/init')
  @ApiOperation({ summary: 'Get trait by key' })
  @ApiParam({ name: 'key', required: true, description: 'Trait key' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputTrait4Dto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getInitValues(): Promise<OutputTrait4Dto> {
    return await this.handbookService.getInitValues();
  }
}
