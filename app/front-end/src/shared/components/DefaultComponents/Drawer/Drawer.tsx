import { FC, useCallback } from 'react';

import { DrawerProps as MuiDrawerProps } from '@mui/material';

import { StyledDrawer } from './Drawer.styled';

export interface DrawerProps extends Omit<MuiDrawerProps, 'onClose'> {
  onClose?: () => void;
  width?: number;
  disableClose?: boolean;
}

const Drawer: FC<DrawerProps> = ({ children, onClose, width, anchor = 'right', disableClose = false, ...rest }) => {
  const handleOnClose = useCallback(() => {
    if (disableClose) return;
    onClose?.();
  }, [disableClose, onClose]);

  return (
    <StyledDrawer
      onClose={handleOnClose}
      anchor={anchor}
      width={width}
      SlideProps={{
        onExited: onClose,
      }}
      {...rest}
    >
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
