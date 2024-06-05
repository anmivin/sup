import { Chip, styled } from '@mui/material';

export const StyledChip = styled(Chip)`
  color: ${({ theme }) => theme.color.primaryMain};
  background-color: ${({ theme }) => theme.color.infoLight};
` as typeof Chip;
