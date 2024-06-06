import { Box, styled } from '@mui/material';

export const HelpBox = styled(Box)`
  background-color: ${({ theme }) => theme.color.primaryMain};
  color: ${({ theme }) => theme.color.textLight};
  height: 30px;
  width: 200px;
  transform: skewX(-28deg);
  position: relative;
  right: -8px;
`;

export const Divider = styled(Box)`
  background-color: black;
  color: ${({ theme }) => theme.color.textLight};
  height: 30px;
  width: 200px;
  transform: skewX(-28deg);
  position: relative;
  right: -8px;
`;

export const RawBox = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const Rect = styled(Box)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.color.textMain};
  z-index: 3;
`;
