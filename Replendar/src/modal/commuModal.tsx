import React from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #faf9f9;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 500px;
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

const CommuModal: React.FC = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <Overlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>X</CloseButton>
        {content}tq rmslrK dlrp ansirh
      </ModalContent>
    </Overlay>
  );
};

export default CommuModal;
