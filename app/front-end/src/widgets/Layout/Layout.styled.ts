import { Box, styled } from '@mui/material';

export const ContentBox = styled(Box)`
  margin: 16px;
  padding-top: 60px;
  &.isError {
    height: 100vh;
    margin: 0px;
    padding-top: 0px;
  }
`;
