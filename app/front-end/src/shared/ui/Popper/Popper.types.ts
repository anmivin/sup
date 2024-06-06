import { PopperProps as MuiPopperProps } from '@mui/material';

export interface BasePopperProps extends MuiPopperProps {
  flip?: boolean;
  preventOverflow?: boolean;
  arrow?: boolean;
  arrowRef?: HTMLSpanElement;
}

export interface PopperProps extends Omit<BasePopperProps, 'arrowRef'> {
  onClose?: (e: MouseEvent | TouchEvent) => void;
}
