import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: -8px -8px 8px ${({ theme }) => theme.color.secondaryDark};
  margin: ${({ theme }) => theme.spacing(4, 0, 0, 4)};
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.textMain};
`;
