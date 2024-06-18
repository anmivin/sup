import { ForwardedRef, forwardRef } from 'react';

import { Box } from '@mui/material';

import { CloseIcon } from '@assets/icons';

import { ModalContent, ModalHeader, StyledIconButton, StyledModal } from './Modal.styled';

import { DefaultModalProps } from './Modal.types';

const DefaultModal = forwardRef(
  ({ open, onClose, header, children, ...rest }: DefaultModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledModal ref={ref} open={open} onClose={onClose} {...rest}>
        <ModalContent>
          <ModalHeader>
            <Box>{header}</Box>
            <StyledIconButton onClick={(e) => onClose?.(e, 'backdropClick')}>
              <CloseIcon />
            </StyledIconButton>
          </ModalHeader>

          {children}
        </ModalContent>
      </StyledModal>
    );
  },
);

DefaultModal.displayName = 'DefaultModal';
export default DefaultModal;
