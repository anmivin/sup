import { ReactNode } from 'react';

import { MenuItemProps, MenuProps } from '@ui/Menu/Menu.types';

export type ContextMenuItemProps = Omit<MenuItemProps, 'onClick'> & {
  label?: string;
  onClick?: (id: string | number) => void;
};

export interface ContextMenuProps {
  items: ContextMenuItemProps[];
  menuProps?: Omit<MenuProps, 'anchorEl' | 'open' | 'onClose'>;
  icon?: ReactNode;
}
