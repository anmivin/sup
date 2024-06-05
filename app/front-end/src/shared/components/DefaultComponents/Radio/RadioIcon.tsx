import clsx from 'clsx';

import { RadioIconProps } from '@components/DefaultComponents/Radio/Radio.types';

import { StyledRadioIcon } from './Radio.styled';

import { RadioSize } from './Radio.constants';

const fontSizeToStrokeWidthMap = {
  [RadioSize.small]: 2.5,
  [RadioSize.medium]: 2.75,
  [RadioSize.large]: 3,
};

export const RadioIcon = ({ checked, className, size, fontSize: _, ...rest }: RadioIconProps) => {
  return (
    <StyledRadioIcon className={clsx(className, 'RadioIcon')}>
      <svg {...rest} viewBox="0 0 20 20">
        <circle cx="10" cy="10" r={fontSizeToStrokeWidthMap[size]} />
      </svg>
    </StyledRadioIcon>
  );
};

export default RadioIcon;
