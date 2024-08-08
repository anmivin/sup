import {
  InputSimDto,
  InputTreeDto,
  OutputSimListDto,
  OutputTreeDto,
  OutputTreeListDto,
} from '@back/dynasty/dynasty.dto';
import { DynastyService } from '@back/dynasty/dynasty.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Dynasty Module')
@Controller('dynasty')
export class DynastyController {
  constructor(private dynastyService: DynastyService) {}

  @Get('/tree-list/:id')
  @ApiOperation({ summary: 'Get trees for user' })
  @ApiParam({ name: 'id', required: true, description: 'User id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputTreeListDto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTreesForUser(@Param('id') id: string): Promise<OutputTreeListDto[]> {
    return await this.dynastyService.getTreesForUser(id);
  }

  @Get('/tree-structure/:id')
  @ApiOperation({ summary: 'Get sims for tree' })
  @ApiParam({ name: 'id', required: true, description: 'Tree id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputTreeDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTreeStructure(@Param('id') id: string): Promise<OutputTreeDto> {
    return await this.dynastyService.getTreeStructure(+id);
  }

  @Get('/user-sims/:id')
  @ApiOperation({ summary: 'Get sims for user' })
  @ApiParam({ name: 'id', required: true, description: 'User id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputSimListDto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSimsForUser(@Param('id') id: string): Promise<OutputSimListDto[]> {
    return await this.dynastyService.getSimsForUser(+id);
  }

  @Get('/sim/:id')
  @ApiOperation({ summary: 'Get sim by id' })
  @ApiParam({ name: 'id', required: true, description: 'Sim id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputTreeDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSim(@Param('id') id: string): Promise<any> {
    return await this.dynastyService.getSim(id);
  }

  @Post('/sim/create')
  @ApiOperation({ summary: 'Create sim' })
  @ApiBody({ type: InputSimDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createSim(@Body() createSimDto: InputSimDto) {
    return await this.dynastyService.createSim(createSimDto);
  }

  @Post('/tree/create')
  @ApiOperation({ summary: 'Create tree' })
  @ApiBody({ type: InputTreeDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createTree(@Body() createTreeDto: InputTreeDto) {
    return await this.dynastyService.createTree(createTreeDto);
  }

  @Post('/sim/edit')
  @ApiOperation({ summary: 'Create sim' })
  @ApiBody({ type: InputSimDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editSim(@Body() createSimDto: InputSimDto) {
    return await this.dynastyService.createSim(createSimDto);
  }

  @Post('/tree/edit')
  @ApiOperation({ summary: 'Create tree' })
  @ApiBody({ type: InputTreeDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editTree(@Body() createTreeDto: InputTreeDto) {
    return await this.dynastyService.createTree(createTreeDto);
  }

  @Post('/sim/delete')
  @ApiOperation({ summary: 'Create sim' })
  @ApiBody({ type: InputSimDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async deleteSim(@Body() createSimDto: InputSimDto) {
    return await this.dynastyService.createSim(createSimDto);
  }

  @Post('/tree/delete')
  @ApiOperation({ summary: 'Create tree' })
  @ApiBody({ type: InputTreeDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async deleteTree(@Body() createTreeDto: InputTreeDto) {
    return await this.dynastyService.createTree(createTreeDto);
  }
}
