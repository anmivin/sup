import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import { Theme } from '@components/DefaultComponents/theme';

import { TooltipProps } from './Tooltip.types';

/** Функция получения стилей тултипа, исходя из пропса "color" */
const getTooltipColor = ({ theme, color }: { theme: Theme; color: TooltipProps['color'] }) => {
  switch (color) {
    case 'white':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.monoB,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoA900,
          backgroundColor: theme.color.monoB,
          boxShadow: '0px -0.5px 2px 1px rgba(0, 0, 0, 0.02)',
          filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.02)) drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.07))',
        },
      };
    case 'primary':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.primary,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.primary,
        },
      };
    case 'secondary':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.secondary,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoA900,
          backgroundColor: theme.color.secondary,
        },
      };
    case 'error':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.error,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.error,
        },
      };
    case 'warning':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.warning,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.warning,
        },
      };
    case 'success':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.success,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.success,
        },
      };
    case 'info':
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.info,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.info,
        },
      };
    case 'default':
    default:
      return {
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.color.monoA550,
          '&:before': {
            backdropFilter: 'blur(10px)',
          },
        },
        [`& .${tooltipClasses.tooltip}`]: {
          color: theme.color.monoB,
          backgroundColor: theme.color.monoA600,
          backdropFilter: 'blur(10px)',
        },
      };
  }
};

/** Стилизованный MUI тултип */
export const StyledTooltip = styled(({ color: _, children, className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }}>
    {children}
  </MuiTooltip>
))(({ theme, color }) => ({
  // если нужет zIndex, поробуйте этот
  // zIndex: 1070,

  // Стили цвета
  ...getTooltipColor({ theme, color }),

  // Стили текста
  [`.${tooltipClasses.tooltip}`]: theme.typography.caption,

  // Стили позиционирования
  [`& .${tooltipClasses.tooltipPlacementLeft}`]: {
    [`&.${tooltipClasses.tooltip}`]: {
      marginRight: 8,
    },
    [`.${tooltipClasses.arrow}:before`]: {
      borderRadius: '0 2px 0 0',
    },
  },
  [`& .${tooltipClasses.tooltipPlacementTop}`]: {
    [`&.${tooltipClasses.tooltip}`]: {
      marginBottom: 8,
    },
    [`.${tooltipClasses.arrow}:before`]: {
      borderRadius: '0 0 2px 0',
    },
  },
  [`& .${tooltipClasses.tooltipPlacementRight}`]: {
    [`&.${tooltipClasses.tooltip}`]: {
      marginLeft: 8,
    },
    [`.${tooltipClasses.arrow}:before`]: {
      borderRadius: '0 0 0 2px',
    },
  },
  [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
    [`&.${tooltipClasses.tooltip}`]: {
      marginTop: 8,
    },
    [`.${tooltipClasses.arrow}:before`]: {
      borderRadius: '2px 0 0 0',
    },
  },
}));
