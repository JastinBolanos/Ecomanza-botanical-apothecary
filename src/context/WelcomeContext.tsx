import React, { createContext, useContext, useState } from 'react';

interface WelcomeContextType {
  showWelcome: boolean;
  openWelcome: () => void;
  closeWelcome: () => void;
}

const WelcomeContext = createContext<WelcomeContextType | undefined>(undefined);

export const WelcomeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search.includes('welcome')) {
        return true;
      }
      return !sessionStorage.getItem('ecomanza_welcomed_v2');
    } catch {
      return true;
    }
  });

  const openWelcome = () => {
    setShowWelcome(true);
  };

  const closeWelcome = () => {
    setShowWelcome(false);
    try {
      sessionStorage.setItem('ecomanza_welcomed_v2', 'true');
    } catch {
      // ignore
    }
  };

  return (
    <WelcomeContext.Provider value={{ showWelcome, openWelcome, closeWelcome }}>
      {children}
    </WelcomeContext.Provider>
  );
};

export const useWelcome = (): WelcomeContextType => {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error('useWelcome must be used within a WelcomeProvider');
  }
  return context;
};
