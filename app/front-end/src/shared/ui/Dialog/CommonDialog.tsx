import { ReactNode } from 'react';

import { DialogProps } from './Dialog.types';

import Dialog from './Dialog';
import { DialogContent } from './DialogContent';

export interface CommonDialogProps extends Omit<DialogProps, 'content' | 'children'> {
  content?: string | ReactNode;
}

export const CommonDialog = ({ content, onClose, ...rest }: CommonDialogProps) => {
  return (
    <Dialog {...rest} onClose={onClose}>
      {content && <DialogContent>{content}</DialogContent>}
    </Dialog>
  );
};
