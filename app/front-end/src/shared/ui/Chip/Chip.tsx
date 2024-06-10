import { ForwardedRef, forwardRef } from 'react';

import { clsx } from 'clsx';

import { StyledChip } from './Chip.styled';

import { ChipProps } from './Chip.types';

import { CloseIcon } from '../Icons';

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      color = 'default',
      variant = 'filled',
      size = 'small',
      deleteIcon = <CloseIcon size={20} />,
      label,
      children,
      selected,
      className,
      ...rest
    }: ChipProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledChip
        ref={ref}
        color={color}
        variant={variant}
        size={size}
        label={label || children}
        deleteIcon={deleteIcon}
        className={clsx(className, { 'Mui-selected': selected })}
        {...rest}
      />
    );
  },
);

Chip.displayName = 'Chip';
export default Chip;
