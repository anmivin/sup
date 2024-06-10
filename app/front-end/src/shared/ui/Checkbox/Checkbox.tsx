import { ForwardedRef, forwardRef } from 'react';

import { StyledCheckbox } from './Checkbox.styled';

import { CheckboxProps } from './Checkbox.types';

import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from './Checkbox.constants';
import { CheckboxIcon } from './CheckboxIcon';

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      variant = DEFAULT_CHECKBOX_VARIANT,
      size = DEFAULT_CHECKBOX_SIZE,
      isLoading,
      indeterminate = false,
      ...rest
    }: CheckboxProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledCheckbox
        ref={ref}
        variant={variant}
        checked={rest.checked ?? !!rest.value}
        icon={<CheckboxIcon size={size} indeterminate={indeterminate} />}
        checkedIcon={<CheckboxIcon size={size} checked indeterminate={indeterminate} />}
        size={size}
        {...rest}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
