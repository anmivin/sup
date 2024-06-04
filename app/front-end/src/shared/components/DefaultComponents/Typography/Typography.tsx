import { ForwardedRef, forwardRef } from 'react';

import { StyledTypography } from './Typography.styled';
import { TypographyProps } from './Typography.types';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (props: TypographyProps, ref: ForwardedRef<HTMLElement>) => {
    return <StyledTypography ref={ref} {...props} />;
  }
);

Typography.displayName = 'Typography';
export default Typography;
