import { styled } from '@mui/material/styles';

import { SnackbarColor } from './Snackbar.types';

import ButtonUnstyled from '../Button';

type SnackbarStyledProps = { color: SnackbarColor };

export const Wrapper = styled(({ color: _, ...rest }: any) => <div {...rest} />)<SnackbarStyledProps>`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing(3)};
  min-width: 280px;
  background-color: ${({ theme, color }) => {
    if (color === 'default') {
      return theme.color.monoA800;
    }
    return theme.color[color];
  }};
  color: ${({ theme }) => theme.color.monoB};
  ${({ theme }) => theme.fontStyle.caption};
  backdrop-filter: blur(20px);
`;

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 4px;
`;
export const Text = styled('div')`
  flex-grow: 1;
  margin-left: 8px;
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Button = styled(ButtonUnstyled)`
  margin-left: 8px;
`;

export const CloseButton = styled(Button)`
  &.MuiButton-contained {
    padding: 0;
  }
`;
