import { MenuItemProps } from '@mui/material';

import { StyledMenuItem } from './Menu.styled';

export const MenuItem = ({ ...props }: MenuItemProps) => {
  return <StyledMenuItem {...props} />;
};

export default MenuItem;
