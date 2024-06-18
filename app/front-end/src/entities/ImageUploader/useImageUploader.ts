import { useCallback, useEffect, useState } from 'react';

import { debounce, uniqBy } from 'lodash';

import { ImageItem, UseImageUploaderProps } from './ImageUploader.types';

export const generateKey = (name: string, size: number) => `${name}_${size}`;

const useImageUploader = <ImageData>({ onFileAdd, onFileRemove, defaultFiles }: UseImageUploaderProps<ImageData>) => {
  const [files, setFiles] = useState<ImageItem<ImageData>[]>([]);
  const handleProgressUpdate = useCallback(
    (fileItemKey: string) => (event: ProgressEvent) => {
      setFiles((prevState) =>
        prevState.map((fileItem) =>
          fileItem.key === fileItemKey
            ? {
                ...fileItem,
                uploadProgress: event.loaded / event.total,
              }
            : fileItem,
        ),
      );
    },
    [],
  );

  const handleFilesAdd = useCallback(
    async (addedFiles: File[]) => {
      const pendingFiles = addedFiles.map(
        (fileItem): ImageItem<ImageData> => ({
          file: fileItem,
          properties: {
            name: fileItem.name,
            size: fileItem.size,
          },
          key: generateKey(fileItem.name, fileItem.size),
          uploadProgress: 0,
        }),
      );

      setFiles((prevState) => uniqBy([...prevState, ...pendingFiles], (fileItem) => fileItem.key));

      if (onFileAdd) {
        try {
          const uploadPromises = pendingFiles.map(async (pendingFileItem) => {
            const newFileItem = await onFileAdd(pendingFileItem, debounce(handleProgressUpdate(pendingFileItem.key)));

            if (!newFileItem) {
              throw new Error('Ошибка загрузки файла');
            }

            setFiles((prevState) =>
              prevState.map((fileItem) => (fileItem.key === pendingFileItem.key ? newFileItem : fileItem)),
            );
          });

          await Promise.all(uploadPromises);
        } catch (e) {
          setFiles((prevState) => prevState.filter((fileItem) => pendingFiles.every((p) => p.key !== fileItem.key)));
        }
      }
    },
    [handleProgressUpdate, onFileAdd],
  );

  const handleFileRemove = useCallback(
    async (removedFileItem: ImageItem<ImageData>) => {
      await onFileRemove?.(removedFileItem);

      setFiles((prevState) => prevState.filter((fileItem) => removedFileItem.key !== fileItem.key));
    },
    [onFileRemove],
  );

  const updateFilesState = () => {
    setFiles((prevState) => {
      return uniqBy([...prevState, ...(defaultFiles ?? [])], (fileItem) => fileItem.key);
    });
  };

  useEffect(() => {
    updateFilesState();
  }, [defaultFiles]);

  return {
    files,
    handleFilesAdd,
    handleFileRemove,
    setFiles,
  };
};

export default useImageUploader;
