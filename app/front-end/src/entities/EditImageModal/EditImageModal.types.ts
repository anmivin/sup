import { DefaultModalProps } from '@ui/Modal';

export interface EditImageModalProps extends Omit<DefaultModalProps, 'children'> {
  image: File;
  setImg: (url: string) => void;
}
