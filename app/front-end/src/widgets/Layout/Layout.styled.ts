import { Box, styled } from '@mui/material';

export const ContentBox = styled(Box)<{ $noHeader?: boolean }>`
  height: ${({ $noHeader }) => $noHeader && '100vh'};
  margin: ${({ $noHeader }) => ($noHeader ? '0px' : '16px')};
  padding-top: ${({ $noHeader }) => ($noHeader ? '0px' : '60px')};
`;
