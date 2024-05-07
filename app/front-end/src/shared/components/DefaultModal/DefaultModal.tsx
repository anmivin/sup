import { ForwardedRef, forwardRef } from 'react';

import { Box } from '@mui/material';

import { ModalContent, StyledModal } from './DefaultModal.styled';

import { DefaultModalProps } from './DefaultModal.types';

const DefaultModal = forwardRef(
  ({ open, onClose, children, ...rest }: DefaultModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledModal ref={ref} open={open} onClose={onClose} {...rest}>
        <ModalContent>
          <Box>header</Box>

          {children}
        </ModalContent>
      </StyledModal>
    );
  },
);

DefaultModal.displayName = 'DefaultModal';
export default DefaultModal;
