import { ReactNode } from 'react';

import { DrawerProps } from '@mui/material';

export interface DefaultDrawerProps extends Omit<DrawerProps, 'onSubmit' | 'onClose'> {
  label: string | ReactNode;
  onClose: () => void;
  width?: number;
}
