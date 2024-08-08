import { Radio as MuiRadio } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';

import { RadioProps, RadioSizeKey, RadioVariantKey } from './Radio.types';

import { DEFAULT_RADIO_SIZE, DEFAULT_RADIO_VARIANT, RadioSize, RadioVariant } from './Radio.constants';

const getSizeStyles = (size: RadioSizeKey) => {
  switch (size) {
    case RadioSize.small:
      return {
        fontSize: 16,
      };
    case RadioSize.large:
      return {
        fontSize: 24,
      };
    case RadioSize.medium:
    default:
      return { fontSize: 20 };
  }
};

const getVariantStyles = (theme: Theme, variant: RadioVariantKey, error?: boolean) => {
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
    '.RadioIcon': {
      borderColor: theme.color.error,
    },
  };

  const hybridStyles = {
    ...(error
      ? errorStyles
      : {
          '&:hover': {
            backgroundColor: theme.color.monoA150,
            '.RadioIcon': {
              color: variant === 'hybrid' ? theme.color.monoA600 : 'transparent',
              borderColor: theme.color.monoA600,
            },
          },
          '&:active': {
            backgroundColor: theme.color.monoA150,

            '.RadioIcon': {
              color: variant === 'hybrid' ? theme.color.monoA600 : 'transparent',
              borderColor: theme.color.monoA600,
            },
          },
          '&.Mui-focused': {
            backgroundColor: theme.color.monoA200,

            '.RadioIcon': {
              borderColor: theme.color.monoA600,
            },
          },
          '&.Mui-checked': {
            '.RadioIcon': {
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
    case RadioVariant.hybrid:
      return hybridStyles;
    case RadioVariant.bold:
      return {
        ...hybridStyles,
        '.RadioIcon': {
          // @ts-expect-error: hybridStyles may not have ".RadioIcon"
          ...(hybridStyles['.RadioIcon'] || {}),
          borderWidth: 2,
          '> svg': {
            margin: -3,
          },
        },
      };
    case RadioVariant.light:
    default:
      return {
        ...(error
          ? errorStyles
          : {
              '&:hover': {
                backgroundColor: theme.color.monoA150,
                '.RadioIcon': {
                  color: theme.color.monoA600,
                  borderColor: theme.color.monoA600,
                },
              },
              '&:active': {
                backgroundColor: theme.color.monoA150,
                '.RadioIcon': {
                  color: theme.color.monoA600,
                  borderColor: theme.color.monoA600,
                },
              },
              '&.Mui-focused': {
                backgroundColor: theme.color.monoA200,
                '.RadioIcon': {
                  borderColor: theme.color.monoA600,
                },
              },
              '&.Mui-checked': {
                '.RadioIcon': {
                  color: theme.color.secondary,
                },
                '&:hover': {
                  color: theme.color.secondaryA600,
                  backgroundColor: theme.color.secondaryA50,
                },
                '&:active': {
                  color: theme.color.secondaryA500,
                  backgroundColor: theme.color.secondaryA150,
                  '.RadioIcon': {
                    borderColor: theme.color.monoA600,
                  },
                },
                '&.Mui-focused': {
                  backgroundColor: theme.color.secondaryA200,
                  '.RadioIcon': {
                    borderColor: theme.color.monoA600,
                  },
                },
              },
            }),
      };
  }
};

export const StyledRadio = styled(MuiRadio)<RadioProps>(
  ({ theme, variant = DEFAULT_RADIO_VARIANT, error, size = DEFAULT_RADIO_SIZE }) => ({
    ...getSizeStyles(size),
    ...getVariantStyles(theme, variant, error),
    padding: 8,
    transition: 'background-color 0.2s ease-out',
    '&.Mui-disabled': {
      opacity: 0.3,
    },
  }),
);

export const StyledRadioIcon = styled('div')(({ theme }) => ({
  display: 'block',
  width: 'calc(1em - 2px)',
  height: 'calc(1em - 2px)',
  margin: 1,
  color: 'transparent',
  backgroundColor: 'transparent',
  border: `1px solid ${theme.color.monoA500}`,
  borderRadius: '50%',
  transition: 'background-color 0.2s ease-out, border-color 0.2s ease-out',

  '> svg': {
    display: 'block',
    margin: -2,
    width: '1em',
    height: '1em',
    fontSize: '1em',
    transition: 'color 0.2s ease-out',
    fill: 'currentColor',
    path: {
      transition: 'd 0.1s',
      d: "path('M6 10L9 10L14 10')",
    },
  },
}));
