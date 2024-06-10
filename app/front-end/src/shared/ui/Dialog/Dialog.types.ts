import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions';
import { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';
import { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';

export type DialogProps = Omit<MuiDialogProps, 'onClose'> & {
  onClose: (e?: object, reason?: 'backdropClick' | 'escapeKeyDown' | 'cancelButton' | 'actionButton') => void;
};

export type DialogActionsProps = MuiDialogActionsProps;
export type DialogContentProps = MuiDialogContentProps & {
  showScrollBorders?: boolean;
};
export type DialogTitleProps = MuiDialogTitleProps;

export type DialogContentImperativeHandler = HTMLDivElement & {
  checkBorders: () => void;
};
