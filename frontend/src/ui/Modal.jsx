import { createContext, useState, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import PropTypes from 'prop-types'


const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

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

  return <div className="fixed inset-0 z-50 flex items-center justify-center">
  <div
    className="fixed inset-0 backdrop-blur-[2px]"
    onClick={onClose}
  ></div>
  <div className="relative z-50 rounded-lg shadow-lg ">
    {children}
  </div>
  <button
      className="absolute md:top-5 top-3 right-3 md:right-5 p-1 md:p-1.5 "
      onClick={onClose}
    >
        <RiCloseLargeLine className="w-7 h-7 " />
    </button>
</div>
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

ModalContext.propTypes={
    children: PropTypes.element
}
ModalProvider.propTypes={
    children: PropTypes.element
}
Modal.propTypes={
    children: PropTypes.element
}
ModalOverlay.propTypes={
    children: PropTypes.element,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
}
Window.propTypes={
    children: PropTypes.element,
    name: PropTypes.string
}

export { ModalProvider, useModalContext, Modal };


// import { useState } from "react";
// import { createPortal } from "react-dom";
// import { RiCloseLargeLine } from "react-icons/ri";

// const Modal = ({ children, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div>
//       {createPortal(
//         <div className="inset-0 h-screen w-screen fixed flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-black opacity-50 backdrop-blur-[1px]"
//             onClick={onClose}
//           ></div>
//           <div className="bg-transparent relative z-50 p-4 w-[40%]">
//             {children}
//           </div>
//           <button
//             className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 "
//             onClick={onClose}
//           >
//             <RiCloseLargeLine className="w-7 h-7 " />
//           </button>
//         </div>,
//         document.body
//       )}
//     </div>
//   );
// };

// export default Modal;
