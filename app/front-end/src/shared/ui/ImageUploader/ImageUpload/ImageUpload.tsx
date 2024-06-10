import { ChangeEventHandler, useCallback, useRef, useState } from 'react';

import { AddImageContainer, Circle, ExistImageContainer } from './ImageUpload.styled';

import { ImageUploadProps } from './ImageUpload.types';

import { CameraPlusIcon } from '../../Icons';

const ImageUpload = ({ onImageAdd, value }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File | null>(null);
  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImg(file);
      onImageAdd(file);
    }
  }, []);

  return (
    <>
      {value || img ? (
        <ExistImageContainer $img={value ? value : URL.createObjectURL(img!)}>
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
          <CameraPlusIcon size={60} color="textMain" />
        </AddImageContainer>
      )}
    </>
  );
};

export default ImageUpload;
