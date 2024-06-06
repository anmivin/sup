import { IconButton, css, styled } from '@mui/material';

import { StyledMuiDialog } from './Dialog.styled';

import { DialogProps } from './Dialog.types';

import { CloseIcon } from '../Icons';
import Text from '../Typography/Text';

const CloseButtonLabel = styled('label')(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 100%;
    margin-left: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.color.textDark};

    > .MuiButtonBase-root {
      background: ${theme.color.primaryMain};
      color: ${theme.color.textDark};
      border-radius: ${theme.spacing(0.5)};
    }
  `,
);
const Dialog = ({ children, onClose, ...restProps }: DialogProps) => {
  return (
    <StyledMuiDialog onClose={onClose} {...restProps} data-test-id="Dialog">
      <CloseButtonLabel>
        <IconButton onClick={(e) => onClose(e, 'escapeKeyDown')}>
          <CloseIcon />
        </IconButton>
        <Text variant="caption">Esc</Text>
      </CloseButtonLabel>
      {children}
    </StyledMuiDialog>
  );
};

export default Dialog;
