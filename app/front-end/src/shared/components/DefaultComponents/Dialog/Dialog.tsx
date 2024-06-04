import { css, styled } from '@mui/material/styles';

import IconButton from '@components/DefaultComponents/IconButton';
import Text from '@components/DefaultComponents/Typography/Text';
import { CloseIcon } from '@components/DefaultComponents/icons';

import { StyledMuiDialog } from './Dialog.styled';

import { DialogProps } from './Dialog.types';

const CloseButtonLabel = styled('label')(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 100%;
    margin-left: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.color.monoB};

    > .MuiButtonBase-root {
      background: ${theme.color.monoB200};
      color: ${theme.color.monoB};
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
