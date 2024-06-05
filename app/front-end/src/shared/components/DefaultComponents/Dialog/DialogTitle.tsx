import { StyledMuiDialogTitle } from './Dialog.styled';

import { DialogTitleProps } from './Dialog.types';

export const DialogTitle = (props: DialogTitleProps) => <StyledMuiDialogTitle {...props} data-test-id="DialogTitle" />;
