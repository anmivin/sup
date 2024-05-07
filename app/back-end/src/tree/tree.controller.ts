import { InputSimDto, InputTreeDto, OutputTreeDto } from '@back/tree/tree.dto';
import { TreeService } from '@back/tree/tree.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Tree Module')
@Controller('tree')
export class TreeController {
  constructor(private treeService: TreeService) {}
  @Get('/:id')
  @ApiOperation({ summary: 'Get sims for user' })
  @ApiParam({ name: 'id', required: true, description: 'User id' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSimsForUser(@Param('id') id: string): Promise<any> {
    return await this.treeService.getSimsForUser(+id);
  }

  @Get('/tree/:id')
  @ApiOperation({ summary: 'Get sims for tree' })
  @ApiParam({ name: 'id', required: true, description: 'Tree id' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: OutputTreeDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTreeStructure(@Param('id') id: string): Promise<OutputTreeDto> {
    return await this.treeService.getTreeStructure(+id);
  }

  @Get('/sim/:id')
  @ApiOperation({ summary: 'Get sim by id' })
  @ApiParam({ name: 'id', required: true, description: 'Sim id' })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success', type: OutputTreeDto })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSim(@Param('id') id: string): Promise<any> {
    return await this.treeService.getSim(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create sim' })
  @ApiBody({ type: InputSimDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createSim(@Body() createSimDto: InputSimDto) {
    return await this.treeService.createSim(createSimDto);
  }

  @Post('/tree')
  @ApiOperation({ summary: 'Create tree' })
  @ApiBody({ type: InputTreeDto })
  @ApiResponse({ status: SuccessStatus.OK, description: 'Success' })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async createTree(@Body() createTreeDto: InputTreeDto) {
    return await this.treeService.createTree(createTreeDto);
  }
}
