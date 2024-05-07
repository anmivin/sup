import { Box, Paper, styled } from '@mui/material';

export const CircleBox = styled(Box)`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.textPrimary};
  color: ${({ theme }) => theme.color.primaryMain};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.color.primaryLight};
  width: 300px;
`;
