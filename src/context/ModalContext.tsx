import { Modal, ModalProps } from '@cloudscape-design/components';
import * as React from 'react';

interface ModalContextType {
  modal: null | ModalProps;
  setModal: (modal: Omit<ModalProps, 'onDismiss' | 'visible'>) => void;
  clearModal: () => void;
}

type ModalProviderProps = { children: React.ReactNode };

const ModalContext = React.createContext<undefined | ModalContextType>(
  undefined
);

function ModalProvider({ children }: ModalProviderProps) {
  const [modal, _setModal] = React.useState<ModalProps | null>(null);

  const setModal = React.useCallback(
    (modal: Omit<ModalProps, 'onDismiss' | 'visible'>) => {
      _setModal({ ...modal, onDismiss: () => _setModal(null), visible: true });
    },
    []
  );

  const clearModal = React.useCallback(() => {
    _setModal(null);
  }, []);

  const value = { modal, setModal, clearModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a CountProvider');
  }
  return context;
}

export { ModalProvider, useModal };
