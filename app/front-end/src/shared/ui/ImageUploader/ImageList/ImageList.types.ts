import { ImageItem } from '@ui/ImageUploader/ImageUploader.types';

export interface ImageListProps<ImageData> {
  imageList: ImageItem<ImageData>[];
  onImageRemove?: (props: ImageItem<ImageData>) => void;
  onImageClick?: (props: ImageItem<ImageData>) => void;
}
