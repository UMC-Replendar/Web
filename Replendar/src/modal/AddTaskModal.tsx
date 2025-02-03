import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import GrayPlusIcon from '../assets/images/GrayPlusIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
import useTaskStore from '../store/useTaskStore';
import useModalStore from '../store/modalStore';
import SelectFriendsModal from './SelectFriendsModal';

const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 40px 8px 8px 8px;
  align-items: center;
  gap: 8px;
  height: auto;
  border-radius: 20px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const Modal = styled.div`
  display: flex;
  padding: 20px 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 51px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 8px 8px 8px 0px;
  align-items: center;
  gap: 8px;

  img {
    cursor: pointer;
  }
`;

const Title = styled.h4`
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  margin: 0;
`;

const ActionButton = styled.button`
  display: flex;
  padding: 6.5px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #666666;
  background: white;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
  align-self: stretch;
`;

const Label = styled.h5`
  color: #7e7f7f;
  font-size: 23px;
  font-weight: 500;
  line-height: 140%;
  margin: 0;
`;

const Input = styled.input`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: white;
  color: #666666;
  font-size: 19px;
  font-weight: 500;
  line-height: 140%;
`;

const TaskNameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 123px;
`;

const TaskDeadlineSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 77px;
  align-self: stretch;
`;

const OpenSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 111px;
  align-self: stretch;
`;

const OpenSettingButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OpenSettingButton = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  border: 1px solid ${({ isActive }) => (isActive ? '#666666' : '#d5d5d5')};
  background: white;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const AlertSettingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 83px;
`;

const SmallToggleSwitch = styled(ToggleSwitch)`
  transform: scale(0.8);
`;

const AlertCycleSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 62px;
`;

const AlertCycleSettingButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AlarmCycleSettingButton = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${({ isActive }) => (isActive ? '#666666' : '#e8e8e8')};
  background: none;
  color: #9a9a9a;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const ShareSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 85px;
  align-self: stretch;
`;

export const PlusFriendsButton = styled.button`
  display: flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid #666666;
  background: white;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const MemoSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 142px;
  align-self: stretch;
`;

const MemoInput = styled.textarea`
  align-self: stretch;
  flex-grow: 1;
  height: 295px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  background: white;
  font-size: 16px;
  font-weight: 500;
  resize: none;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  width: 100%;
`;

function AddTaskModal() {
  const { addTask } = useTaskStore();
  const { closeModal } = useModalStore();
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [time, setTime] = useState('');
  const [placeholderDate, setPlaceholderDate] = useState('');
  const [isPublic, setIsPublic] = useState<null | boolean>(null);
  const [isOn, setIsOn] = useState(false);
  const [alarmCount, setAlarmCount] = useState<number | null>(null);
  const [showFriendsModal, setShowFriendsModal] = useState(false);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setPlaceholderDate(`${year} / ${month} / ${day}`);
  }, []);

  const handleComplete = () => {
    if (!taskName.trim()) {
      alert('과제명을 입력해주세요.');
      return;
    }
    if (!deadline) {
      alert('마감일을 선택해주세요.');
      return;
    }
    addTask(taskName, deadline);
    closeModal();
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <TitleContainer>
            <Title>과제 추가하기</Title>
            <img src={BookmarkIcon} alt="Bookmark Icon" />
          </TitleContainer>

          <ActionButton>불러오기</ActionButton>
        </Header>

        <Section>
          <TaskNameSection>
            <Label>과제명</Label>
            <Input
              placeholder="과제 이름을 입력하세요"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </TaskNameSection>

          <TaskDeadlineSection>
            <Label>과제 마감일</Label>
            <Input
              type="text"
              value={deadline}
              placeholder={placeholderDate}
              onChange={(e) => setDeadline(e.target.value)}
              maxLength={10}
            />
            <Input
              type="text"
              value={time}
              placeholder="23:55"
              onChange={(e) => setTime(e.target.value)}
              maxLength={5}
            />
          </TaskDeadlineSection>
        </Section>

        <Section>
          <OpenSettingSection>
            <Label>공개 설정</Label>
            <OpenSettingButtonGroup>
              <OpenSettingButton
                isActive={isPublic === true}
                onClick={() => setIsPublic(true)}
              >
                <img src={UnLockIcon} alt="UnLock Icon" /> 공개
              </OpenSettingButton>
              <OpenSettingButton
                isActive={isPublic === false}
                onClick={() => setIsPublic(false)}
              >
                <img src={LockIcon} alt="Lock Icon" /> 비공개
              </OpenSettingButton>
            </OpenSettingButtonGroup>
          </OpenSettingSection>

          <AlertSettingSection>
            <Label>알림 설정</Label>
            <div style={{ transform: 'scale(0.5)', display: 'inline-block' }}>
              <SmallToggleSwitch isOn={isOn} onToggle={() => setIsOn(!isOn)} />
            </div>
          </AlertSettingSection>

          <AlertCycleSettingSection>
            <Label>알림 주기 설정</Label>
            <AlertCycleSettingButtonGroup>
              {[3, 24, 10, 1].map((count) => (
                <AlarmCycleSettingButton
                  key={count}
                  isActive={alarmCount === count}
                  onClick={() => setAlarmCount(count)}
                >
                  {count === 3 ? '3회' : `${count}시간 전`}
                </AlarmCycleSettingButton>
              ))}
            </AlertCycleSettingButtonGroup>
          </AlertCycleSettingSection>
        </Section>

        <ShareSection>
          <Label>공유할 친구</Label>
          <PlusFriendsButton onClick={() => setShowFriendsModal(true)}>
            <img src={GrayPlusIcon} alt="Gray Plus Icon" />
            추가
          </PlusFriendsButton>
        </ShareSection>

        {showFriendsModal && <SelectFriendsModal />}

        <MemoSection>
          <Label>메모</Label>
          <MemoInput />
        </MemoSection>

        <ActionButtons>
          <ActionButton>임시저장</ActionButton>
          <ActionButton onClick={closeModal}>수정</ActionButton>
          <ActionButton onClick={handleComplete}>완료</ActionButton>
        </ActionButtons>
      </Modal>
    </ModalOverlay>
  );
}

export default AddTaskModal;
