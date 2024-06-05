import { ChangeEventHandler, DragEventHandler, useCallback, useRef, useState } from 'react';

import clsx from 'clsx';

import { CameraPlusIcon } from '@components/Icons';

import { DragAndDropZone } from './PhotoUpload.styled';

import { PhotoUploadProps } from './PhotoUpload.types';

const PhotoUpload = ({ onFilesAdd, error }: PhotoUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDrop = useCallback<DragEventHandler<HTMLButtonElement>>((event) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      onFilesAdd(Array.from(event.dataTransfer.files));
    }

    setIsDraggedOver(false);
  }, []);

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      onFilesAdd(Array.from(event.target.files));
    }
  }, []);

  return (
    <DragAndDropZone
      type="button"
      onClick={() => inputRef.current?.click()}
      className={clsx(isDraggedOver && 'drag-over', error && 'error')}
    >
      <input
        value=""
        type="file"
        ref={inputRef}
        multiple
        onChange={handleInputChange}
        style={{ display: 'none' }}
        accept=".png,.jpeg,.jpg"
      />
      <CameraPlusIcon size={60} color="textPrimary" />
    </DragAndDropZone>
  );
};

export default PhotoUpload;
