import { MouseEvent, ReactNode } from 'react';

import { ButtonProps } from '../Button';

export type SnackbarColor = 'success' | 'warning' | 'error' | 'info' | 'default';

export type SnackbarButtonProps = Omit<ButtonProps, 'onClick'> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>, id: string | undefined) => void;
};

export interface SnackbarProps {
  id?: string;
  icon?: ReactNode;
  text: string;
  actions?: Array<ButtonProps & { isClose?: boolean }>;
  color?: SnackbarColor;
  onCloseSnackbar?: (id?: string | number) => void;
  closeButton?: SnackbarButtonProps | boolean | null;
}
