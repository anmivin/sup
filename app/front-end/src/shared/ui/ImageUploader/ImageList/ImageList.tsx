import { Box, Button, CircularProgress } from '@mui/material';

import { ImageListContainer, ImagePreview } from './ImageList.styled';

import { ImageListProps } from './ImageList.types';

import { CloseIcon } from '../../Icons';

const ImageList = <ImageData,>({ imageList, onImageRemove, onImageClick }: ImageListProps<ImageData>) => {
  return (
    <>
      {!!imageList.length && (
        <ImageListContainer>
          {imageList.map((item) => (
            <ImagePreview
              key={item.key}
              onClick={() => onImageClick?.(item)}
              $img={item.file && URL.createObjectURL(item.file)}
            >
              <Box display="flex" gap={0.5} alignItems="center">
                {item.uploadProgress !== undefined ? (
                  <CircularProgress
                    variant={item.uploadProgress === 0 ? 'indeterminate' : 'determinate'}
                    value={item.uploadProgress * 100}
                    size={20}
                    color="secondary"
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
                      <CloseIcon size={20} />
                    </Button>
                  )
                )}
              </Box>
            </ImagePreview>
          ))}
        </ImageListContainer>
      )}
    </>
  );
};

export default ImageList;
