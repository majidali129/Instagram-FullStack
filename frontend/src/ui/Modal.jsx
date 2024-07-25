import { createContext, useState, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import PropTypes from "prop-types";

const ModalContext = createContext();

const ModalProvider = ({ children, onClose, onOpen }) => {
  const [openName, setOpenName] = useState("");

  const close = () => {
    setOpenName("");
    onClose?.();
  };
  const open = (name) => {
    setOpenName(name);
    onOpen?.();
  };

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

const Modal = ({ children }) => {
  return <>{children}</>;
};

const ModalOverlay = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 backdrop-blur-[2px]"
        onClick={onClose}
      ></div>
      <div className="relative z-50 rounded-lg shadow-lg ">{children}</div>
      <button
        className="absolute md:top-5 top-3 right-3 md:right-5 p-1 md:p-1.5 "
        onClick={onClose}
      >
        <RiCloseLargeLine className="w-7 h-7 " />
      </button>
    </div>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useModalContext();
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useModalContext();
  if (name !== openName) return null;
  return createPortal(
    <ModalOverlay isOpen={true} onClose={close}>
      {cloneElement(children, { closeModal: close })}
    </ModalOverlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

ModalContext.propTypes = {
  children: PropTypes.element
};
ModalProvider.propTypes = {
  children: PropTypes.element,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
Modal.propTypes = {
  children: PropTypes.element
};
ModalOverlay.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};
Window.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string
};

export { ModalProvider, useModalContext, Modal };
