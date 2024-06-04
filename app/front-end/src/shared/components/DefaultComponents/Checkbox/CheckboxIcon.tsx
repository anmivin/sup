import { FC } from 'react';

import clsx from 'clsx';

import { CheckboxIconProps } from '@components/DefaultComponents/Checkbox/Checkbox.types';

import { StyledCheckboxIcon } from './Checkbox.styled';

import { CheckboxSize } from './Checkbox.constants';

const fontSizeToStrokeWidthMap = {
  [CheckboxSize.small]: 2.4,
  [CheckboxSize.medium]: 2,
  [CheckboxSize.large]: 1.7,
};

export const CheckboxIcon: FC<CheckboxIconProps> = ({
  indeterminate,
  checked,
  className,
  size,
  fontSize: _,
  ...rest
}) => {
  return (
    <StyledCheckboxIcon indeterminate={indeterminate} checked={checked} className={clsx(className, 'checkboxIcon')}>
      <svg {...rest} viewBox="0 0 20 20">
        <path d="M6 9.5L9 12.5L14 7.5" strokeWidth={fontSizeToStrokeWidthMap[size]} strokeLinecap="round" />
      </svg>
    </StyledCheckboxIcon>
  );
};

export default CheckboxIcon;
