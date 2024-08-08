import { ReactNode } from 'react';

import { PopoverProps as MuiPopoverProps } from '@mui/material';

export interface PopoverBaseProps extends Omit<MuiPopoverProps, 'children' | 'onClick' | 'open' | 'content'> {
  content: ReactNode;
}

type PopoverPropsVariantChildren = {
  children?: JSX.Element;
  open?: boolean;
};

type PopoverPropsVariantOpen = {
  children?: never;
  open: boolean;
};

export type PopoverProps = PopoverBaseProps & (PopoverPropsVariantChildren | PopoverPropsVariantOpen);
