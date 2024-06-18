import { ForwardedRef, forwardRef } from 'react';

import { StyledCheckbox } from './Checkbox.styled';

import { CheckboxProps } from './Checkbox.types';

import { CheckboxIcon } from './CheckboxIcon';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size, ...rest }: CheckboxProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledCheckbox
        ref={ref}
        checked={rest.checked ?? !!rest.value}
        icon={<CheckboxIcon />}
        checkedIcon={<CheckboxIcon checked />}
        size={size}
        {...rest}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
