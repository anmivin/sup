import { ForwardedRef, forwardRef } from 'react';

import { Box } from '@mui/material';

import { ModalContent, StyledIconButton, StyledModal } from './DefaultModal.styled';

import { DefaultModalProps } from './DefaultModal.types';

import { CloseIcon } from '../Icons';

const DefaultModal = forwardRef(
  ({ open, onClose, children, ...rest }: DefaultModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledModal ref={ref} open={open} onClose={onClose} {...rest}>
        <ModalContent>
          <StyledIconButton onClick={(e) => onClose?.(e, 'backdropClick')}>
            <CloseIcon />
          </StyledIconButton>
          <Box>header</Box>

          {children}
        </ModalContent>
      </StyledModal>
    );
  },
);

DefaultModal.displayName = 'DefaultModal';
export default DefaultModal;
