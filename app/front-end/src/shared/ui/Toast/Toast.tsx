import React, { createContext, useCallback, useState } from 'react';

import { AlertProps, Box, Button, Portal, Typography } from '@mui/material';
import { AxiosError } from 'axios';

import { StyledAlert } from './Toast.styled';

export const getErrorMessage = (err: any): string => {
  return (
    (err as AxiosError<ErrorResponse> | undefined)?.response?.data.message ??
    (err as AxiosError | undefined)?.message ??
    (err as Error | undefined)?.message ??
    err ??
    'Ошибка'
  );
};

export interface ErrorResponse {
  message: string;
  status: number;
  timestamp: string;
}

interface ButtonProps {
  buttonText: string;
  onClose?: () => void;
}
export interface ToastProps {
  title?: string;
  text: string;
  button?: ButtonProps | false;
  variant?: AlertProps['variant'];
  type: AlertProps['severity'];
  closeDelay?: number;
}

export interface Toast extends ToastProps {
  id: number;
}

interface ToastsCalls {
  addToast: (toast: ToastProps) => void;
  errorToast: (text: unknown, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => void;
  successToast: (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => void;
  warningToast: (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => void;
  infoToast: (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => void;
}

const TOAST_MAX_WIDTH = 600;
const TOAST_AUTOCLOSE_DELAY = 5000;

export const ToastContext = createContext<ToastsCalls>({
  addToast: () => null,
  errorToast: () => null,
  successToast: () => null,
  warningToast: () => null,
  infoToast: () => null,
});

const ToastProvider = (children: React.ReactNode) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const handleClose = useCallback((toastId: number) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== toastId));
  }, []);

  const addToast = useCallback(
    (toast: ToastProps) => {
      const timestamp = Number(new Date());
      setToasts((prevState) => [...prevState, { ...toast, id: timestamp }]);
      setTimeout(() => handleClose(timestamp), toast.closeDelay ?? TOAST_AUTOCLOSE_DELAY);
    },
    [handleClose],
  );

  const errorToast = useCallback(
    (text: unknown, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => {
      addToast({ text: getErrorMessage(text), title, variant, button, type: 'error' });
    },
    [addToast],
  );

  const successToast = useCallback(
    (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => {
      addToast({ text, title, variant, button, type: 'success' });
    },
    [addToast],
  );

  const warningToast = useCallback(
    (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => {
      addToast({ text, title, variant, button, type: 'warning' });
    },
    [addToast],
  );

  const infoToast = useCallback(
    (text: string, title?: string, variant?: AlertProps['variant'], button?: ButtonProps | false) => {
      addToast({ text, title, variant, button, type: 'info' });
    },
    [addToast],
  );

  return (
    <ToastContext.Provider value={{ addToast, errorToast, successToast, infoToast, warningToast }}>
      {children}
      <Portal>
        <Box
          position="fixed"
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          maxWidth={TOAST_MAX_WIDTH}
          mb={2}
          mr={2}
          gap={1}
          sx={{ bottom: 0, right: 0 }}
          zIndex={(theme) => theme.zIndex.snackbar}
        >
          {toasts.map((toast: Toast) => (
            <Box key={toast.id}>
              <StyledAlert
                severity={toast.type}
                variant={toast.variant ?? 'standard'}
                onClose={() => handleClose(toast.id)}
                action={
                  toast.button ? (
                    <Button
                      onClick={() => {
                        handleClose(toast.id);
                        (toast.button as ButtonProps).onClose?.();
                      }}
                      color="inherit"
                      sx={{
                        fontSize: '13px',
                        padding: (theme) => theme.spacing(0.375, 0.5),
                        marginLeft: (theme) => theme.spacing(5.25),
                      }}
                    >
                      {toast.button.buttonText}
                    </Button>
                  ) : (
                    toast.button
                  )
                }
              >
                {toast.title && (
                  <Typography fontWeight={500} marginBottom={0.5}>
                    {toast.title}
                  </Typography>
                )}
                {toast.text}
              </StyledAlert>
            </Box>
          ))}
        </Box>
      </Portal>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
