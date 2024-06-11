import { DefaultModalProps } from '@ui/DefaultModal';

export interface EditImageModalProps extends Omit<DefaultModalProps, 'children'> {
  image: File;
  setImg: (url: string) => void;
}
