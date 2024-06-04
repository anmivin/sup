import { AlertColorProps } from '@components/DefaultComponents/Alert/Alert.types';
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

export const AlertColorMaps: AlertColorProps = {
  success: { icon: <AlertCheckIcon /> },
  error: { icon: <AlertCloseIcon /> },
  info: { icon: <AlertInfoIcon /> },
  warning: { icon: <AlertExclamationIcon /> },
  default: { icon: <AlertDotsIcon /> },
};
