import { ChangeEventHandler, useCallback, useRef, useState } from 'react';

import { CameraPlusIcon } from '@components/Icons';

import { AddPhotoContainer, ExistPhotoContainer } from './PhotoUpload.styled';

import { PhotoUploadProps } from './PhotoUpload.types';

const PhotoUpload = ({ onFilesAdd, value }: PhotoUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File | null>(null);
  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      const files = event.target.files[0];
      console.log(files);
      setImg(files);
      /*       onFilesAdd(Array.from(event.target.files)); */
    }
  }, []);

  return (
    <>
      {img ? (
        <ExistPhotoContainer $img={URL.createObjectURL(img)} />
      ) : (
        <AddPhotoContainer onClick={() => inputRef.current?.click()}>
          <input
            type="file"
            ref={inputRef}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            accept=".png,.jpeg,.jpg"
          />
          <CameraPlusIcon size={60} color="textMain" />
        </AddPhotoContainer>
      )}
    </>
  );
};

export default PhotoUpload;
