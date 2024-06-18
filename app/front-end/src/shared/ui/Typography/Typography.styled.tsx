import { ForwardedRef, forwardRef } from 'react';

import { Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Color } from '@theme/index';

import { TypographyProps } from './Typography.types';

// eslint-disable-next-line react/display-name
const ForwardedTypography = forwardRef<HTMLElement, TypographyProps>(
  ({ color: _, ...props }: TypographyProps, ref: ForwardedRef<HTMLElement>) => <MuiTypography {...props} ref={ref} />,
);

export const StyledTypography = styled(ForwardedTypography)(
  ({ theme, color }) =>
    color && {
      color: Object.prototype.hasOwnProperty.call(theme.color, color) ? theme.color[color as Color] : color,
    },
);
