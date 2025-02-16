import React, { useState, useEffect } from 'react';
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
  background: white;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  display: flex;
  padding: 8px 8px 8px 20px;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  gap: 28px;
  margin-bottom: 10px;
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

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 10px;
//   flex-grow: 1;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #cacaca;
//   border-radius: 5px;
//   font-size: 16px;
//   font-family: Pretendard;
//   color: #666666;
// `;

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
  color: #9a9a9a;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
`;

const AlarmContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 43px;
`;

// const AlarmSettings = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
// `;

// const AlarmButton = styled.button`
//   color: #666666;
//   border-radius: 5px;
//   border: 1px #e8e8e8 solid;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 22.4px;
//   cursor: pointer;
// `;

// const GapBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 18px;
// `;

const MemoTextarea = styled.textarea`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 40px;
  border-radius: 2px;
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
  endDate: string;
  memo: string;
  notification: 'ON' | 'OFF';
  visibility: 'ON' | 'OFF';
  notifyCycle: string[];
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
  const { data: task } = useQuery<TaskData>({
    queryKey: ['task', assId],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/${assId}`,
        { headers: { Authorization: token } }
      );
      return response.data;
    },
    enabled: !!assId,
  });

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState('');
  const [notifyCycle, setNotifyCycle] = useState<string[]>([]);
  const [notification, setNotification] = useState<'ON' | 'OFF'>('OFF');
  const [visibility, setVisibility] = useState<'ON' | 'OFF'>('OFF');
  const [memo, setMemo] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDueDate(dayjs(task.endDate.split(' ')[0]));
      setTime(task.endDate.split(' ')[1]);
      setNotifyCycle(task.notifyCycle);
      setNotification(task.notification);
      setVisibility(task.visibility);
      setMemo(task.memo);
      setIsBookmarked(task.favorite === 'ACTIVE');
    }
  }, [task]);

  // 과제 수정 API
  const editTaskMutation = useMutation({
    mutationFn: async () => {
      const requestBody = {
        assId,
        title,
        endDate: `${dueDate?.format('YYYY/MM/DD')} ${time}`,
        notification,
        visibility,
        memo,
        shareIds: [],
        notifyCycle,
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
            width={18}
            onClick={Visibility}
            style={{ cursor: 'pointer' }}
          />
        </TitleSection>
        <img
          src={isBookmarked ? BookmarkFilledIcon : BookmarkIcon}
          alt="Bookmark Icon"
          width={18}
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
              value={dueDate}
              onChange={setDueDate}
              format="YYYY/MM/DD"
              slots={{ textField: StyledTextField }}
            />
            <StyledTimeInput
              type="text"
              value={time}
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

      {/* 메모 입력 */}
      <Label>메모</Label>
      <MemoTextarea
        placeholder="메모를 입력하세요..."
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      {/* 버튼 그룹 */}
      <ButtonGroup>
        <DeleteButton>과제 삭제</DeleteButton>
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
