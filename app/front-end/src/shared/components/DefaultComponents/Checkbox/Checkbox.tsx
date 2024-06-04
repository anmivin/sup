import { ForwardedRef, forwardRef } from 'react';

import Box from '@components/DefaultComponents/Box';
import { CircularProgress } from '@components/DefaultComponents/Progress';

import { StyledCheckbox } from './Checkbox.styled';

import { CheckboxProps, CheckboxSizeKey } from './Checkbox.types';

import { DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from './Checkbox.constants';
import { CheckboxIcon } from './CheckboxIcon';

const CheckboxFontSizeMap: Record<CheckboxSizeKey, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

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
    if (isLoading) {
      return (
        <Box p={2}>
          <CircularProgress size={CheckboxFontSizeMap[size]} />
        </Box>
      );
    }

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
