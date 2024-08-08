import { PositionProps } from '@type/interfaces';

export enum MODE {
  default = 'default',
  draw = 'draw',
  erase = 'erase',
}
export interface DrawLayoutMenuProps {
  onAdd: (props: PositionProps) => void;
  onChangeMode: (mode: MODE) => void;
}

export const objectSizes: PositionProps[] = [
  {
    x: 1,
    y: 1,
  },
  {
    x: 2,
    y: 1,
  },
  {
    x: 3,
    y: 1,
  },
  {
    x: 2,
    y: 2,
  },
  {
    x: 3,
    y: 2,
  },
  {
    x: 3,
    y: 3,
  },
  {
    x: 4,
    y: 1,
  },
];
