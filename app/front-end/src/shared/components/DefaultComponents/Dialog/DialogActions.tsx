import { StyledMuiDialogActions } from './Dialog.styled';

import { DialogActionsProps } from './Dialog.types';

export const DialogActions = (props: DialogActionsProps) => (
  <StyledMuiDialogActions {...props} data-test-id="DialogActions" />
);
