import { Checkbox as MuiCheckbox } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';

import { CheckboxProps, CheckboxSizeKey, CheckboxVariantKey } from './Checkbox.types';

import { CheckboxSize, CheckboxVariant, DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from './Checkbox.constants';

const getSizeStyles = (size: CheckboxSizeKey) => {
  switch (size) {
    case CheckboxSize.small:
      return {
        fontSize: 16,
      };
    case CheckboxSize.large:
      return {
        fontSize: 24,
      };
    case CheckboxSize.medium:
    default:
      return { fontSize: 20 };
  }
};

const getVariantStyles = (theme: Theme, variant: CheckboxVariantKey, error?: boolean) => {
  const errorStyles = {
    '&:hover': {
      backgroundColor: theme.color.errorA50,
    },
    '&:active': {
      backgroundColor: theme.color.errorA150,
    },
    '&.Mui-focused': {
      backgroundColor: theme.color.errorA200,
    },
    '.checkboxIcon': {
      borderColor: theme.color.error,
    },
  };

  const hybridStyles = {
    ...(error
      ? errorStyles
      : {
          '&:hover': {
            backgroundColor: theme.color.monoA50,
            '.checkboxIcon': {
              color: variant === 'hybrid' ? theme.color.monoA400 : 'transparent',
              borderColor: theme.color.monoA500,
            },
          },
          '&:active': {
            backgroundColor: theme.color.monoA150,

            '.checkboxIcon': {
              color: variant === 'hybrid' ? theme.color.monoA600 : 'transparent',
              borderColor: theme.color.monoA600,
            },
          },
          '&.Mui-focused': {
            backgroundColor: theme.color.monoA200,

            '.checkboxIcon': {
              borderColor: theme.color.monoA600,
            },
          },
          '&.Mui-checked': {
            '.checkboxIcon': {
              color: theme.color.monoB,
              borderColor: 'transparent',
              backgroundColor: theme.color.secondary,
            },
            '&:hover': {
              backgroundColor: theme.color.secondaryA50,
            },
            '&:active': {
              backgroundColor: theme.color.secondaryA150,
            },
            '&.Mui-focused': {
              backgroundColor: theme.color.secondaryA200,
            },
          },
        }),
  };

  switch (variant) {
    case CheckboxVariant.hybrid:
      return hybridStyles;
    case CheckboxVariant.bold:
      return {
        ...hybridStyles,
        '.checkboxIcon': {
          // @ts-expect-error: hybridStyles may not have ".checkboxIcon"
          ...(hybridStyles['.checkboxIcon'] || {}),
          borderWidth: 2,
          '> svg': {
            margin: -3,
          },
        },
      };
    case CheckboxVariant.light:
    default:
      return {
        ...(error
          ? errorStyles
          : {
              '&:hover': {
                backgroundColor: theme.color.monoA50,
                '.checkboxIcon': {
                  color: theme.color.monoA400,
                  borderColor: theme.color.monoA500,
                },
              },
              '&:active': {
                backgroundColor: theme.color.monoA150,
                '.checkboxIcon': {
                  color: theme.color.monoA600,
                  borderColor: theme.color.monoA600,
                },
              },
              '&.Mui-focused': {
                backgroundColor: theme.color.monoA200,
                '.checkboxIcon': {
                  borderColor: theme.color.monoA600,
                },
              },
              '&.Mui-checked': {
                '.checkboxIcon': {
                  color: theme.color.secondary,
                },
                '&:hover': {
                  color: theme.color.secondaryA600,
                  backgroundColor: theme.color.secondaryA50,
                },
                '&:active': {
                  color: theme.color.secondaryA500,
                  backgroundColor: theme.color.secondaryA150,
                  '.checkboxIcon': {
                    borderColor: theme.color.monoA600,
                  },
                },
                '&.Mui-focused': {
                  backgroundColor: theme.color.secondaryA200,
                  '.checkboxIcon': {
                    borderColor: theme.color.monoA600,
                  },
                },
              },
            }),
      };
  }
};

export const StyledCheckbox = styled(MuiCheckbox)<CheckboxProps>(
  ({ theme, variant = DEFAULT_CHECKBOX_VARIANT, error, size = DEFAULT_CHECKBOX_SIZE }) => ({
    ...getSizeStyles(size),
    ...getVariantStyles(theme, variant, error),
    padding: 8,
    transition: 'background-color 0.2s ease-out',
    '&.Mui-disabled': {
      opacity: 0.3,
    },
  }),
);

export const StyledCheckboxIcon = styled('div')(({ theme }) => ({
  display: 'block',
  width: 'calc(1em - 2px)',
  height: 'calc(1em - 2px)',
  margin: 1,
  color: 'transparent',
  backgroundColor: 'transparent',
  border: `1px solid ${theme.color.monoA500}`,
  borderRadius: 4,
  transition: 'background-color 0.2s ease-out, border-color 0.2s ease-out',

  '> svg': {
    display: 'block',
    margin: -2,
    width: '1em',
    height: '1em',
    fontSize: '1em',
    transition: 'color 0.2s ease-out',
    stroke: 'currentColor',
    fill: 'none',
    path: {
      transition: 'd 0.1s',
      d: indeterminate ? "path('M6 10L9 10L14 10')" : "path('M6 9.5L9 12.5L14 7.5')",
    },
  },
}));
