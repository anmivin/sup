export interface ImageItem<T> {
  fileData?: T;
  file?: File;
  properties: {
    name: string;
    size: number;
  };
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

export interface UseImageUploaderProps<ImageData> {
  onFileAdd?: (
    fileItem: ImageItem<ImageData>,
    onUploadProgress?: (event: ProgressEvent) => void,
  ) => Promise<ImageItem<ImageData> | undefined>;
  onFileRemove?: (fileItem: ImageItem<ImageData>) => void | Promise<void>;
  defaultFiles?: ImageItem<ImageData>[];
}

export type CustomFileSchema = {
  [k: string]: string | number;
} & ImageSchema;

export interface ImageUploaderProps<T> {
  sendData: (file: File, onUploadProgress?: (e: ProgressEvent) => void) => Promise<CustomFileSchema>;
  onFileClick?: (fileItem: ImageItem<T>) => void;
  onFileRemove?: (fileItem: ImageItem<T>) => void;
  onChange?: (value: Array<ImageItem<T>>) => void;
  value: Array<ImageItem<T>>;
  showFileList?: boolean;
  showFileUploader?: boolean;
  fileFormats?: string[];
}
