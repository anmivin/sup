import { Components } from '@mui/material/styles';
import { ColorOptions } from 'ui/theme/theme.types';

import { typography } from './typography';

export const commonComponents = (color: ColorOptions): Components => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
        lineHeight: '22px',
      },
      asterisk: {
        color: color.error,
      },
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: -9,
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiToggleButton: {
    defaultProps: {
      size: 'medium',
    },
    styleOverrides: {
      root: {
        color: color.monoA600,
        overflow: 'hidden',
        borderColor: '#e0e0e0',
        transition: 'background-color 0.1s ease-out',
        '&.Mui-selected': {
          color: color.monoA900,
          backgroundColor: color.monoA100,
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      startIcon: {
        marginLeft: 0,
        marginRight: 0,
      },
      endIcon: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        overflow: 'visible',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        '.MuiChip-root': {
          ...typography.subtitle1,
          height: 24,
          color: color.monoA900,

          '.MuiChip-label': {
            padding: '0 8px',
          },
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
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
          backgroundColor: color.monoA50,
        },
        '&.Mui-focusVisible': {
          backgroundColor: color.monoA75,
        },
        '&:active': {
          backgroundColor: color.monoA150,
        },
        '&.Mui-selected': {
          backgroundColor: 'inherit',
          '&:hover': {
            backgroundColor: color.monoA50,
          },
          '> *': {
            zIndex: 3,
          },
          '&:before': {
            backgroundColor: color.secondaryA100,
          },
        },
      },
    },
  },
});

export default commonComponents;
