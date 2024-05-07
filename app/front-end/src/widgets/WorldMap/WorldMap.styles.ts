import { Box, styled } from '@mui/material';

export const StyledSvgPath = styled('path')<{ isSelected: boolean }>`
  cursor: pointer;
  fill: blue;
  fill-opacity: ${({ isSelected }) => (isSelected ? '0.44' : '0.16')};
  stroke: green;
  stroke-width: ${({ isSelected }) => (isSelected ? '4' : '2')};
  stroke-opacity: ${({ isSelected }) => !isSelected && '0.6'};
  stroke-dasharray: ${({ isSelected }) => !isSelected && '4 4'};
`;
