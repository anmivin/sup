import { ReactNode } from 'react';

import { AlertProps } from '@mui/material';

import { Color } from '@theme/index';

import { AlertBlankIcon, AlertCheckIcon, AlertCloseIcon, AlertExclamationIcon, AlertInfoIcon } from '@assets/icons';

export enum ALERT_VARIANTS {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
  default = 'default',
}

export const AlertColorProps: Record<ALERT_VARIANTS, { icon: ReactNode; color: Color; background: Color }> = {
  [ALERT_VARIANTS.default]: {
    icon: <AlertBlankIcon />,
    color: 'infoMain',
    background: 'infoLight',
  },
  [ALERT_VARIANTS.success]: {
    icon: <AlertCheckIcon />,
    color: 'successMain',
    background: 'successLight',
  },
  [ALERT_VARIANTS.info]: {
    icon: <AlertInfoIcon />,
    color: 'infoMain',
    background: 'infoLight',
  },
  [ALERT_VARIANTS.warning]: {
    icon: <AlertExclamationIcon />,
    color: 'warningMain',
    background: 'warningLight',
  },
  [ALERT_VARIANTS.error]: {
    icon: <AlertCloseIcon />,
    color: 'errorMain',
    background: 'errorLight',
  },
};

export interface DefaultAlertProps extends Omit<AlertProps, 'key' | 'onClose' | 'color'> {
  type: ALERT_VARIANTS;
  title?: string;
  closeButton?: boolean;
  actionButtonText?: string;
  onClose?: () => void;
  onAction?: () => void;
}
