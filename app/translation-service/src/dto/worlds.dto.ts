export class LotDto {
    name: string;
    description: string
}

export class NeighborhoodDto {
    name: string;
    description: string
    lots:  {
        lot_001: LotDto;
        lot_002: LotDto;
        lot_003: LotDto;
        lot_004: LotDto;
        lot_005: LotDto;
        lot_006: LotDto;
    }
}

export class WorldDto {
    name: string;
    description: string;
    neighborhoods: {
        neighborhood_01: NeighborhoodDto;
        neighborhood_02: NeighborhoodDto;
        neighborhood_03: NeighborhoodDto;
        neighborhood_04: NeighborhoodDto;
        neighborhood_05: NeighborhoodDto;
        neighborhood_06: NeighborhoodDto;
    }
}
