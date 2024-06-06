import { Box, styled } from '@mui/material';

export const ImageListContainer = styled(Box)``;

export const ImagePreview = styled(Box)<{ $img?: string }>`
  background-image: ${({ $img }) => `url(${$img})`};
`;
