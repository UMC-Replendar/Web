import { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 345px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

const Title = styled.h5`
  margin-top: 0;
  margin-bottom: 34px;
  color: black;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

interface Assignment {
  id: number;
  name: string;
  deadline: string;
}

interface TaskDraftModalProps {
  onClose: () => void;
  onSelect: (assignment: Assignment) => void;
}

const TaskDraftModal = ({ onClose, onSelect }: TaskDraftModalProps) => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const handleAssignmentSelect = (assignment: Assignment) => {
    onSelect(assignment); // 선택한 과제 전달
    onClose(); // 모달 닫기
  };

  return (
    <ModalWrapper>
      <Title>임시저장된 과제</Title>
    </ModalWrapper>
  );
};

export default TaskDraftModal;
