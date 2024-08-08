import { Box, IconButton, Typography } from '@mui/material';

import { StyledDrawer } from './DefaultDrawer.styled';

import { DefaultDrawerProps } from './DefaultDrawer.types';

import { CloseIcon } from '../../assets/icons';

const DefaultDrawer = ({ width, children, label, onClose, anchor = 'right', ...drawerProps }: DefaultDrawerProps) => {
  return (
    <StyledDrawer
      {...drawerProps}
      $width={width}
      open={true}
      variant="persistent"
      onClose={onClose}
      anchor={anchor}
      SlideProps={{
        onExited: onClose,
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
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box mt={2} flexGrow="1" display="flex" flexDirection="column">
          {children}
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default DefaultDrawer;
