import { useCallback, useEffect, useState } from 'react';

// eslint-disable-next-line import/named
import { debounce, uniqBy } from 'lodash';

import { FileItem, UploaderFileItem, UseFileUploaderParams } from './FileUploader.types';

export const generateKey = (name: string, size: number) => `${name}_${size}`;

const useFileUploader = <TFileData>({ onFileAdd, onFileRemove, externalFiles }: UseFileUploaderParams<TFileData>) => {
  const [files, setFiles] = useState<FileItem<TFileData>[]>([]);
  const handleProgressUpdate = useCallback(
    (fileItemKey: string) => (event: ProgressEvent) => {
      setFiles((prevState) =>
        prevState.map((fileItem) =>
          fileItem.key === fileItemKey
            ? {
                ...fileItem,
                uploadProgress: event.loaded / event.total,
              }
            : fileItem
        )
      );
    },
    []
  );

  const handleFilesAdd = useCallback(
    async (addedFiles: File[]) => {
      const pendingFiles = addedFiles.map(
        (fileItem): UploaderFileItem<TFileData> => ({
          file: fileItem,
          properties: {
            name: fileItem.name,
            size: fileItem.size,
          },
          key: generateKey(fileItem.name, fileItem.size),
          uploadProgress: 0,
        })
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
              prevState.map((fileItem) => (fileItem.key === pendingFileItem.key ? newFileItem : fileItem))
            );
          });

          await Promise.all(uploadPromises);
        } catch (e) {
          setFiles((prevState) => prevState.filter((fileItem) => pendingFiles.every((p) => p.key !== fileItem.key)));
        }
      }
    },
    [handleProgressUpdate, onFileAdd]
  );

  const handleFileRemove = useCallback(
    async (removedFileItem: FileItem<TFileData>) => {
      await onFileRemove?.(removedFileItem);

      setFiles((prevState) => prevState.filter((fileItem) => removedFileItem.key !== fileItem.key));
    },
    [onFileRemove]
  );

  const updateFilesState = () => {
    setFiles((prevState) => {
      return uniqBy([...prevState, ...(externalFiles ?? [])], (fileItem) => fileItem.key);
    });
  };

  useEffect(() => {
    updateFilesState();
  }, [externalFiles]);

  return {
    files,
    handleFilesAdd,
    handleFileRemove,
    setFiles,
  };
};

export default useFileUploader;
