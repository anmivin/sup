import { ContextMenuItemProps } from '@components/ContextMenu/ContextMenu.types';
import { FileItem } from '@components/DefaultComponents/FileUploader/FileUploader.types';

export interface FileListProps<TFileData> {
  files: FileItem<TFileData>[];
  onFileRemove?: (fileItem: FileItem<TFileData>) => void;
  onFileClick?: (fileItem: FileItem<TFileData>) => void;
  itemActions?: FileListItemAction<TFileData>[];
}

export interface FileListItemAction<TFileData> extends Omit<ContextMenuItemProps, 'onClick'> {
  onClick: (fileItem: FileItem<TFileData>) => void;
}
