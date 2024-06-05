export interface PhotoUploadProps {
  onFilesAdd: (files: File[]) => void;
  error?: boolean;
}
