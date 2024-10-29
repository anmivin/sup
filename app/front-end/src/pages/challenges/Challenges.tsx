import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';
import { AxiosProgressEvent } from 'axios';
import { uniqueId } from 'lodash';

import EditImageModal from '@features/EditImageModal';

import DrawLayout from '@entities/DrawLayout';
import { ImageDrop, ImageList } from '@entities/ImageUploader';
import { ImageItem } from '@entities/ImageUploader/ImageUploader.types';

const Challenges = () => {
  const [files, setFiles] = useState<ImageItem[]>([]);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<string | null>(null);
  const onAdd = useCallback((files: File[]) => {
    setFiles((prev) => [...prev, ...files.map((val) => ({ file: val, key: uniqueId(), uploadProgress: 0.7 }))]);
  }, []);

  return (
    <>
      <DrawLayout sizes={{ x: 20, y: 30 }} />
      <ImageDrop onFilesAdd={onAdd} />
      <ImageList imageList={files} /* onImageRemove={() => {}} */ onImageClick={() => setOpen(true)} />
      {!!files.length && (
        <EditImageModal setImg={setImg} open={open} onClose={() => setOpen(false)} image={files[0].file} />
      )}
    </>
  );
};
export default Challenges;
