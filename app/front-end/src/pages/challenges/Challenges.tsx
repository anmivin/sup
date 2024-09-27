import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';
import { AxiosProgressEvent } from 'axios';
import { uniqueId } from 'lodash';

import EditImageModal from '@features/EditImageModal';

import DrawLayout from '@entities/DrawLayout';
import { ImageDrop, ImageList, ImageUpload } from '@entities/ImageUploader';
import { ImageItem } from '@entities/ImageUploader/ImageUploader.types';

import { TreeStore } from '@stores/Tree/Tree.store';

const Challenges = () => {
  const { t } = useTranslation(['achievements']);
  const { saveImageDebug } = TreeStore();
  const [files, setFiles] = useState<ImageItem[]>([]);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState<string | null>(null);
  const onAdd = useCallback((files: File[]) => {
    setFiles((prev) => [...prev, ...files.map((val) => ({ file: val, key: uniqueId(), uploadProgress: 0.7 }))]);
  }, []);
  const onUploadProgress = useCallback(
    (fileKey: string) => (progressEvent: AxiosProgressEvent) => {
      const { loaded, total } = progressEvent;
      if (!total) return;
      const progress = Math.floor((loaded / total) * 100);
      setFiles((prev) =>
        prev.map((item) =>
          item.key === fileKey
            ? {
                ...item,
                uploadProgress: progress,
              }
            : item,
        ),
      );

      if (loaded == total) {
        setFiles((prev) =>
          prev.map((item) =>
            item.key === fileKey
              ? {
                  ...item,
                  uploadProgress: 100,
                }
              : item,
          ),
        );
      }
    },
    [],
  );
  const onFileUpload = useCallback(async (file: File) => {
    const fileKey = uniqueId();
    setFiles((prev) => [...prev, { file: file, uploadProgress: 0, key: fileKey }]);
    const config = {
      onUploadProgress: onUploadProgress(fileKey),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      let fd = new FormData();
      fd.append('file', file);
      saveImageDebug(fd, config);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <>
      <DrawLayout sizes={{ x: 20, y: 30 }} />
      <ImageUpload
        value={img}
        onImageAdd={(files) => {
          onFileUpload(files[0]);
        }}
      />
      <ImageDrop onFilesAdd={onAdd} />
      <ImageList imageList={files} /* onImageRemove={() => {}} */ onImageClick={() => setOpen(true)} />
      {!!files.length && (
        <EditImageModal setImg={setImg} open={open} onClose={() => setOpen(false)} image={files[0].file} />
      )}
    </>
  );
};
export default Challenges;
