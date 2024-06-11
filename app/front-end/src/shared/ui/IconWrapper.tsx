import { HTMLAttributes, ReactNode } from 'react';

import { styled } from '@mui/material/styles';

import { Color } from '@theme/index';

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  viewBox?: string;
  color?: Color;
  isLineIcon?: boolean;
  children?: ReactNode;
}

const IconWrapper = ({ width = 24, height = 24, viewBox = '0 0 24 24', color, children, ...rest }: IconProps) => {
  return (
    <StyledSvg {...rest} width={width} height={height} viewBox={viewBox} color={color}>
      {children}
    </StyledSvg>
  );
};

const StyledSvg = styled('svg')<IconProps>`
  ${({ theme, isLineIcon, color }) => {
    const cssColor = color ? theme.color[color] : 'currentColor';

    return `
          fill: ${isLineIcon ? 'none' : cssColor};
          stroke: ${cssColor};
          stroke-width: 2;
        `;
  }}
`;

export default IconWrapper;
