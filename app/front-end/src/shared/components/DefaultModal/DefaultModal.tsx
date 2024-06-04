import { ForwardedRef, forwardRef } from 'react';

import { Box } from '@mui/material';

import { CloseIcon } from '@components/Icons';

import { ModalContent, StyledIconButton, StyledModal } from './DefaultModal.styled';

import { DefaultModalProps } from './DefaultModal.types';

const DefaultModal = forwardRef(
  ({ open, onClose, children, ...rest }: DefaultModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledModal ref={ref} open={open} onClose={onClose} {...rest}>
        <ModalContent>
          <StyledIconButton onClick={onClose}>
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
