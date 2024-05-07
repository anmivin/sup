import { FC, ForwardedRef, forwardRef } from 'react';

import { StyledTextField } from './DefaultTextfield.styled';

import { DefaultTextfieldProps } from './DefaultTextfield.types';

export const DefaultTextfield: FC<DefaultTextfieldProps> = forwardRef(
  ({ ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledTextField ref={ref} {...rest} />;
  },
);

DefaultTextfield.displayName = 'DefaultTextfield';

export default DefaultTextfield;
