export interface ImageItem {
  file: File;
  key: string;
  uploadProgress?: number;
}

export interface ImageSchema {
  expire?: number;
  file_name: string;
  file_path: string;
  file_type: string;
  id: number;
  size: number;
}

export interface UseImageUploaderProps {
  onFileAdd?: (
    fileItem: ImageItem,
    onUploadProgress?: (event: ProgressEvent) => void,
  ) => Promise<ImageItem | undefined>;
  onFileRemove?: (fileItem: ImageItem) => void | Promise<void>;
  defaultFiles?: ImageItem[];
}

export type CustomFileSchema = {
  [k: string]: string | number;
} & ImageSchema;

export interface ImageUploaderProps {
  sendData: (file: File, onUploadProgress?: (e: ProgressEvent) => void) => Promise<CustomFileSchema>;
  onFileClick?: (fileItem: ImageItem) => void;
  onFileRemove?: (fileItem: ImageItem) => void;
  onChange?: (value: Array<ImageItem>) => void;
  value: Array<ImageItem>;
  showFileList?: boolean;
  showFileUploader?: boolean;
  fileFormats?: string[];
}
