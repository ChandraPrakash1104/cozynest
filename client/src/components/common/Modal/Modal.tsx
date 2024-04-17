import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay';
import BackDrop from '../Backdrop/Backdrop';

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
      {createPortal(<BackDrop onClick={onClick} />, portalElement)}
    </>
  );
};

export default Modal;
