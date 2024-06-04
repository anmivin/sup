import { FC } from 'react';

import { StyledMuiDialogTitle } from './Dialog.styled';
import { DialogTitleProps } from './Dialog.types';

export const DialogTitle: FC<DialogTitleProps> = (props) => (
  <StyledMuiDialogTitle {...props} data-test-id="DialogTitle" />
);
