// context/ContextApi.tsx
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Tipni aniqlash
interface ModalContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Kontekstni yaratish
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// ModalProvider komponenti
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);

  return (
    <ModalContext.Provider value={{ open, setOpen, collapsed, setCollapsed }}>
      {children}
    </ModalContext.Provider>
  );
};
