import { Drawer, DrawerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDrawer = styled(Drawer)<DrawerProps & { width?: number }>(({ width }) => ({
  width: width,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: width,
  },
}));
