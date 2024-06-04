import { FC, ReactNode } from 'react';

import Button, { ButtonProps } from '@components/DefaultComponents/Button';

import { DialogProps } from './Dialog.types';

import Dialog from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogContent } from './DialogContent';
import { DialogTitle } from './DialogTitle';

export interface CommonDialogProps extends Omit<DialogProps, 'content' | 'children'> {
  title?: string;
  content?: string | ReactNode;
  actions?: ButtonProps[];
}

export const CommonDialog: FC<CommonDialogProps> = ({ content, title, actions, onClose, ...rest }) => {
  return (
    <Dialog {...rest} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      <DialogActions>
        {actions ? (
          actions.map((item, i) => <Button {...item} key={item.key || i} />)
        ) : (
          <Button variant="contained" color="primary" onClick={onClose}>
            Закрыть
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
