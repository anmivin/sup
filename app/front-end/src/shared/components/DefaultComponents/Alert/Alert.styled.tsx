import { Alert, AlertColor, Theme, alpha, styled } from '@mui/material';

import {
  AlertBlankIcon,
  AlertCheckIcon,
  AlertCloseIcon,
  AlertDotsIcon,
  AlertExclamationIcon,
  AlertHeartIcon,
  AlertInfoIcon,
  AlertPlusIcon,
  AlertQuestionIcon,
} from '@components/Icons';

import { AlertColorProps } from './Alert.types';

export const AlertColorMaps: AlertColorProps = {
  success: { icon: <AlertCheckIcon /> },
  error: { icon: <AlertCloseIcon /> },
  info: { icon: <AlertInfoIcon /> },
  warning: { icon: <AlertExclamationIcon /> },
  default: { icon: <AlertDotsIcon /> },
};

const alertTypeStyles = (theme: Theme, severity: AlertColor) => {
  return {
    borderRadius: 4,
    border: `1px solid ${alpha(theme.palette[severity].light, 0.15)}`,
  };
};

export const StyledAlert = styled(Alert)(({ theme, severity }) => ({
  color: theme.palette.text.primary,
  minWidth: 280,
  minHeight: 56,
  alignItems: 'center',
  ...alertTypeStyles(theme, severity as AlertColor),
  '.MuiAlert-action': {
    padding: '0 0 0 16px',
  },
}));
