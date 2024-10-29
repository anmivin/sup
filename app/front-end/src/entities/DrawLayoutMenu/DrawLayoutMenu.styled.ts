import { Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondaryMain};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius.lg};
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledButton = styled(Button)`
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing(0)};
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.color.transparentDark100};
  min-width: 0;
`;
