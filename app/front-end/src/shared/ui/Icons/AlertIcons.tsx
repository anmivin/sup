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
.
import { AlertColorProps } from '../Alert/Alert.types';

export const AlertColorMaps: AlertColorProps = {
  success: { icon: <AlertCheckIcon /> },
  error: { icon: <AlertCloseIcon /> },
  info: { icon: <AlertInfoIcon /> },
  warning: { icon: <AlertExclamationIcon /> },
  default: { icon: <AlertDotsIcon /> },
};
