import { ChangeEventHandler, useCallback, useRef } from 'react';

import { CameraPlusIcon } from '@components/Icons';

import { AddPhotoContainer, ExistPhotoContainer } from './PhotoUpload.styled';

import { PhotoUploadProps } from './PhotoUpload.types';

const PhotoUpload = ({ onFilesAdd, value }: PhotoUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      onFilesAdd(Array.from(event.target.files));
    }
  }, []);

  return (
    <>
      {value ? (
        <ExistPhotoContainer />
      ) : (
        <AddPhotoContainer type="button" onClick={() => inputRef.current?.click()}>
          <input
            value=""
            type="file"
            ref={inputRef}
            multiple
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
