import { MenuItem, styled } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.color.textSecondary};
` as typeof MenuItem;
