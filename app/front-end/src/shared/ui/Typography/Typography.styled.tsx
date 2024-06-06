import { ForwardedRef, forwardRef } from 'react';

import { Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Color } from '@components/DefaultComponents/theme';

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

//STORY
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled('div')`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;
export const ListItemName = styled('div')`
  width: 120px;
  flex-shrink: 0;
  padding-right: ${({ theme }) => theme.spacing(4)};
  color: gray;
`;
