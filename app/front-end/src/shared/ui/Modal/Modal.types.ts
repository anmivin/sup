import { ReactNode } from 'react';

import { ModalProps } from '@mui/material';

export interface DefaultModalProps extends ModalProps {
  header?: string | ReactNode;
  suppressCloseButton?: boolean;
  width?: string;
}
