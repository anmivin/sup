import { FC } from 'react';

import { StyledMenu } from './Menu.styled';
import { MenuProps } from './Menu.types';

export const Menu: FC<MenuProps> = (props) => {
  return <StyledMenu {...props} />;
};

export default Menu;
