import { ForwardedRef, forwardRef } from 'react';

import { AlertTitle, Box, Button, IconButton } from '@mui/material';
import { CloseIcon } from '@ui/Icons';

import { StyledAlert } from './Alert.styled';

import { AlertColorProps, DefaultAlertProps } from './Alert.types';

const Alert = forwardRef<HTMLDivElement, DefaultAlertProps>(
  (
    { title, id, type, closeButton = false, actionButtonText, onClose, onAction, ...props }: DefaultAlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledAlert
        {...props}
        ref={ref}
        $alertType={type}
        icon={AlertColorProps[type].icon}
        action={
          closeButton && (
            <IconButton onClick={() => {}} size="medium">
              <CloseIcon />
            </IconButton>
          )
        }
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {actionButtonText && (
            <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
              <Button
                onClick={() => {
                  onAction?.();
                }}
              >
                {actionButtonText}
              </Button>
            </Box>
          )}
        </Box>
      </StyledAlert>
    );
  },
);

export default Alert;
