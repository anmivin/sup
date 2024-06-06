import { Drawer, DrawerProps, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)<DrawerProps & { $width?: number }>`
  width: ${({ $width }) => `${$width ?? 500}px`};
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${({ $width }) => `${$width ?? 500}px`};
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
`;
