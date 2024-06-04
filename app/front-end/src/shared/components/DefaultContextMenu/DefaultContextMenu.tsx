import { useRef, useState } from 'react';

import { IconButton } from '@components/DefaultComponents';
import Menu, { MenuItem } from '@components/Menu';

import { DefaultContextMenuProps } from './DefaultContextMenu.types';

const DefaultContextMenu = ({ items, anchorEl, menuProps, icon }: DefaultContextMenuProps) => {
  const [isShowMenu, toggleShowMenu] = useState<boolean>(false);
  const contextMenuButton = useRef<HTMLButtonElement>(null);
  if (!anchorEl) {
    return null;
  }
  return (
    <>
      <IconButton
        ref={contextMenuButton}
        onClick={(e) => {
          toggleShowMenu(true);
        }}
      >
        {icon}
      </IconButton>
      <Menu anchorEl={anchorEl} open={isShowMenu} onClose={() => toggleShowMenu(false)} {...menuProps}>
        {items.map(({ onClick, label, children, id, key, ...rest }, index) => (
          <MenuItem
            {...rest}
            onClick={() => {
              onClick?.(id || index);
              toggleShowMenu(false);
            }}
            key={key || label || index}
          >
            {label || children}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DefaultContextMenu;
