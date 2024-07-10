import { ChangeEventHandler, DragEventHandler, useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import { UploadIcon } from '@assets/icons';

import { DropContainer } from './ImageDrop.styled';

import { ImageDropProps } from './ImageDrop.types';

const ImageDrop = ({ onFilesAdd }: ImageDropProps) => {
  const { t } = useTranslation('translation');

  const inputRef = useRef<HTMLInputElement>(null);

  const [isActive, setIsActive] = useState(false);

  const handleDrop = useCallback<DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      onFilesAdd(Array.from(event.dataTransfer.files));
    }
    setIsActive(false);
  }, []);

  const handleInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (event.target.files) {
      onFilesAdd(Array.from(event.target.files));
    }
  }, []);

  return (
    <DropContainer
      onClick={() => inputRef.current?.click()}
      onDragEnter={() => setIsActive(true)}
      onDragLeave={() => setIsActive(false)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
      $isActive={isActive}
    >
      <input type="file" ref={inputRef} multiple onChange={handleInputChange} style={{ display: 'none' }} />

      <Box display="flex" alignItems="center" gap={2}>
        <UploadIcon />
        <Typography>{t('data.forms.browse')}</Typography>
      </Box>

      <Typography> {t('data.forms.drag')}</Typography>
    </DropContainer>
  );
};

export default ImageDrop;
