import { HTMLAttributes, ReactNode } from 'react';

import { styled } from '@mui/material/styles';

import { Color } from '@theme/index';

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  size?: number;
  viewBox?: string;
  color?: Color;
  isLineIcon?: boolean;
  responsive?: boolean;
  children?: ReactNode;
}

const IconWrapper = ({ size = 24, viewBox = '0 0 24 24', color, children, responsive, ...rest }: IconProps) => {
  return (
    <StyledSvg
      {...rest}
      width={responsive ? '100%' : size}
      height={responsive ? undefined : size}
      responsive={responsive}
      viewBox={viewBox}
      color={color}
    >
      {children}
    </StyledSvg>
  );
};

const StyledSvg = styled('svg')<IconProps>`
  ${({ theme, isLineIcon, color, responsive }) => {
    const cssColor = color ? theme.color[color] : 'currentColor';

    return `
          fill: ${isLineIcon ? 'none' : cssColor};
          stroke: ${cssColor};
          stroke-width: 2;
          max-height: ${responsive ? '100%' : ''};
        `;
  }}
`;

export default IconWrapper;
