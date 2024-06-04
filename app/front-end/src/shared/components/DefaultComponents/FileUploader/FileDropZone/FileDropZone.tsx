import { ChangeEventHandler, DragEventHandler, useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';
import clsx from 'clsx';

import { fileFormatToMimeType } from '@components/DefaultComponents/FileUploader/FileDropZone/FileDropZone.constants';
import { useAutoRef } from '@components/DefaultComponents/hooks/useAutoRef';
import { UploadIcon } from '@components/Icons';

import { DragAndDropZone, FileDropZoneLabel } from './FileDropZone.styled';

import { FileDropZoneProps } from './FileDropZone.types';

const FileDropZone = ({ onFilesAdd, fileFormats, error }: FileDropZoneProps) => {
  const { t } = useTranslation();
  const refedProps = useAutoRef({
    onFilesAdd,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedFileFormats = useMemo(() => fileFormats?.map((format) => fileFormatToMimeType[format]), [fileFormats]);

  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDrop = useCallback<DragEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault();
      if (event.dataTransfer.files) {
        refedProps.current.onFilesAdd(Array.from(event.dataTransfer.files));
      }

      setIsDraggedOver(false);
    },
    [refedProps],
  );

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      if (event.target.files) {
        refedProps.current.onFilesAdd(Array.from(event.target.files));
      }
    },
    [refedProps],
  );

  return (
    <DragAndDropZone
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragEnter={() => setIsDraggedOver(true)}
      onDragLeave={() => setIsDraggedOver(false)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
      className={clsx(isDraggedOver && 'drag-over', error && 'error')}
    >
      <input
        value=""
        type="file"
        ref={inputRef}
        multiple
        onChange={handleInputChange}
        style={{ display: 'none' }}
        accept={
          acceptedFileFormats && acceptedFileFormats.length > 0 ? [...new Set(acceptedFileFormats)].join(',') : ''
        }
      />

      <FileDropZoneLabel>
        <UploadIcon />
        <Typography color="primary" variant="button" textTransform="none">
          Выберите файлы
        </Typography>
      </FileDropZoneLabel>

      <Typography>или перетащите файлы в эту область</Typography>
    </DragAndDropZone>
  );
};

export default FileDropZone;
