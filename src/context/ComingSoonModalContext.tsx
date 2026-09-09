import React, { createContext, useContext, useState } from 'react';
import { ComingSoonModal } from '../components/ComingSoonModal';

interface ComingSoonModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ComingSoonModalContext = createContext<ComingSoonModalContextType | undefined>(undefined);

export const ComingSoonModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ComingSoonModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ComingSoonModal isOpen={isOpen} onClose={closeModal} />
    </ComingSoonModalContext.Provider>
  );
};

export const useComingSoonModal = (): ComingSoonModalContextType => {
  const context = useContext(ComingSoonModalContext);
  if (!context) {
    throw new Error('useComingSoonModal must be used within a ComingSoonModalProvider');
  }
  return context;
};
