import { OutputWorldDto, OutputWorldMapDto } from '@back/world/world.dto';
import { WorldService } from '@back/world/world.service';
import { ErrorStatus, SuccessStatus } from '@backend-shared/statuses';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('World Module')
@Controller('worlds')
export class WorldController {
  constructor(private worldService: WorldService) {}
  @Get('/:part')
  @ApiOperation({ summary: 'Get sims for user' })
  @ApiParam({ name: 'part', required: true, description: 'Part' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: [OutputWorldDto],
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getSimsForUser(@Param('part') part: string): Promise<OutputWorldDto[]> {
    return await this.worldService.getWorlds(part);
  }

  @Get('/map/:worldKey')
  @ApiOperation({ summary: 'Get sims for tree' })
  @ApiParam({ name: 'worldKey', required: true, description: 'Tree id' })
  @ApiResponse({
    status: SuccessStatus.OK,
    description: 'Success',
    type: OutputWorldMapDto,
  })
  @ApiResponse({ status: ErrorStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: ErrorStatus.NOT_FOUND, description: 'Not found' })
  async getTreeStructure(
    @Param('worldKey') worldKey: string,
  ): Promise<OutputWorldMapDto> {
    return await this.worldService.getWorldMap(worldKey);
  }
}
