import { ReactNode } from 'react';

import { Color } from '@theme/index';

export interface IconWrapperProps {
  width?: number;
  height?: number;
  viewBox?: string;
  color?: Color;
  filledIcon?: boolean;
  children?: ReactNode;
}
