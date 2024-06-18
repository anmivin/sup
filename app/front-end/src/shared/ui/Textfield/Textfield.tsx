import { ForwardedRef, forwardRef } from 'react';

import { StyledTextField } from './Textfield.styled';

import { DefaultTextfieldProps } from './Textfield.types';

export const Textfield = forwardRef<HTMLDivElement, DefaultTextfieldProps>(
  ({ ...rest }: DefaultTextfieldProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledTextField ref={ref} {...rest} />;
  },
);

Textfield.displayName = 'DefaultTextfield';

export default Textfield;
