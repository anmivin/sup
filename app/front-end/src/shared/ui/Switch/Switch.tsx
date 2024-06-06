import { ForwardedRef, forwardRef } from 'react';

import { StyledSwitch } from './Switch.styled';

import { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value, checked, ...rest }: SwitchProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return <StyledSwitch checked={checked ?? Boolean(value)} {...rest} ref={ref} />;
  },
);

Switch.displayName = 'Switch';
export default Switch;
