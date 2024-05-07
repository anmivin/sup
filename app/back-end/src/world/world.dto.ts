import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

export class OutputLotDto {
  @ApiProperty()
  key: string;
  @ApiProperty()
  filledImage: string;
  @ApiProperty()
  emptyImage: string;
  @ApiProperty()
  priceFilled: number;
  @ApiProperty()
  priceEmpty: number;
  @ApiProperty()
  size: string;
  @ApiProperty()
  coordinates: string;
}

export class OutputNeighbourhoodDto {
  @ApiProperty()
  key: string;
  @ApiProperty()
  icon: string;
}

export class OutputWorldDto {
  @ApiProperty()
  declare key: string;
  @ApiProperty()
  declare icon: string;
}

@ApiExtraModels(OutputLotDto, OutputNeighbourhoodDto)
export class OutputWorldMapDto {
  @ApiProperty()
  filledMap: string;
  @ApiProperty()
  emptyMap: string;
  @ApiProperty({ isArray: true, type: OutputNeighbourhoodDto })
  neighbourhoods: OutputNeighbourhoodDto[];
  @ApiProperty({ isArray: true, type: OutputLotDto })
  lots: OutputLotDto[];
}
