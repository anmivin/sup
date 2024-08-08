import { StyledSvg } from './IconWrapper.styled';

import { IconWrapperProps } from './IconWrapper.types';

const IconWrapper = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  color,
  filledIcon,
  children,
  ...rest
}: IconWrapperProps) => {
  return (
    <StyledSvg {...rest} width={width} height={height} viewBox={viewBox} $filledIcon={filledIcon} $color={color}>
      {children}
    </StyledSvg>
  );
};

export default IconWrapper;
