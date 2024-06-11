import { Box, styled } from '@mui/material';

export const ImageListContainer = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ImageContainer = styled(Box)`
  display: grid;
  place-items: center;
  width: 120px;
  height: 120px;
  border: 4px solid ${({ theme }) => theme.color.textMain};
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;
`;

export const ImagePreview = styled(Box)<{ $img?: string; $uploading?: boolean }>`
  width: 100%;
  height: 100%;
  background-image: ${({ $img }) => `url(${$img})`};
  background-position: center center;
  background-size: cover;
  filter: ${({ $uploading }) => $uploading && 'blur(2px)'};
`;
