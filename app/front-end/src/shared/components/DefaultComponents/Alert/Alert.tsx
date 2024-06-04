import { ForwardedRef, forwardRef } from 'react';

import { AlertTitle } from '@mui/material';
import { Box } from '@mui/material';

import Button from '@components/DefaultComponents/Button';
import IconButton from '@components/DefaultComponents/IconButton';
import { CloseIcon } from '@components/Icons';

import { AlertColorMaps, StyledAlert } from './Alert.styled';

import { AlertProps, SeverityWithoutInvalid } from './Alert.types';

import { AlertColorVariants } from './Alert.constants';

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      title,
      id,
      style,
      color = AlertColorVariants.default,
      closeButton = false,
      actionButton,
      cancelButton,
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    const { persist, anchorOrigin, autoHideDuration, hideIconVariant, iconVariant, ...restArgs } = args;

    const { actionText, onClick: onClickAction, ...restActionProps } = actionButton ?? {};
    const { cancelText, onClick: onClickCancel, ...restCancelProps } = cancelButton ?? {};

    const colorValue = AlertColorVariants.default;

    return (
      <StyledAlert
        {...restArgs}
        style={style}
        ref={ref}
        severity={colorValue as SeverityWithoutInvalid}
        color={color}
        icon={AlertColorMaps[color].icon}
        action={
          closeButton && (
            <IconButton onClick={() => closeSnackbar(id)} size="medium">
              <CloseIcon />
            </IconButton>
          )
        }
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {actionButton && (
            <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
              <Button
                variant="contained"
                {...restActionProps}
                onClick={(event) => {
                  onClickAction?.(event);
                  closeSnackbar(id);
                }}
              >
                {actionText}
              </Button>
              {cancelButton && (
                <Button
                  variant="text"
                  {...restCancelProps}
                  onClick={(event) => {
                    onClickCancel?.(event);
                    closeSnackbar(id);
                  }}
                >
                  {cancelText}
                </Button>
              )}
            </Box>
          )}
        </Box>
      </StyledAlert>
    );
  },
);

export default Alert;
