import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Color, ColorOptions } from '@theme/theme.types';

import { ButtonSize, buttonSizeMap } from './Button.constants';

const getEventsColors = (color: ColorOptions, colorName: Color = 'secondaryMain', variant = '') => {
  const postFix = variant === 'contained' ? ':before' : '';
  return {
    [`&:focus-visible${postFix}`]: {
      backgroundColor: color[colorName],
    },
    [`&:hover${postFix}`]: {
      backgroundColor: color[colorName],
    },
    [`&:active${postFix}`]: {
      backgroundColor: color[colorName],
    },
  };
};

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  ...theme.typography.button,
  gap: theme.spacing(1),
  alignSelf: 'center',
  ...getEventsColors(theme.color),

  '&.MuiButton-root[disabled]': {
    backgroundColor: 'transparent',
    color: theme.color.monoA400,
  },
  '&.MuiButton-sizeXxl': {
    height: buttonSizeMap[ButtonSize.xxl],
    minWidth: buttonSizeMap[ButtonSize.xxl],
    padding: theme.spacing(0, 4),
  },
  '&.MuiButton-sizeXl': {
    height: buttonSizeMap[ButtonSize.xl],
    minWidth: buttonSizeMap[ButtonSize.xl],
    padding: theme.spacing(0, 3),
  },
  '&.MuiButton-sizeLarge': {
    height: buttonSizeMap[ButtonSize.large],
    minWidth: buttonSizeMap[ButtonSize.large],
    padding: theme.spacing(0, 2),
  },
  '&.MuiButton-sizeMedium': {
    height: buttonSizeMap[ButtonSize.medium],
    minWidth: buttonSizeMap[ButtonSize.medium],
    padding: theme.spacing(0, 1),
  },
  '&.MuiButton-sizeSmall': {
    height: buttonSizeMap[ButtonSize.small],
    minWidth: buttonSizeMap[ButtonSize.small],
    ...theme.typography.body1,
    padding: theme.spacing(0, 0.5),
  },
  '&.MuiButton-outlined': {
    color: theme.color.monoA700,
    border: `1px solid ${theme.color.monoA200}`,
    ...getEventsColors(theme.color),

    '.MuiTouchRipple-root': {
      borderRadius: 3,
    },
    '&Primary': {
      color: theme.color.primary,
      ...getEventsColors(theme.color, 'primary'),
    },
    '&Secondary': {
      color: theme.color.secondary,
      ...getEventsColors(theme.color, 'secondary'),
    },
    '&Error': {
      color: theme.color.error,
      ...getEventsColors(theme.color, 'error'),
    },
    '&Success': {
      color: theme.color.success,
      ...getEventsColors(theme.color, 'success'),
    },
    // '&Info': {
    //   color: theme.color.info,
    //   ...getEventsColors(theme.color, 'info'),
    // },
    // fix outlined button padding
    // - 0.25 = 1px - border width size
    '&.MuiButton-sizeXxl': {
      padding: theme.spacing(0, 4 - 0.25),
    },
    '&.MuiButton-sizeXl': {
      padding: theme.spacing(0, 3 - 0.25),
    },
    '&.MuiButton-sizeLarge': {
      padding: theme.spacing(0, 2 - 0.25),
    },
    '&.MuiButton-sizeMedium': {
      padding: theme.spacing(0, 1 - 0.25),
    },
    '&.MuiButton-sizeSmall': {
      padding: theme.spacing(0, 0.25),
    },
  },
  '&.MuiButton-text': {
    ...getEventsColors(theme.color),

    '&Primary': {
      color: theme.color.primary,
      ...getEventsColors(theme.color, 'primary'),
    },
    '&Secondary': {
      color: theme.color.secondary,
      ...getEventsColors(theme.color, 'secondary'),
    },
    '&Error': {
      color: theme.color.error,
      ...getEventsColors(theme.color, 'error'),
    },
    '&Success': {
      color: theme.color.success,
      ...getEventsColors(theme.color, 'success'),
    },
    '&.MuiButton-sizeXxl, &.MuiButton-sizeXl': {
      padding: theme.spacing(0, 3),
    },
  },
  '&.MuiButton-contained': {
    boxShadow: 'none',
    color: theme.color.monoA900,
    backgroundColor: theme.color.monoA100,
    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      inset: 0,
      transition: 'background-color 0.1s ease-out',
      borderRadius: 4,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
    ...getEventsColors(theme.color, 'black', 'contained'),
    '&Primary': {
      color: theme.color.monoB,
      backgroundColor: theme.color.primary,
      ...getEventsColors(theme.color, 'white', 'contained'),
    },
    '&Secondary': {
      color: theme.color.monoA800,
      backgroundColor: theme.color.secondary,
      ...getEventsColors(theme.color, 'black', 'contained'),
    },
    '&Error': {
      color: theme.color.monoB,
      backgroundColor: theme.color.error,
      ...getEventsColors(theme.color, 'white', 'contained'),
    },
    '&Success': {
      color: theme.color.monoB,
      backgroundColor: theme.color.success,
      ...getEventsColors(theme.color, 'white', 'contained'),
    },
    '&[disabled]': {
      backgroundColor: rgbaFromHex(theme.color.monoA, '75'),
      color: theme.color.monoA400,
      transition: 'background-color 0.3s ease-out',
      ':before': {
        display: 'none',
      },
    },
  },
  '& > span.buttonContentWrapper': {
    padding: theme.spacing(0, 1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '&.MuiButton-sizeSmall > span.buttonContentWrapper': {
    padding: theme.spacing(0, 0.5),
  },
}));

export const StyleddButton = styled(MuiButton)`
  color: ${({ theme }) => theme.color.textMain};
  &.skewed {
    background-color: ${({ theme }) => theme.color.primaryMain};
    box-shadow: ${({ theme }) => `0px 0px 8px 0px ${theme.color.secondaryMain}`};
    &:hover {
      box-shadow: ${({ theme }) => `inset 0px 0px 4px 0px ${theme.color.secondaryMain}`};
      background-color: ${({ theme }) => theme.color.primaryMain};
    }

    padding: 0 20px;
    height: 40px;
    transform: skewX(-30deg);
    border-radius: 0px;

    > * {
      transform: skewX(30deg);
    }
  }

  &.underscored {
    border-bottom: ${({ theme }) => `2px solid ${theme.color.textMain}`};
    border-radius: 0px;
    padding: 16px 0;
    height: 20px;
    line-height: 1em;
  }
`;
