import styled from 'styled-components';
import { useState } from 'react';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 29px;
  color: black;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const Subtitle = styled.div`
  margin-bottom: 10px;
  color: #666666;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  line-height: 140%;
`;

const MemoInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 137px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 2px;
  border: 1px solid #cacaca;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  line-height: 140%;
  resize: none;
  outline: none;
`;

const CloseButton = styled.button`
  display: flex;
  padding: 8px 15px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #666666;
  margin-top: 50px;
  color: #666666;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  line-height: 140%;
  cursor: pointer;
`;

interface DemodayTaskModalProps {
  initialMemo: string;
  onSave: (memo: string) => void;
}

const DemodayTaskModal = ({ initialMemo, onSave }: DemodayTaskModalProps) => {
  const [memo, setMemo] = useState(initialMemo);

  return (
    <ModalWrapper>
      <Title>데모데이 과제</Title>
      <Subtitle>간단한 문제 (과제 내용)</Subtitle>
      <MemoInput
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="답 입력하는 영역"
      />
      <CloseButton onClick={() => onSave(memo)}>완료</CloseButton>
    </ModalWrapper>
  );
};

export default DemodayTaskModal;
