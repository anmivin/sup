export interface FileDropZoneProps {
  onFilesAdd: (files: File[]) => void;
  maxFileSize?: number;
  error?: boolean;
  fileFormats?: string[];
}
