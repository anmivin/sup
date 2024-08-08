import { Chip as MuiChip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChip = styled(MuiChip)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  alignSelf: 'flex-start',
  ...theme.typography.body1,

  '&:active': { boxShadow: 'none' },

  // Child items
  '.MuiChip-label': {
    maxWidth: 330,
  },
  '.MuiChip-icon': {
    color: theme.color.monoA500,
    width: 20,
    height: 20,
    marginLeft: 2,
    marginRight: -2,
  },
  '.MuiChip-avatar': {
    width: 20,
    height: 20,
    marginLeft: 2,
    marginRight: -2,
  },
  '.MuiChip-deleteIcon': {
    color: theme.color.monoA500,
    marginLeft: -4,
    marginRight: 2,
    transition: 'color 0.1s ease-out',
    flexShrink: 0,

    '&:hover': {
      color: theme.color.monoA600,
    },
    '&:focused': {
      color: theme.color.monoA700,
    },
    '&:active': {
      color: theme.color.monoA800,
    },
  },

  // Sizes
  '&.MuiChip-sizeSmall': {
    height: 24,
    minWidth: 24,

    '.MuiChip-label': {
      padding: '0 8px',
    },
  },

  '&.MuiChip-sizeMedium': {
    height: 32,
    minWidth: 32,

    '.MuiChip-label': {
      padding: '0 12px',
    },

    '.MuiChip-avatar': {
      width: 24,
      height: 24,
      marginLeft: 4,
      marginRight: -4,
    },

    '.MuiChip-icon': {
      width: 24,
      height: 24,
      marginLeft: 4,
      marginRight: -4,
    },
    '.MuiChip-deleteIcon': {
      marginLeft: -6,
      marginRight: 6,
    },
  },

  '&.MuiChip-sizeLarge': {
    height: 40,
    minWidth: 40,
    borderRadius: 20,

    '.MuiChip-label': {
      padding: '0 12px',
    },

    '.MuiChip-avatar': {
      width: 32,
      height: 32,
      marginLeft: 4,
      marginRight: -4,
    },

    '.MuiChip-icon': {
      width: 32,
      height: 32,
      marginLeft: 4,
      marginRight: -4,
    },

    '.MuiChip-deleteIcon': {
      marginLeft: -6,
      marginRight: 10,
    },
  },

  // Filled colors
  '&.MuiChip-filled': {
    '&.MuiChip-clickable': theme.hoverEffects({ withBeforeElement: true }),

    '&Default': {
      color: theme.color.monoA900,
      backgroundColor: theme.color.monoA75,
      '&.Mui-selected': {
        backgroundColor: theme.color.secondaryA300,
      },
    },
    '&Secondary': {
      color: theme.color.monoA800,
    },
    '&Primary': {
      color: theme.color.monoB,
    },
    '&Error': {
      color: theme.color.monoB,
    },
    '&Success': {
      color: theme.color.monoB,
    },
    '&Warning': {
      color: theme.color.monoB,
    },
    '&Info': {
      color: theme.color.monoB,
    },
  },

  // Outlined colors
  '&.MuiChip-outlined': {
    '&.MuiChip-clickable': theme.hoverEffects({ withBeforeElement: true }),

    '&Default': {
      color: theme.color.monoA900,
      borderColor: theme.color.monoA150,
      '&.Mui-selected': {
        backgroundColor: theme.color.secondaryA300,
      },
    },
  },
}));
