import { styled } from '@mui/material';

import { Color } from '@theme/index';

export const StyledSvg = styled('svg')<{ $filledIcon?: boolean; $color?: Color }>`
  fill: ${({ theme, $filledIcon, $color }) => ($filledIcon ? theme.color[$color ?? 'primaryMain'] : 'none')};
  stroke: ${({ theme, $color }) => theme.color[$color ?? 'primaryMain']};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
