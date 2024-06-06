import { ReactNode } from 'react';

import { AlertProps as MUIAlertProps } from '@mui/material';

import { ButtonProps } from '@components/DefaultComponents/Button';

import { Color } from '@theme/index';

import { AlertColorVariants } from './Alert.constants';

export type AlertColorProps = {
  [key in AlertColorVariants]: {
    icon: ReactNode;
    color: Color;
  };
};

export type SeverityWithoutInvalid = Exclude<keyof typeof AlertColorVariants, 'default' | 'primary' | 'secondary'>;

export type AlertProps = {
  color: keyof typeof AlertColorVariants;
  title?: string;
  closeButton?: boolean;
  actionButton?: ButtonProps & { actionText: string };
  cancelButton?: ButtonProps & { cancelText: string };
  onClose?: () => void;
} & Omit<MUIAlertProps, 'severity' | 'variant' | 'key' | 'onClose'>;

declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    default: true;
    primary: true;
    secondary: true;
  }
}
