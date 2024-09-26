import {
  OutputWorldDto,
  OutputWorldMapDto,
  InputBuildingDto,
} from '@back/world/world.dto';
import { WorldService } from '@back/world/world.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('World Module')
@Controller('world')
export class WorldController {
  constructor(private worldService: WorldService) {}
  @Get('/:part')
  @ApiOperation({ summary: 'Get worlds by part' })
  @ApiParam({ name: 'part', required: true, description: 'Part' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputWorldDto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getWorld(@Param('part') part: string): Promise<OutputWorldDto[]> {
    return await this.worldService.getWorlds(part);
  }

  @Get('/map/:key')
  @ApiOperation({ summary: 'Get world map' })
  @ApiParam({ name: 'key', required: true, description: 'Tree id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputWorldMapDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getWorldMap(@Param('key') key: string): Promise<OutputWorldMapDto> {
    return await this.worldService.getWorldMap(key);
  }

  @Get('/building/:key')
  @ApiOperation({ summary: 'Get world map' })
  @ApiParam({ name: 'key', required: true, description: 'Tree id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputWorldMapDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getBuildingInfo(
    @Param('key') key: string,
  ) /* : Promise<OutputWorldMapDto> */ {
    return await this.worldService.getBuildingInfo(key);
  }

  @Post('/building/:key')
  @ApiOperation({ summary: 'Get world map' })
  @ApiBody({ type: InputBuildingDto })
  @ApiParam({ name: 'key', required: true, description: 'Tree id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputWorldMapDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async editBuilding(
    @Param('key') key: string,
    @Body() editBuildingProps: InputBuildingDto,
  ) /* : Promise<OutputWorldMapDto> */ {
    return await this.worldService.editBuilding(key, editBuildingProps);
  }
}
