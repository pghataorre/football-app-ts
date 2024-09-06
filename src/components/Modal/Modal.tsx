import CloseIcon from '../Icons/CloseIcon';
import './Modal.scss';
import { ModalContext } from '../../context/ModalProvider/modalContext';
import { useContext } from 'react';

type TModaProps = {
    children?: undefined | string | JSX.Element | JSX.Element[];
  }


const Modal = ({children}: TModaProps) => {
  const {setModalToggle} = useContext(ModalContext);

  const closeModal = () => {
    setModalToggle(false);
  };


  return (
    <div className="modal-container">
        <button onClick={closeModal}>
            <CloseIcon />
        </button>
        {children}
    </div>
  );
}

export default Modal;
