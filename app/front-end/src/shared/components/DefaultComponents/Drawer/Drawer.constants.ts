export enum DrawerAnchor {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

export enum DrawerVariant {
  permanent = 'permanent',
  persistent = 'persistent',
  temporary = 'temporary',
}

export const DEFAULT_DRAWER_ANCHOR = DrawerAnchor.right;

export const DEFAULT_DRAWER_VARIANT = DrawerVariant.temporary;
