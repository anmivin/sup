import { BoxProps } from '@components/DefaultComponents/Box/Box.types';
import { WithRequired } from '@components/DefaultComponents/libs';

export interface FileItem<T> {
  fileData?: T;
  file?: File;
  properties: {
    name: string;
    size: number;
  };
  key: string;
  uploadProgress?: number;
}

export interface FileSchema {
  expire?: number;
  file_name: string;
  file_path: string;
  file_type: string;
  id: number;
  size: number;
}

export type UploaderFileItem<TFileData> = WithRequired<FileItem<TFileData>, 'file'>;

export interface UseFileUploaderParams<TFileData> {
  onFileAdd?: (
    fileItem: UploaderFileItem<TFileData>,
    onUploadProgress?: (event: ProgressEvent) => void,
  ) => Promise<UploaderFileItem<TFileData> | undefined>;
  onFileRemove?: (fileItem: FileItem<TFileData>) => void | Promise<void>;
  externalFiles?: FileItem<TFileData>[];
}

export type CustomFileSchema = {
  [k: string]: string | number;
} & FileSchema;

export interface FileUploaderProps<T> extends Omit<BoxProps, 'onChange'> {
  sendData: (file: File, onUploadProgress?: (e: ProgressEvent) => void) => Promise<CustomFileSchema>;
  onFileClick?: (fileItem: FileItem<T>) => void;
  onFileRemove?: (fileItem: FileItem<T>) => void;
  onChange?: (value: Array<FileItem<T>>) => void;
  value: Array<FileItem<T>>;
  showFileList?: boolean;
  showFileUploader?: boolean;
  maxFileSize?: number;
  maxFilesCount?: number;
  error?: boolean;
  fileFormats?: string[];
}
