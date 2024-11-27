import { Link } from 'react-router-dom';

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
  background-color: ${({ theme }) => theme.color.secondaryMain};s
  padding: 0 8px;
`;

export const StyledPoper = styled(Popper)`
  width: 200px;
  background-color: ${({ theme }) => theme.color.secondaryMain};
  color: ${({ theme }) => theme.color.textMain};
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
      background-color: ${({ theme }) => theme.color.secondaryMain};

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
  background-color: ${({ theme }) => theme.color.textDark};
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
    background-color: ${({ theme }) => theme.color.secondaryMain};
    box-shadow: ${({ theme }) => `0 4px ${theme.color.textDark}`};
    transition: box-shadow 0.2s ease-out;
  }
`;

export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textDark};
  }
`;
