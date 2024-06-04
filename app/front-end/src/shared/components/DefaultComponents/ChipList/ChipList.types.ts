import { HTMLProps, ReactNode, Ref } from 'react';

export interface ChipListProps extends Omit<HTMLProps<HTMLUListElement>, 'as'> {
  rows?: 1 | 2 | 3;
  children: ReactNode;
  ref?: Ref<HTMLUListElement>;
}
