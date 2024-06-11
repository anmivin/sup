import { useRef, useState } from 'react';

import { IconButton } from '@mui/material';

import Menu, { MenuItem } from '@ui/Menu';

import { ContextMenuProps } from './ContextMenu.types';

const ContextMenu = ({ items, menuProps, icon }: ContextMenuProps) => {
  const [isShowMenu, toggleShowMenu] = useState<boolean>(false);
  const contextMenuButton = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={contextMenuButton}
        onClick={() => {
          toggleShowMenu(true);
        }}
      >
        {icon}
      </IconButton>
      <Menu anchorEl={contextMenuButton.current} open={isShowMenu} onClose={() => toggleShowMenu(false)} {...menuProps}>
        {items.map((item, index) => (
          <MenuItem
            {...item}
            onClick={() => {
              item.onClick?.(item.id ?? index);
              toggleShowMenu(false);
            }}
            key={item.key ?? index}
          >
            {item.label ?? item.children}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ContextMenu;
