import { useEffect } from 'react';

import { Box, Button, CircularProgress } from '@mui/material';

import { CloseIcon } from '@assets/icons';

import { ImageContainer, ImageListContainer, ImagePreview } from './ImageList.styled';

import { ImageListProps } from './ImageList.types';

const ImageList = ({ imageList, onImageRemove, onImageClick }: ImageListProps) => {
  useEffect(() => {
    console.log('imageList', imageList);
  }, [imageList]);
  return (
    <>
      {!!imageList.length && (
        <ImageListContainer>
          {imageList.map((item) => (
            <ImageContainer key={item.key} onClick={() => onImageClick?.(item)}>
              <ImagePreview $img={URL.createObjectURL(item.file)} $uploading={item.uploadProgress !== undefined} />
              {item.uploadProgress !== undefined ? (
                <CircularProgress
                  variant={item.uploadProgress === 0 ? 'indeterminate' : 'determinate'}
                  value={item.uploadProgress * 100}
                  size={60}
                  color="secondary"
                  sx={{ position: 'absolute' }}
                />
              ) : (
                onImageRemove && (
                  <Button
                    sx={{
                      p: 0,
                    }}
                    size="small"
                    onClick={() => onImageRemove(item)}
                  >
                    <CloseIcon />
                  </Button>
                )
              )}
            </ImageContainer>
          ))}
        </ImageListContainer>
      )}
    </>
  );
};

export default ImageList;