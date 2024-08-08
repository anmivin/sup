import { Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Color, ColorOptions } from '@theme/theme.types';

import { ButtonSize, ButtonVariant, buttonSizeMap } from './Button.constants';

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

const getButtonVariant = (variant: ButtonVariant, size: number) => {
  const theme = useTheme();
  switch (variant) {
    case ButtonVariant.skewed:
      return {
        height: `${size}60px`,
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
        '&:hover': {
          backgroundColor: theme.color.secondaryMain,
          boxShadow: `0 4px ${theme.color.textDark}`,
          transition: 'box-shadow 0.2s ease-out',
        },
      };
    case ButtonVariant.underscored:
      return {};
    case ButtonVariant.simple:
      return {};
  }
};

export const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  gap: theme.spacing(1),
  alignSelf: 'center',
  ...getEventsColors(theme.color),

  '&.MuiButton-root[disabled]': {
    backgroundColor: 'transparent',
    color: theme.color.mono400,
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
    color: theme.color.mono200,
    border: `1px solid ${theme.color.mono700}`,
    ...getEventsColors(theme.color),

    '.MuiTouchRipple-root': {
      borderRadius: 3,
    },

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

    '&.MuiButton-sizeXxl, &.MuiButton-sizeXl': {
      padding: theme.spacing(0, 3),
    },
  },
  '&.MuiButton-contained': {
    boxShadow: 'none',
    color: theme.color.mono200,
    backgroundColor: theme.color.mono100,
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

    '&[disabled]': {
      backgroundColor: theme.color.mono600,
      color: theme.color.mono400,
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

export const StyleddButton = styled(Button)`
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
