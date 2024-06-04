import { FC } from 'react';

import { StyledMenuItem } from './Menu.styled';
import { MenuItemProps } from './Menu.types';

export const MenuItem: FC<MenuItemProps> = ({ groupId, ...props }) => {
  return <StyledMenuItem {...props} data-group-id={groupId} />;
};

export default MenuItem;
