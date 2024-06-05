import { StyledMenu } from './Menu.styled';

import { MenuProps } from './Menu.types';

export const Menu = (props: MenuProps) => {
  return <StyledMenu {...props} />;
};

export default Menu;
