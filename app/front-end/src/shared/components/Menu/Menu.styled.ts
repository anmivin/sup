import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

import { Color } from '@components/DefaultComponents/theme';

import { MenuItemProps } from './Menu.types';

export const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  '.MuiMenuItem-root': {
    position: 'relative',
    transition: 'background-color 0.1s ease-out',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      inset: 0,
      transition: 'background-color 0.1s ease-out',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    '&:hover': {
      backgroundColor: theme.color.monoA50,
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.color.monoA75,
    },
    '&:active': {
      backgroundColor: theme.color.monoA150,
    },
    '&.Mui-selected': {
      backgroundColor: 'inherit',
      '&:hover': {
        backgroundColor: theme.color.monoA50,
      },
      '> *': {
        zIndex: 3,
      },
      '&:before': {
        backgroundColor: theme.color.secondaryA100,
      },
    },
  },
}));

export const StyledMenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme, color }) => ({
  '&.MuiMenuItem-root': {
    position: 'relative',
    transition: 'background-color 0.1s ease-out',
    color: color ? theme.color[color as Color] : 'inherit',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      inset: 0,
      transition: 'background-color 0.1s ease-out',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    '&:hover': {
      backgroundColor: theme.color.monoA50,
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.color.monoA75,
    },
    '&:active': {
      backgroundColor: theme.color.monoA150,
    },
    '&.Mui-selected': {
      backgroundColor: 'inherit',
      '&:hover': {
        backgroundColor: theme.color.monoA50,
      },
      '> *': {
        zIndex: 3,
      },
      '&:before': {
        backgroundColor: theme.color.secondaryA100,
      },
    },
  },
}));
