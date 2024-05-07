import { Box, Popper, styled } from '@mui/material';

export const HeaderContainer = styled(Box)`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.backgroundDefault};
  padding: ${({ theme }) => theme.spacing(4)};
  align-items: center;
`;

export const StyledPoper = styled(Popper)`
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
