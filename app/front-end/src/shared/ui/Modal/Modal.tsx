import { ForwardedRef, forwardRef } from 'react';

import { StyledModal } from './Modal.styled';
import { ModalProps } from './Modal.types';

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, ...rest }: ModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <StyledModal
        {...rest}
        data-test-id="Modal"
        componentsProps={{
          root: {
            ref,
          },
        }}
      >
        {children}
      </StyledModal>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
