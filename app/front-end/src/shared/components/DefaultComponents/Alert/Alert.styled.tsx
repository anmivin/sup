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
  success: { icon: <AlertCheckIcon />, color: 'successMain' },
  error: { icon: <AlertCloseIcon />, color: 'errorMain' },
  info: { icon: <AlertInfoIcon />, color: 'infoMain' },
  warning: { icon: <AlertExclamationIcon />, color: 'warningMain' },
  default: { icon: <AlertDotsIcon />, color: 'infoMain' },
};

const alertTypeStyles = (theme: Theme, severity: AlertColor) => {
  return {
    borderRadius: 4,
    border: `1px solid ${theme.color[AlertColorMaps[severity]]}`,
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
