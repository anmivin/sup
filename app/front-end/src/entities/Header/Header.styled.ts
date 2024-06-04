import { Box, Button, Popper, styled } from '@mui/material';

export const HeaderContainer = styled(Box)`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primaryMain};
  padding: 0 8px;
`;

export const StyledPoper = styled(Popper)`
  width: 200px;
  background-color: ${({ theme }) => theme.color.backgroundPaper};
  color: ${({ theme }) => theme.color.textPrimary};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 4px;
  z-index: 10;
  text-align: end;

  .MuiList-root {
    padding: 0;
  }
  .MuiMenuItem-root {
    padding: 2;

    &:hover {
      background-color: ${({ theme }) => theme.color.backgroundPaper};

      &:first-child {
        border-radius: 4px 4px 0 0;
      }
      &:last-child {
        border-radius: 0 0 4px 4px;
      }
      &:only-child {
        border-radius: 4px;
      }
    }
  }
`;

export const ButtonContainer = styled(Box)`
  padding: 16px;
  display: flex;
  gap: 24px;
  height: 100%;
  & > :last-child {
    align-self: center;
  }
`;

export const Divider = styled(Box)`
  width: 6px;
  background-color: ${({ theme }) => theme.color.textPrimary};
  transform: skewX(-30deg);
`;
export const MainSection = styled(Box)`
  display: flex;
  gap: 8x;
`;

export const StyledButton = styled(Button)`
  height: 60px;
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryMain};
    box-shadow: ${({ theme }) => `0 4px ${theme.color.textPrimary}`};
    transition: box-shadow 0.2s ease-out;
  }
`;
