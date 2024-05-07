import { Edge } from 'reactflow';

export interface NodeDataDto {
  name: string;
  image?: string;
  onClick?: (showDrawer: boolean) => void;
  onHover?: () => void;
  fixedY?: number;
}

export declare enum Position {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}
export interface XYPosition {
  x: number;
  y: number;
}

export interface NodesDto {
  id: string;
  position: XYPosition;
  className?: string;
  sourcePosition?: Position;
  targetPosition?: Position;
  hidden?: boolean;
  selected?: boolean;
  dragging?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  connectable?: boolean;
  deletable?: boolean;
  dragHandle?: string;
  width?: number | null;
  height?: number | null;
  parentNode?: string;
  zIndex?: number;
  expandParent?: boolean;
  positionAbsolute?: XYPosition;
  ariaLabel?: string;
  focusable?: boolean;
  resizing?: boolean;
  data: NodeDataDto;
  type: string;
}

export interface TreeDto {
  edges: Edge<any>[];
  nodes: NodesDto[];
}

export interface TreeSDto {
  initialEdges: Edge<any>[];
  initialNodes: NodesDto[];
}
