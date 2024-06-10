import { ButtonGroup, styled } from '@mui/material';

import Button from '../Button';

export const StyledButtonGroup = styled(ButtonGroup)`
  background-color: ${({ theme }) => theme.color.monoB};
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.monoA400};
  overflow: hidden;

  &.MuiButton-outlined {
    border-color: #e0e0e0; //remove transparency
  }

  &.selected {
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: ${({ theme }) => theme.color.monoA100};
    }
    color: ${({ theme }) => theme.color.monoA900};
  }
`;
