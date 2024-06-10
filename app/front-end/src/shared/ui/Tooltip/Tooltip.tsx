import { ForwardedRef, forwardRef } from 'react';

import { StyledTooltip } from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';

export const Tooltip = forwardRef<unknown, TooltipProps>(
  ({ arrow = true, ...rest }: TooltipProps, ref: ForwardedRef<unknown>) => {
    return <StyledTooltip ref={ref} arrow={arrow} {...rest} />;
  }
);

Tooltip.displayName = 'Tooltip';
export default Tooltip;
