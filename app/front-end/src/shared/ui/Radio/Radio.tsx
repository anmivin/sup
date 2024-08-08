import { ForwardedRef, forwardRef } from 'react';

import { StyledRadio } from './Radio.styled';

import { RadioProps } from './Radio.types';

import { DEFAULT_RADIO_SIZE, DEFAULT_RADIO_VARIANT } from './Radio.constants';
import { RadioIcon } from './RadioIcon';

export const Radio = forwardRef<HTMLButtonElement, RadioProps & { indeterminate?: boolean }>(
  (
    {
      variant = DEFAULT_RADIO_VARIANT,
      size = DEFAULT_RADIO_SIZE,
      indeterminate = false,
      ...rest
    }: RadioProps & { indeterminate?: boolean },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledRadio
        ref={ref}
        variant={variant}
        checked={rest.checked}
        icon={<RadioIcon size={size} />}
        checkedIcon={<RadioIcon size={size} checked />}
        size={size}
        {...rest}
      />
    );
  },
);

Radio.displayName = 'Radio';
export default Radio;
