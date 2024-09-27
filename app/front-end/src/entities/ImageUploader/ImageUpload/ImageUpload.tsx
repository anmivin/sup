import { ChangeEventHandler, useCallback, useRef, useState } from 'react';

import { uploadFileConfig } from '@helpers/files';
import { CircularProgress } from '@mui/material';

import { CameraPlusIcon } from '@assets/icons';

import { AddImageContainer, Circle, ExistImageContainer } from './ImageUpload.styled';

import { ImageUploadProps } from './ImageUpload.types';

const ImageUpload = ({ onImageAdd, value, type }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const onFileUpload = useCallback(async (file: File) => {
    try {
      let fd = new FormData();
      fd.append('file', file);

      const image = await onImageAdd(fd, type, uploadFileConfig(setUploadProgress));
      if (image) {
        setImg(image.url);
      }
    } catch (e) {
      console.log('drawer', e);
    }
  }, []);

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImg(file);
      onFileUpload(file);
    }
  }, []);

  return (
    <>
      <CircularProgress value={uploadProgress} />
      {value ? (
        <ExistImageContainer $img={value /*  ? value : URL.createObjectURL(img!) */}>
          <Circle />
        </ExistImageContainer>
      ) : (
        <AddImageContainer onClick={() => inputRef.current?.click()}>
          <input
            type="file"
            ref={inputRef}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            accept=".png,.jpeg,.jpg"
          />
          <CameraPlusIcon width={60} height={60} color="textMain" />
        </AddImageContainer>
      )}
    </>
  );
};

export default ImageUpload;
