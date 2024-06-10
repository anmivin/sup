import { ForwardedRef, forwardRef } from 'react';

import Typography from './Typography';
import { TextProps } from './Typography.types';

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ variant = 'body1', ...rest }: TextProps, ref: ForwardedRef<HTMLElement>) => (
    <Typography ref={ref} variant={variant} {...rest} />
  )
);

Text.displayName = 'Text';
export default Text;
