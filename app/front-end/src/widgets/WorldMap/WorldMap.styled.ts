import { styled } from '@mui/material';

export const StyledSvgPath = styled('path')<{ $selected: boolean }>`
  cursor: pointer;
  fill: blue;
  fill-opacity: ${({ $selected }) => ($selected ? 0.44 : 0.16)};
  stroke: green;
  stroke-width: ${({ $selected }) => ($selected ? 4 : 2)};
  stroke-opacity: ${({ $selected }) => ($selected ? 1 : 0.6)};
  stroke-dasharray: 4 4;
`;
