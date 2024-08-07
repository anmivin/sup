import { ApiProperty } from '@nestjs/swagger';

export class InputTreeDto {
  @ApiProperty({ description: 'User id', nullable: false })
  userId: string;
  @ApiProperty({ description: 'Tree name', nullable: false })
  name: string;
  @ApiProperty({ description: 'Tree image', nullable: true })
  imageId: string;
}
export class InputSimDto {
  @ApiProperty({ description: 'User id', nullable: false })
  userId: string;
  @ApiProperty({ description: 'Sim name', nullable: false })
  name: string;
  @ApiProperty({ description: 'Sim image', nullable: true })
  imageId: string;
  @ApiProperty({ description: 'Sim in tree', nullable: false })
  isInTree: boolean;
  @ApiProperty({ description: 'Tree id', nullable: false })
  treeId: string;
  @ApiProperty({ description: 'Game part', nullable: false })
  part: string;
  @ApiProperty({ description: 'X pos', nullable: false })
  xPos: number;
  @ApiProperty({ description: 'Y pos', nullable: false })
  yPos: number;
  @ApiProperty({ description: 'First parent id', nullable: true })
  parentFirstId?: string;
  @ApiProperty({ description: 'Second parent id', nullable: true })
  parentSecondId?: string;
  @ApiProperty({ description: 'Children ids', nullable: false })
  childIds: string[];
  @ApiProperty({ description: 'Partners ids', nullable: false })
  partnersIds: string[];
}

export class OutputTreeListDto {
  @ApiProperty({ description: 'Tree id', nullable: false })
  id: string;
  @ApiProperty({ description: 'Tree name', nullable: false })
  name: string;
  @ApiProperty({ description: 'Tree image', nullable: true })
  image: string | null;
}
export class OutputSimListDto {
  @ApiProperty({ description: 'Sim id', nullable: false })
  id: string;
  @ApiProperty({ description: 'Sim name', nullable: false })
  name: string;
  @ApiProperty({ description: 'Sim image', nullable: true })
  image: string | null;
}

export class SimsTreeStructure {
  id: string;
  name: string;
  imageId: string | null;
  children: SimsTreeStructureBasic[];
  parents: SimsTreeStructureBasic[];
  partners: SimsTreeStructureBasic[];
}

export class SimsTreeStructureBasic {
  id: string;
  name: string;
  imageId: string | null;
  children: {
    id: string;
    name: string;
  }[];
  parents: {
    id: string;
    name: string;
  }[];
  partners: {
    id: string;
    name: string;
  }[];
}

export declare enum Position {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

class EdgesDto {
  @ApiProperty({ description: 'Edge id', nullable: false })
  id: string;
  @ApiProperty({ description: 'Edge source', nullable: false })
  source: string;
  @ApiProperty({ description: 'Edge target', nullable: false })
  target: string;
  @ApiProperty({ description: 'Edge source handle position', nullable: true })
  sourceHandle?: string | null;
  @ApiProperty({ description: 'Edge target handle position', nullable: true })
  targetHandle?: string | null;
  @ApiProperty({ description: 'Is edge hidden', nullable: true })
  hidden?: boolean;
}

class NodeDataDto {
  @ApiProperty({ description: 'Sim id', nullable: false })
  id: string;
  @ApiProperty({ description: 'Sim name', nullable: false })
  name: string;
  @ApiProperty({ description: 'Sim image', nullable: true })
  imageId: string | null;
  @ApiProperty({ description: 'Fixed node Y position', nullable: false })
  fixedY: number;
}

export class XYPosition {
  @ApiProperty({ description: 'X position', nullable: false })
  x: number;
  @ApiProperty({ description: 'Y position', nullable: false })
  y: number;
}

class NodesDto {
  @ApiProperty({ description: 'Node id', nullable: false })
  id: string;
  @ApiProperty({ description: 'Node position', nullable: false })
  position: XYPosition;
  @ApiProperty({ description: 'Node type', nullable: false })
  type: string;
  @ApiProperty({ description: 'Is node hidden', nullable: true })
  hidden?: boolean;
  @ApiProperty({ description: 'Is node draggable', nullable: true })
  draggable?: boolean;
  @ApiProperty({ description: 'Edges', nullable: false })
  data: NodeDataDto;
}

export class OutputTreeDto {
  @ApiProperty({ type: [EdgesDto], description: 'Edges', nullable: false })
  edges: EdgesDto[];
  @ApiProperty({ type: [NodesDto], description: 'Nodes', nullable: false })
  nodes: NodesDto[];
}
