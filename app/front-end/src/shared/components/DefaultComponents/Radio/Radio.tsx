import { ForwardedRef, forwardRef } from 'react';

import Spinner from '@components/DefaultComponents/Spinner/Spinner';

import { StyledRadio, TemporaryLoadingWrapper } from './Radio.styled';

import { RadioProps, RadioSizeKey } from './Radio.types';

import { DEFAULT_RADIO_SIZE, DEFAULT_RADIO_VARIANT } from './Radio.constants';
import { RadioIcon } from './RadioIcon';

const RadioFontSizeMap: Record<RadioSizeKey, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

export const Radio = forwardRef<HTMLButtonElement, RadioProps & { indeterminate?: boolean }>(
  (
    {
      variant = DEFAULT_RADIO_VARIANT,
      size = DEFAULT_RADIO_SIZE,
      isLoading,
      indeterminate = false,
      ...rest
    }: RadioProps & { indeterminate?: boolean },
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    if (isLoading) {
      return (
        <TemporaryLoadingWrapper style={{ fontSize: RadioFontSizeMap[size] }}>
          <Spinner />
        </TemporaryLoadingWrapper>
      );
    }

    return (
      <StyledRadio
        ref={ref}
        variant={variant}
        checked={rest.checked}
        icon={<RadioIcon size={size} indeterminate={indeterminate} />}
        checkedIcon={<RadioIcon size={size} checked indeterminate={indeterminate} />}
        size={size}
        {...rest}
      />
    );
  },
);

Radio.displayName = 'Radio';
export default Radio;
