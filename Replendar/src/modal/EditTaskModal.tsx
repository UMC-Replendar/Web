import React, { useState } from 'react';
import styled from 'styled-components';
import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import BookmarkFilledIcon from '../assets/images/BookmarkFilledIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
import useAuthStore from '../store/authStore';
import useTaskStore from '../store/useTaskStore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// MUI DatePicker 관련 Import 추가
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
dayjs.locale('ko');

export const SmallToggleSwitch = styled(ToggleSwitch)`
  transform: scale(0.8);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 24px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const Label = styled.label`
  color: #666666;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TaskDeadlineSection = styled.div`
  display: flex;
  gap: 28px;
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

const AlarmContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AlertCycleSettingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const AlertCycleSettingButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

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
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const FriendsList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px 5px;
  align-self: stretch;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const FriendTag = styled.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #bababa;
  color: #666666;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  // width: auto;
  // height: 31px;
  // min-width: 64px;
`;

const MemoTextarea = styled.textarea`
  display: flex;
  padding: 8px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #cacaca;
  color: #666666;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 10px;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  border: 1px solid #eb8a8a;
  color: #eb8a8a;
`;

const EditButton = styled(Button)`
  border: 1px solid #666666;
  color: #666666;
`;

const CompleteButton = styled(Button)`
  border: 1px solid #666666;
  color: #666666;
`;

interface TaskData {
  assId: number;
  title: string;
  due_date: string;
  memo: string;
  notification: 'ON' | 'OFF';
  visibility: 'ON' | 'OFF';
  notifyCycle: string[];
  shareFriend: string[];
  favorite: 'ACTIVE' | 'INACTIVE';
}

interface EditTaskModalProps {
  assId: number;
  onClose: () => void;
  onComplete: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  assId,
  onClose,
  onComplete,
}) => {
  const { token, id: userId } = useAuthStore();
  const queryClient = useQueryClient();
  const { editTask, fetchTasks } = useTaskStore();

  // 과제 상세 조회 API
  const {
    data: task,
    isLoading,
    isError,
  } = useQuery<TaskData>({
    queryKey: ['task', assId],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/${assId}`,
        { headers: { Authorization: token } }
      );
      if (!response.data.isSuccess) {
        throw new Error(
          response.data.message || '과제 정보를 불러오지 못했습니다.'
        );
      }

      return response.data.result;
    },
    enabled: !!assId,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !task) return <div>과제 정보를 불러올 수 없습니다.</div>;

  const [title] = useState(task.title);
  const [dueDate, setDueDate] = useState<Dayjs | null>(
    dayjs(task.due_date.split(' ')[0])
  );
  const [time, setTime] = useState(task.due_date.split(' ')[1] ?? '');
  const [notifyCycle, setNotifyCycle] = useState<string[]>(
    task.notifyCycle ?? []
  );
  const [notification, setNotification] = useState<'ON' | 'OFF'>(
    task.notification
  );
  const [visibility, setVisibility] = useState<'ON' | 'OFF'>(task.visibility);
  const [memo, setMemo] = useState(task.memo);
  const [isBookmarked, setIsBookmarked] = useState(task.favorite === 'ACTIVE');

  // 과제 수정 API
  const editTaskMutation = useMutation({
    mutationFn: async () => {
      const requestBody = {
        assId,
        title,
        due_date: `${dueDate?.format('YYYY/MM/DD')} ${time}`,
        notification,
        visibility,
        memo,
        shareIds: [],
        notifyCycle: [],
        favorite: isBookmarked ? 'ACTIVE' : 'INACTIVE',
      };
      return await axios.patch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment`,
        requestBody,
        { headers: { Authorization: token } }
      );
    },
    onSuccess: () => {
      editTask(assId, {
        title,
        endDate: `${dueDate?.format('YYYY/MM/DD')} ${time}`,
        notifyCycle,
        notification,
        visibility,
        memo,
      });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      if (userId) {
        fetchTasks(userId);
      }
      onClose();
    },
  });

  const handleEditTask = () => {
    editTaskMutation.mutate();
  };

  // 과제 삭제 API
  const deleteTaskMutation = useMutation({
    mutationFn: async () => {
      return await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?assId=${assId}`,
        { headers: { Authorization: token } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    },
  });

  const handleDeleteTask = () => {
    deleteTaskMutation.mutate();
  };

  // 공개/비공개
  const Visibility = () => {
    setVisibility((prev) => (prev === 'ON' ? 'OFF' : 'ON'));
  };

  // 북마크
  const Bookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  // 알림
  const alarmOptions = [
    { label: '3일 전', value: 'DAY3' },
    { label: '24시간 전', value: 'DAY1' },
    { label: '10시간 전', value: 'H10' },
    { label: '1시간 전', value: 'H1' },
  ];

  const handleAlarmCycleToggle = (cycle: string) => {
    setNotifyCycle((prev) =>
      prev.includes(cycle) ? prev.filter((c) => c !== cycle) : [...prev, cycle]
    );
  };

  return (
    <ModalWrapper>
      {/* 헤더 */}
      <Header>
        <TitleSection>
          <span>{title}</span>
          <img
            src={visibility === 'ON' ? UnLockIcon : LockIcon}
            alt="Visibility Icon"
            onClick={Visibility}
            style={{ cursor: 'pointer' }}
          />
        </TitleSection>
        <img
          src={isBookmarked ? BookmarkFilledIcon : BookmarkIcon}
          alt="Bookmark Icon"
          onClick={Bookmark}
          style={{ cursor: 'pointer' }}
        />
      </Header>

      {/* 과제 마감일 */}
      <TaskDeadlineSection>
        <Label>과제 마감일</Label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputContainer>
            <DesktopDatePicker
              value={dueDate || dayjs()}
              onChange={(newValue) => setDueDate(newValue)}
              format="YYYY/MM/DD"
              slots={{ textField: StyledTextField }}
            />
            <StyledTimeInput
              type="text"
              value={time || ''}
              onChange={(e) => setTime(e.target.value)}
            />
          </InputContainer>
        </LocalizationProvider>
      </TaskDeadlineSection>

      {/* 알림 설정 */}
      <AlarmContainer>
        <Label>알림 설정</Label>
        <div style={{ transform: 'scale(0.5)', display: 'inline-block' }}>
          <SmallToggleSwitch
            isOn={notification === 'ON'}
            onToggle={() =>
              setNotification(notification === 'ON' ? 'OFF' : 'ON')
            }
          />
        </div>
      </AlarmContainer>

      {/* 알림 주기 설정 */}
      <AlertCycleSettingSection>
        <Label>알림 주기 설정</Label>
        <AlertCycleSettingButtonGroup>
          {alarmOptions.map(({ label, value }) => (
            <AlarmCycleSettingButton
              key={value}
              isActive={notifyCycle.includes(value)}
              onClick={() => handleAlarmCycleToggle(value)}
            >
              {label}
            </AlarmCycleSettingButton>
          ))}
        </AlertCycleSettingButtonGroup>
      </AlertCycleSettingSection>

      {/* 공유 중인 친구 */}
      <Label>공유 중인 친구</Label>
      <FriendsList>
        {task?.shareFriend?.length
          ? task.shareFriend.map((friend, index) => (
              <FriendTag key={index}>{friend}</FriendTag>
            ))
          : null}
      </FriendsList>

      {/* 메모 입력 */}
      <Label>메모</Label>
      <MemoTextarea
        placeholder="메모를 입력하세요..."
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      {/* 버튼 그룹 */}
      <ButtonGroup>
        <DeleteButton onClick={handleDeleteTask}>과제 삭제</DeleteButton>
        <EditButton onClick={handleEditTask}>정보 수정</EditButton>
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
