import { FC } from 'react';

import clsx from 'clsx';

import { RadioIconProps } from '@components/DefaultComponents/Radio/Radio.types';

import { StyledRadioIcon } from './Radio.styled';

import { RadioSize } from './Radio.constants';

const fontSizeToStrokeWidthMap = {
  [RadioSize.small]: 2.5,
  [RadioSize.medium]: 2.75,
  [RadioSize.large]: 3,
};

export const RadioIcon: FC<RadioIconProps> = ({ indeterminate, checked, className, size, fontSize: _, ...rest }) => {
  return (
    <StyledRadioIcon indeterminate={indeterminate} checked={checked} className={clsx(className, 'RadioIcon')}>
      <svg {...rest} viewBox="0 0 20 20">
        <circle cx="10" cy="10" r={fontSizeToStrokeWidthMap[size]} />
      </svg>
    </StyledRadioIcon>
  );
};

export default RadioIcon;
