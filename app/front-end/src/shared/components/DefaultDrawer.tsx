import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import { Box, Drawer, DrawerProps, IconButton, Typography, useTheme } from '@mui/material';

export interface DefaultDrawerProps extends Omit<DrawerProps, 'onSubmit' | 'onClose'> {
  label: string | ReactNode;
  onClose?: () => void;
  isSmallCloseButton?: boolean;
}

const DefaultDrawer: FC<DefaultDrawerProps> = ({
  children,
  label,
  onClose,
  open = true,
  anchor = 'right',
  isSmallCloseButton,
  ...drawerProps
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const startClosing = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Drawer
      {...drawerProps}
      open={isOpen && open}
      onClose={startClosing}
      anchor={anchor}
      SlideProps={{
        onExited: onClose,
      }}
      sx={{
        '.MuiDrawer-paper': {
          width: 500,
          backgroundColor: theme.color.primaryMain,
        },
      }}
    >
      <Box p={3} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {typeof label === 'string' ? (
            <Typography variant="subtitle1" fontWeight="500">
              {label}
            </Typography>
          ) : (
            label
          )}
          <IconButton size="small" onClick={startClosing} sx={{ flexShrink: 0 }}>
            <ClearIcon />
          </IconButton>
        </Box>
        <Box mt={2} flexGrow="1" display="flex" flexDirection="column">
          {children}
        </Box>
      </Box>
    </Drawer>
  );
};

export default DefaultDrawer;
