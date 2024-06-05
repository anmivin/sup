export interface FileDropZoneProps {
  onFilesAdd: (files: File[]) => void;
  error?: boolean;
  fileFormats?: string[];
}
