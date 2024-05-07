import { FC, useCallback, useContext } from 'react';

import { ModalContext, NecessarilyModalProps } from '@front/helpers/ModalProvider';

const useModal = () => {
  const modalContext = useContext(ModalContext);
  const show = useCallback(
    <T extends NecessarilyModalProps>(Component: FC<T>, props: Omit<T, keyof NecessarilyModalProps>) => {
      return new Promise((resolve) => {
        modalContext.openModal<T>({ component: Component, props, resolve });
      });
    },
    [modalContext],
  );
  return { show };
};

export default useModal;
