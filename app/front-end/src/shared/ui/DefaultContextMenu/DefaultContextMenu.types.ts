import { ReactNode } from 'react';

import { MenuItemProps, MenuProps } from '../Menu/Menu.types';

export type DefaultContextMenuItemProps = Omit<MenuItemProps, 'onClick'> & {
  label?: string;
  onClick?: (id: string | number) => void;
};

export interface DefaultContextMenuProps {
  items: DefaultContextMenuItemProps[];
  menuProps?: Omit<MenuProps, 'anchorEl' | 'open' | 'onClose'>;
  icon?: ReactNode;
}
