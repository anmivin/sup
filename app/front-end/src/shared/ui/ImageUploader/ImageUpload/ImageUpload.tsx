import { ChangeEventHandler, useCallback, useRef, useState } from 'react';

import { CameraPlusIcon } from '@assets/icons';

import { AddImageContainer, Circle, ExistImageContainer } from './ImageUpload.styled';

import { ImageUploadProps } from './ImageUpload.types';

const ImageUpload = ({ onImageAdd, value }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File | null>(null);
  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      /*       setImg(file); */
      onImageAdd([file]);
    }
  }, []);

  return (
    <>
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
