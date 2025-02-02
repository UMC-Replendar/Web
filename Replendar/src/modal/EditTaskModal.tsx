import React, { useState } from 'react';
import styled from 'styled-components';
import LockIcon from '../assets/images/LockIcon.svg';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';

export const SmallToggleSwitch = styled(ToggleSwitch)`
  transform: scale(0.8);
`;

interface TaskData {
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
}

interface EditTaskModalProps {
  task: TaskData;
  onClose: () => void;
  onComplete: () => void;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 23px;
  font-weight: 600;
  font-family: Pretendard;
  color: black;
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: Pretendard;
  color: #666666;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-grow: 1;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #cacaca;
  border-radius: 5px;
  font-size: 16px;
  font-family: Pretendard;
  color: #666666;
`;

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AlarmSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const MemoTextarea = styled.textarea`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #cacaca;
  border-radius: 5px;
  font-size: 16px;
  font-family: Pretendard;
  color: #666666;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  cursor: pointer;
  width: 80px;
  text-align: center;
`;

const DeleteButton = styled(Button)`
  background: none;
  border: 1px solid #eb8a8a;
  color: #eb8a8a;
`;

const EditButton = styled(Button)`
  background: none;
  border: 1px solid #666666;
  color: #666666;
`;

const CompleteButton = styled(Button)`
  background: none;
  border: 1px solid #2bae66;
  color: #2bae66;
`;

const AlarmButton = styled.button`
  color: #666666;
  border-radius: 5px;
  border: 1px #e8e8e8 solid;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  cursor: pointer;
`;
const GapBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  onClose,
  onComplete,
}) => {
  const [deadline, setDeadline] = useState(task.deadline.split('T')[0]);
  const [time, setTime] = useState(task.deadline.split('T')[1]);
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(task.isToggled);
  const [memo, setMemo] = useState('');

  return (
    <ModalWrapper>
      {/* 헤더 */}
      <Header>
        <TitleSection>
          <span>{task.name}</span>
          <img src={LockIcon} alt="Lock Icon" width={18} />
        </TitleSection>
        <img src={BookmarkIcon} alt="Bookmark Icon" width={18} />
      </Header>

      {/* 과제 마감일 */}
      <LabelGroup>
        <Label>과제 마감일</Label>
        <InputGroup>
          <Input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </InputGroup>
      </LabelGroup>
      <GapBox>
        {/* 알람 설정 */}
        <AlarmContainer>
          <Label>알람 설정</Label>
          <div style={{ transform: 'scale(0.5)', display: 'inline-block' }}>
            <SmallToggleSwitch
              isOn={isAlarmEnabled}
              onToggle={() => setIsAlarmEnabled(!isAlarmEnabled)}
            />
          </div>
        </AlarmContainer>

        {/* 알람 주기 설정 */}
        <AlarmContainer>
          <Label>알람 주기 설정</Label>
          <AlarmSettings>
            <AlarmButton>3회</AlarmButton>
            <AlarmButton>24시간 전</AlarmButton>
            <AlarmButton>10시간 전</AlarmButton>
            <AlarmButton>1시간 전</AlarmButton>
          </AlarmSettings>
        </AlarmContainer>

        {/* 메모 입력 */}
        <Label>메모</Label>
        <MemoTextarea
          placeholder="메모를 입력하세요..."
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </GapBox>

      {/* 버튼 그룹 */}
      <ButtonGroup>
        <DeleteButton>과제 삭제</DeleteButton>
        <EditButton>정보 수정</EditButton>
        <CompleteButton
          onClick={(e) => {
            e.stopPropagation(); // 이벤트 버블링 방지
            onComplete();
            onClose();
          }}
        >
          과제 완료
        </CompleteButton>
      </ButtonGroup>
    </ModalWrapper>
  );
};

export default EditTaskModal;
