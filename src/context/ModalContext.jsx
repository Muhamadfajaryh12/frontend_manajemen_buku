import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const openModal = (value) => {
    setOpen(true);
    setContent(value);
  };
  const closeModal = () => {
    setOpen(false);
    setContent(null);
  };
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center "
          onClick={closeModal}
        >
          {content}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
