import React from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';
import ModalPortal from './modalPortal';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const ModalContent = styled.div`
  background: #fff;

  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 400px;
  max-width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;

const Modal: React.FC = () => {
  const { isOpen, modalContent, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <ModalPortal>
      <Overlay onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>X</CloseButton>
          {modalContent}
        </ModalContent>
      </Overlay>
    </ModalPortal>
  );
};

export default Modal;
