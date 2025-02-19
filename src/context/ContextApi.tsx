// context/ContextApi.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Tipni aniqlash
interface ModalContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Kontekstni yaratish
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// ModalProvider komponenti
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
