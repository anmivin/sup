import { ImageItem } from '@entities/ImageUploader/ImageUploader.types';

export interface ImageListProps {
  imageList: ImageItem[];
  onImageRemove?: (props: ImageItem) => void;
  onImageClick?: (props: ImageItem) => void;
}
