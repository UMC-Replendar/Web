import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import BookmarkFilledIcon from '../assets/images/BookmarkFilledIcon.svg';
import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
import GrayPlusIcon from '../assets/images/GrayPlusIcon.svg';
import SelectFriendsModal from './SelectFriendsModal';
import useModalStore from '../store/modalStore';
import useFriendsStore from '../store/useFriendStore';
import useGetData from '../hooks/useGetData';
import useTaskStore from '../store/useTaskStore';
import useAuthStore from '../store/authStore';
import { Task } from '../store/useTaskStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

// MUI DatePicker 관련 Import 추가
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('ko');

const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 150vh;
  height: auto;
  max-height: 95vh;
  overflow-y: auto;
  display: flex;
  padding: 40px 8px 8px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  box-sizing: border-box;
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
  align-items: flex-start;
  gap: 123px;
  align-self: stretch;
`;

const TaskDeadlineSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 77px;
  align-self: stretch;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTextField = muiStyled(TextField)({
  width: 'auto',
  maxWidth: '200px',
  boxSizing: 'border-box',

  '& .MuiInputBase-root': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '19px',
    padding: '8px',
    height: '47px',
  },

  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
    border: '0.5px solid #E8E8E8',
    backgroundColor: 'white',

    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: '#E8E8E8',
      },
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E8E8E8',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
});

const StyledTimeInput = styled.input`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: white;
  color: #666666;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  width: 86px;
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const OpenSettingButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive', // DOM 전달 방지
})<ButtonProps>`
  display: flex;
  padding: 5px 15px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
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

const AlarmCycleSettingButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<ButtonProps>`
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

interface AddTaskModalProps {
  onTaskAdded: () => void;
  assId?: number;
  lectureAssignmentId?: number;
}

function AddTaskModal({
  onTaskAdded,
  assId,
  lectureAssignmentId,
}: AddTaskModalProps) {
  const { closeModal } = useModalStore();
  const { addTask } = useTaskStore();
  const queryClient = useQueryClient();

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState('');
  const [isPublic, setIsPublic] = useState(false); // 과제 공개 여부
  const [isOn, setIsOn] = useState(false); // 알림 설정
  const [alarmCycles, setAlarmCycles] = useState<string[]>([]);
  const [memo, setMemo] = useState('');

  const { id: userId } = useAuthStore();

  if (!userId) {
    console.error('userId가 존재하지 않습니다. 로그인이 필요한 기능입니다.');
    Swal.fire({
      icon: 'error',
      title: 'userId가 존재하지 않습니다',
      text: '로그인이 필요한 기능입니다',
      showConfirmButton: true,
      confirmButtonText: '확인',
    });
    return;
  }

  const {
    isFriendModalOpen,
    openFriendModal,
    nicknames,
    updateFriendsData,
    setFriendData,
    friendData,
    resetFriends,
    toggleAllFriends,
  } = useFriendsStore();

  const { data } = useGetData(
    isFriendModalOpen ? `/api/assignment/share?userId=${userId}` : ''
  );

  const { data: lectureAssignmentData } = useGetData(
    lectureAssignmentId ? `/api/major/lectures/get/${lectureAssignmentId}` : ''
  );
  const { data: assignmentData } = useGetData(
    assId ? `/api/assignment/${assId}` : ''
  );

  useEffect(() => {
    if (
      Array.isArray(lectureAssignmentData) &&
      lectureAssignmentData.length > 0
    ) {
      const { title, due_date, due_time, content } = lectureAssignmentData[0];
      setTaskName(title);
      setDeadline(dayjs(due_date));
      setTime(due_time);
      setMemo(content);
    }
  }, [lectureAssignmentData]);
  useEffect(() => {
    if (Array.isArray(assignmentData) && assignmentData.length > 0) {
      console.log(assignmentData);
      const {
        title,
        due_date,
        memo,
        notification,
        visibility,
        notifyCycle,
        shareFriend,
        favorite,
      } = assignmentData[0];
      const [date, time] = due_date.split(' ');

      setTaskName(title);
      setDeadline(dayjs(date));
      setTime(time);
      setMemo(memo);
      setIsOn(notification === 'ON' ? true : false);
      setIsPublic(visibility === 'ON' ? true : false);
      setAlarmCycles(notifyCycle);
      toggleAllFriends(shareFriend);
      setIsBookmarked(favorite === 'ACTIVE' ? true : false);
    }
  }, [assignmentData]);
  useEffect(() => {
    console.log('taskNaem:', taskName);
  }, [taskName]);

  // Mutation을 사용하여 addTask 실행
  const addTaskMutation = useMutation({
    mutationFn: async (taskData: Omit<Task, 'assignmentId'>) => {
      return await addTask(taskData);
    },
    onSuccess: (newTask) => {
      console.log('과제 추가 완료:', newTask);
      queryClient.invalidateQueries({
        queryKey: [`/api/assignment?userId=${userId}`],
      }); //쿼리키 수정
      onTaskAdded();
      closeModal();
    },
    onError: (error) => {
      console.error('과제 추가 중 오류 발생:', error);
      Swal.fire({
        icon: 'error',
        text: '과제 추가 중 오류가 발생했습니다',
        confirmButtonText: '확인',
        showConfirmButton: true,
      });
    },
  });

  const handleComplete = async () => {
    if (!taskName.trim()) {
      Swal.fire({
        icon: 'warning',
        text: '과제명을 입력해주세요',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!deadline) {
      Swal.fire({
        icon: 'warning',
        text: '마감일을 선택해주세요',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    const formattedDeadline =
      deadline && time ? `${deadline.format('YYYY/MM/DD')} ${time}` : '';

    const taskData: Omit<Task, 'assignmentId'> = {
      title: taskName,
      endDate: formattedDeadline,
      notification: isOn ? 'ON' : 'OFF',
      visibility: isPublic ? 'ON' : 'OFF',
      notifyCycle: alarmCycles.length > 0 ? alarmCycles : [],
      shareIds: friendData ? friendData.map((friend) => friend.friendId) : [],
      memo: memo.trim() === '' ? '' : memo,
      favorite: isBookmarked ? 'ACTIVE' : 'INACTIVE',
      originAssId: null,
      lectureAssignmentId: lectureAssignmentId ? lectureAssignmentId : null,
    };

    addTaskMutation.mutate(taskData);
  };

  useEffect(() => {
    updateFriendsData();
  }, [isFriendModalOpen]);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(friendData)) {
      setFriendData(data);
    }
  }, [data, openFriendModal]);

  useEffect(() => {
    resetFriends();
  }, [closeModal]);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputTime = e.target.value.replace(/[^0-9]/g, '');

    if (inputTime.length > 4) {
      inputTime = inputTime.slice(0, 4);
    }

    let formattedTime = inputTime;
    if (inputTime.length >= 2) {
      formattedTime = `${inputTime.slice(0, 2)}:${inputTime.slice(2)}`;
    }

    setTime(formattedTime);
  };

  const handleTimeBlur = () => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!timeRegex.test(time)) {
      Swal.fire({
        icon: 'warning',
        text: '24시간 형식 (00:00 ~ 23:59)으로 입력하세요',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const alarmOptions = [
    { label: '3일 전', value: 'DAY3' },
    { label: '24시간 전', value: 'DAY1' },
    { label: '10시간 전', value: 'H10' },
    { label: '1시간 전', value: 'H1' },
  ];

  const handleAlarmCycleToggle = (cycle: string) => {
    setAlarmCycles((prev) =>
      prev.includes(cycle) ? prev.filter((c) => c !== cycle) : [...prev, cycle]
    );
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <TitleContainer>
            <Title>과제 추가하기</Title>
            <img
              src={isBookmarked ? BookmarkFilledIcon : BookmarkIcon}
              alt="Bookmark Icon"
              onClick={toggleBookmark}
            />
          </TitleContainer>

          <ActionButton>불러오기</ActionButton>
        </Header>

        <Section>
          <TaskNameSection>
            <Label>과제명</Label>
            <Input
              type="text"
              value={taskName}
              placeholder="과제 이름을 입력하세요"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </TaskNameSection>

          <TaskDeadlineSection>
            <Label>과제 마감일</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <InputContainer>
                <DesktopDatePicker
                  value={deadline}
                  onChange={(newValue) => setDeadline(newValue)}
                  format="YYYY/MM/DD"
                  slots={{ textField: StyledTextField }}
                />
                <StyledTimeInput
                  type="text"
                  value={time}
                  placeholder="23:59"
                  onChange={handleTimeChange}
                  onBlur={handleTimeBlur}
                  maxLength={5}
                  required
                />
              </InputContainer>
            </LocalizationProvider>
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
              {alarmOptions.map(({ label, value }) => (
                <AlarmCycleSettingButton
                  key={value}
                  isActive={alarmCycles.includes(value)}
                  onClick={() => handleAlarmCycleToggle(value)}
                >
                  {label}
                </AlarmCycleSettingButton>
              ))}
            </AlertCycleSettingButtonGroup>
          </AlertCycleSettingSection>
        </Section>

        <ShareSection>
          <Label>공유할 친구</Label>
          <PlusFriendsButton onClick={openFriendModal}>
            <img src={GrayPlusIcon} alt="Gray Plus Icon" />
            추가
          </PlusFriendsButton>
          {nicknames.length > 0 && (
            <SelectedFriendsList>
              {nicknames.map((nickname) => (
                <FriendTag key={nickname}>{nickname}</FriendTag>
              ))}
            </SelectedFriendsList>
          )}
        </ShareSection>

        {isFriendModalOpen && <SelectFriendsModal />}

        <MemoSection>
          <Label>메모</Label>
          <MemoInput value={memo} onChange={(e) => setMemo(e.target.value)} />
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

const SelectedFriendsList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const FriendTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;
  width: 64px;
  height: 31px;
`;
