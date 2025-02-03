import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
// import CalendarIcon from '../assets/images/CalendarIcon.svg';
import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import GrayPlusIcon from '../assets/images/GrayPlusIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
import useTaskStore from '../store/useTaskStore';
import useModalStore from '../store/modalStore';
import ModalPortal from './modalPortal';

const ModalOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 68px 28px 68px;
  gap: 51px;
  width: 84%;
  height: auto;
  background: #fcf6f5;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const SelectFriendsModal = styled.div`
  position: absolute;
  width: 452px;
  height: 461px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`;

const SelectFriendsModalTitle = styled.h5`
  font-size: 23px;
  font-weight: 600;
  margin: 24px 0 50px 24px;
`;

const FriendsList = styled.ul`
  display: flex;
  width: 392px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const FriendsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
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
`;

const TaskNameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 123px;
`;

const TaskDeadlineSection = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;
`;

const OpenSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 111px;
`;

const OpenSettingButton = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid ${({ isActive }) => (isActive ? '#666666' : '#d5d5d5')};
  background: white;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AlertSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 107px;
`;

const AlertCycleSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 62px;
`;

const AlarmCycleSettingButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0px 10px;
  border-radius: 5px;
  border: 1px solid ${({ isActive }) => (isActive ? '#666666' : '#e8e8e8')};
  background: none;
  color: #9a9a9a;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const ShareSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 85px;
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
  cursor: pointer;
`;

const MemoSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 142px;
  width: 100%;
`;

const MemoInput = styled.textarea`
  flex-grow: 1;
  height: 295px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  background: white;
  font-size: 16px;
  font-weight: 500;
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
  const [isPublic, setIsPublic] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [alarmCount, setAlarmCount] = useState(3);
  const [friendsPopupOpen, setFriendsPopupOpen] = useState(false);
  const [friends] = useState<string[]>([]);

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
    <ModalOverlay>
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
          <ButtonGroup>
            <OpenSettingButton
              isActive={isPublic}
              onClick={() => setIsPublic(true)}
            >
              <img src={UnLockIcon} alt="UnLock Icon" />
              공개
            </OpenSettingButton>
            <OpenSettingButton
              isActive={!isPublic}
              onClick={() => setIsPublic(false)}
            >
              <img src={LockIcon} alt="Lock Icon" />
              비공개
            </OpenSettingButton>
          </ButtonGroup>
        </OpenSettingSection>

        <AlertSettingSection>
          <Label>알림 설정</Label>
          <ToggleSwitch isOn={isOn} onToggle={() => setIsOn(!isOn)} />
        </AlertSettingSection>

        <AlertCycleSettingSection>
          <Label>알림 주기 설정</Label>
          <ButtonGroup>
            {[3, 24, 10, 1].map((count) => (
              <AlarmCycleSettingButton
                key={count}
                isActive={alarmCount === count}
                onClick={() => setAlarmCount(count)}
              >
                {count === 3 ? '3회' : `${count}시간 전`}
              </AlarmCycleSettingButton>
            ))}
          </ButtonGroup>
        </AlertCycleSettingSection>
      </Section>

      <ShareSection>
        <Label>공유할 친구</Label>
        <PlusFriendsButton onClick={() => setFriendsPopupOpen(true)}>
          <img src={GrayPlusIcon} alt="Gray Plus Icon" />
          추가
        </PlusFriendsButton>
      </ShareSection>

      {friendsPopupOpen && (
        <SelectFriendsModal>
          <SelectFriendsModalTitle>공유할 친구 선택</SelectFriendsModalTitle>
          <FriendsList>
            {friends.map((friend) => (
              <FriendsItem key={friend}></FriendsItem>
            ))}
          </FriendsList>
        </SelectFriendsModal>
      )}

      <MemoSection>
        <Label>메모</Label>
        <MemoInput />
      </MemoSection>

      <ActionButtons>
        <ActionButton>임시저장</ActionButton>
        <ActionButton onClick={closeModal}>수정</ActionButton>
        <ActionButton onClick={handleComplete}>완료</ActionButton>
      </ActionButtons>
    </ModalOverlay>
  );
}

export default AddTaskModal;
