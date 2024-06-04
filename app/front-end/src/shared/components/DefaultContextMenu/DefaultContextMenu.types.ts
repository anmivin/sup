import { ReactNode } from 'react';

import { MenuItemProps, MenuProps } from '@components/Menu/Menu.types';

export type DefaultContextMenuItemProps = Omit<MenuItemProps, 'onClick'> & {
  label?: string;
  onClick?: (id: string | number) => void;
};

export interface DefaultContextMenuProps {
  items: DefaultContextMenuItemProps[];
  anchorEl?: Element | null;
  menuProps?: Omit<MenuProps, 'anchorEl' | 'open' | 'onClose'>;
  icon?: ReactNode;
}
