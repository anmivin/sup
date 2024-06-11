import { ForwardedRef, forwardRef } from 'react';

import { Box } from '@mui/material';

import { CloseIcon } from '@ui/Icons';

import { ModalContent, ModalHeader, StyledIconButton, StyledModal } from './DefaultModal.styled';

import { DefaultModalProps } from './DefaultModal.types';

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
