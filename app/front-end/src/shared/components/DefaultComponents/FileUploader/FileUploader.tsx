import { ForwardedRef, ReactElement, forwardRef, useCallback, useEffect, useRef } from 'react';
import { FieldValue } from 'react-hook-form';

import Box from '@components/DefaultComponents/Box';
import { CommonDialog } from '@components/DefaultComponents/Dialog';
import { useModal } from '@components/DefaultComponents/ModalProvider';
import { Notify } from '@components/DefaultComponents/Notify';
import Snackbar, { SnackbarProps } from '@components/DefaultComponents/Snackbar';

import { CustomFileSchema, FileItem, FileSchema, FileUploaderProps, UploaderFileItem } from './FileUploader.types';

import FileDropZone from './FileDropZone/FileDropZone';
import FileList from './FileList/FileList';
import { DEFAULT_MAX_UPLOAD_FILE_SIZE_MB } from './FileUploader.constants';
import useFileUploader, { generateKey } from './useFileUploader';

const showBanner = ({ ...args }: SnackbarProps) => {
  Notify.action.show?.({
    content: <Snackbar {...args} />,
    duration: 3,
  });
};

const extensionRegex = /\.?([a-z]+)$/i;

export const FileUploader = forwardRef(
  <T extends CustomFileSchema>(
    {
      sendData,
      onChange,
      onFileClick,
      onFileRemove,
      value,
      error,
      showFileList = true,
      showFileUploader = true,
      maxFileSize = DEFAULT_MAX_UPLOAD_FILE_SIZE_MB,
      fileFormats,
      maxFilesCount,
      ...rest
    }: FileUploaderProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { openModal } = useModal();

    // valueRef - быстрый костыль. Наверное нужно другое решение, хотя текущее вполне рабочее.
    // Если вернуть value вместо valueRef.current, то при загрузке нескольких файлов, в форму добавляется один, т.к. value устаревает
    const valueRef = useRef<FileItem<T>[]>([]);

    const displayModal = useCallback(
      (title: string, content: string) => {
        openModal(CommonDialog, { title, content });
      },
      [openModal],
    );

    const handleOnFileAdd = useCallback(
      async (fileItem: UploaderFileItem<T>, onUploadProgress?: (e: ProgressEvent) => void) => {
        const fileSizeLimitMB = maxFileSize * 1024 * 1024;
        const { properties } = fileItem;
        const extension = fileItem.properties.name.match(extensionRegex)?.[1].toLowerCase();

        if (properties.size > fileSizeLimitMB) {
          displayModal('Превышен размер файла', `Приложите файл размеров не более ${maxFileSize} мегабайт`);
          return;
        }
        if (fileFormats?.length && extension && !fileFormats.some((format) => format === extension)) {
          displayModal(
            'Формат файла не соответствует требованиям',
            `Приложите файлы в форматах ${fileFormats.join(', ')}`,
          );
          return;
        }
        if (maxFilesCount && valueRef.current.length > maxFilesCount) {
          displayModal('Превышено допустимое количество файлов', `Приложите не более ${maxFilesCount} файлов`);
          return;
        }
        try {
          const fileData = await sendData(fileItem.file, onUploadProgress);
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
          } as UploaderFileItem<T>;
        } catch (e) {
          console.warn('error', e);
          showBanner({ text: 'Ошибка загрузки файла', color: 'error' });
        }
      },
      [maxFileSize, fileFormats, maxFilesCount, sendData, openModal, valueRef, showBanner],
    );
    const { files, handleFilesAdd, handleFileRemove } = useFileUploader({
      onFileAdd: handleOnFileAdd,
      onFileRemove: (fileItem) => {
        onFileRemove?.(fileItem);
        onChange?.(
          valueRef.current.filter(({ key }) => key !== generateKey(fileItem.properties.name, fileItem.properties.size)),
        );
      },
      externalFiles: value,
    });

    useEffect(() => {
      valueRef.current = value;
    }, [value]);

    return (
      <Box display="flex" flexDirection="column" gap={4} ref={ref} {...rest}>
        {showFileUploader && (
          <FileDropZone onFilesAdd={handleFilesAdd} maxFileSize={maxFileSize} fileFormats={fileFormats} error={error} />
        )}

        {showFileList && <FileList files={files} onFileRemove={handleFileRemove} onFileClick={onFileClick} />}
      </Box>
    );
  },
) as <T extends FieldValue<FileSchema>>(
  p: FileUploaderProps<T> & { ref: ForwardedRef<HTMLDivElement> },
) => ReactElement;

export default FileUploader;
