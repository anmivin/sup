import { ForwardedRef, forwardRef } from 'react';

import Typography from './Typography';
import { TypographyTitleProps } from './Typography.types';

export const Title = forwardRef<HTMLElement, TypographyTitleProps>(
  ({ level = 3, ...rest }: TypographyTitleProps, ref: ForwardedRef<HTMLElement>) => (
    <Typography ref={ref} variant={`h${level}`} {...rest} />
  )
);

Title.displayName = 'Title';
export default Title;
