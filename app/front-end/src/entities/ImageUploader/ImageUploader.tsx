import { ForwardedRef, ReactElement, forwardRef, useCallback, useEffect, useRef } from 'react';
import { FieldValue } from 'react-hook-form';

import { Box } from '@mui/material';

import { CustomFileSchema, ImageItem, ImageSchema, ImageUploaderProps } from './ImageUploader.types';

import FileDropZone from './ImageDrop/ImageDrop';
import FileList from './ImageList/ImageList';
import useFileUploader, { generateKey } from './useImageUploader';

export const ImageUploader = forwardRef(
  <T extends CustomFileSchema>(
    {
      sendData,
      onChange,
      onFileClick,
      onFileRemove,
      value,
      showFileList = true,
      showFileUploader = true,
      fileFormats,
      ...rest
    }: ImageUploaderProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    // Если вернуть value вместо valueRef.current, то при загрузке нескольких файлов, в форму добавляется один, т.к. value устаревает
    const valueRef = useRef<ImageItem<T>[]>([]);

    const handleOnFileAdd = useCallback(
      async (fileItem: ImageItem<T>, onUploadProgress?: (e: ProgressEvent) => void) => {
        try {
          const fileData = fileItem.file && (await sendData(fileItem.file, onUploadProgress));
          fileData &&
            onChange?.([
              ...valueRef.current,
              {
                fileData: fileData as T,
                properties: {
                  name: fileData.file_name,
                  size: fileData.size,
                },
                key: generateKey(fileItem.properties.name, fileItem.properties.size),
              },
            ]);

          return {
            ...fileItem,
            fileData,
            uploadProgress: undefined,
          } as ImageItem<T>;
        } catch (e) {
          console.warn('error', e);
        }
      },
      [fileFormats, sendData, valueRef],
    );
    const { files, handleFilesAdd, handleFileRemove } = useFileUploader({
      onFileAdd: handleOnFileAdd,
      onFileRemove: (fileItem) => {
        onFileRemove?.(fileItem);
        onChange?.(
          valueRef.current.filter(({ key }) => key !== generateKey(fileItem.properties.name, fileItem.properties.size)),
        );
      },
      defaultFiles: value,
    });

    useEffect(() => {
      valueRef.current = value;
    }, [value]);

    return (
      <Box display="flex" flexDirection="column" gap={4} ref={ref} {...rest}>
        {showFileUploader && <FileDropZone onFilesAdd={handleFilesAdd} />}

        {showFileList && <FileList imageList={files} onFileRemove={handleFileRemove} onFileClick={onFileClick} />}
      </Box>
    );
  },
) as <T extends FieldValue<ImageSchema>>(
  p: ImageUploaderProps<T> & { ref: ForwardedRef<HTMLDivElement> },
) => ReactElement;

export default ImageUploader;
