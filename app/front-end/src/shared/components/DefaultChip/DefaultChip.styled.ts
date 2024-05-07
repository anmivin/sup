import { Chip, styled } from '@mui/material';

export const StyledChip = styled(Chip)`
  color: ${(props) => props.theme.color.primaryMain};
  background-color: ${(props) => props.theme.color.infoLight};
` as typeof Chip;
