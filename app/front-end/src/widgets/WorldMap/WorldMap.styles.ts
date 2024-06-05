import { styled } from '@mui/material';

export const StyledSvgPath = styled('path')`
  cursor: pointer;
  fill: blue;
  fill-opacity: 0.16;
  stroke: green;
  stroke-width: 2;
  stroke-opacity: 0.6;
  stroke-dasharray: 4 4;
  .isSelected {
    fill-opacity:0.44;
    stroke-width: 4
    stroke-opacity: 1;

  }
`;
