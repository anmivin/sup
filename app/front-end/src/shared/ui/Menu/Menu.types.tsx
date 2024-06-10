import { MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

import { Color } from '@components/DefaultComponents/theme';

export type MenuProps = MuiMenuProps;
export interface MenuItemProps extends MuiMenuItemProps {
  color?: Color | string;
  groupId?: string;
}
