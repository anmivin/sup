import { StyledMenuItem } from './Menu.styled';

import { MenuItemProps } from './Menu.types';

export const MenuItem = ({ groupId, ...props }: MenuItemProps) => {
  return <StyledMenuItem {...props} data-group-id={groupId} />;
};

export default MenuItem;
