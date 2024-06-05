import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import { Theme } from '@components/DefaultComponents/theme';

import { TooltipProps } from './Tooltip.types';

const getTooltipColor = ({ theme }: { theme: Theme }) => {
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
};

export const StyledTooltip = styled(({ children, className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }}>
    {children}
  </MuiTooltip>
))(({ theme }) => ({
  // Стили цвета
  ...getTooltipColor({ theme }),

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
