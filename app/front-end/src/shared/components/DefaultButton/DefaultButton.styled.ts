import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.textSecondary};
  &.skewed {
    background-color: ${({ theme }) => theme.color.primaryMain};
    box-shadow: ${({ theme }) => `0px 0px 8px 0px ${theme.color.secondaryMain}`};
    &:hover {
      box-shadow: ${({ theme }) => `inset 0px 0px 4px 0px ${theme.color.secondaryMain}`};
      background-color: ${({ theme }) => theme.color.primaryMain};
    }

    padding: 0 20px;
    height: 40px;
    transform: skewX(-30deg);
    border-radius: 0px;

    > * {
      transform: skewX(30deg);
    }
  }

  &.underscored {
    border-bottom: ${({ theme }) => `2px solid ${theme.color.textPrimary}`};
    border-radius: 0px;
    padding: 16px 0;
    height: 20px;
    line-height: 1em;
  }
`;
