import { FC } from 'react';

import { StyledMuiDialogActions } from './Dialog.styled';
import { DialogActionsProps } from './Dialog.types';

export const DialogActions: FC<DialogActionsProps> = (props) => (
  <StyledMuiDialogActions {...props} data-test-id="DialogActions" />
);
