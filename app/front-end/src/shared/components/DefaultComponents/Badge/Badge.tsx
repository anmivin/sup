import { FC } from 'react';

import { BadgeStyled } from './Badge.styled';
import { BadgeProps } from './Badge.types';

export const Badge: FC<BadgeProps> = ({
  color = 'secondary',
  size = 'medium',
  position = 'inline',
  ...rest
}) => {
  return (
    <BadgeStyled color={color} size={size} position={position} {...rest} />
  );
};

export default Badge;
