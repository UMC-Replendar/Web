import React, { useState, useEffect } from 'react';
import { Task } from '../store/useTaskStore';
import useFriendsStore from '../store/useFriendStore';
import SelectFriendsModal from './SelectFriendsModal';
import { deleteTask, editTask, completeTask } from '../apis/taskApi';
import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import BookmarkFilledIcon from '../assets/images/BookmarkFilledIcon.svg';
// import GrayPlusIcon from '../assets/images/GrayPlusIcon.svg';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
// import { PlusFriendsButton } from './AddTaskModal';

// MUI DatePicker 관련 Import 추가
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import dayjs from 'dayjs';
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

const AlarmCycleSettingButton = styled.button<ButtonProps>`
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

interface EditTaskModalProps {
  task: Task;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onClose }) => {
  const queryClient = useQueryClient();
  const { checkedFriends, friendData, /*openFriendModal,*/ isFriendModalOpen } =
    useFriendsStore();

  const [taskData, setTaskData] = useState({
    assId: task.assId,
    title: task.title,
    dueDate: dayjs(task.endDate),
    dueTime: dayjs(task.endDate).format('HH:mm'),
    notification: task.notification,
    visibility: task.visibility,
    memo: task.memo || '',
    shareIds: task.shareIds || [],
    notifyCycle: task.notifyCycle || [],
    isBookmarked: task.favorite === 'ACTIVE',
  });

  useEffect(() => {
    if (task) {
      setTaskData((prev) => ({
        ...prev,
        assId: task.assId,
        title: task.title,
        dueDate: task.endDate ? dayjs(task.endDate) : dayjs(),
        dueTime: task.endDate ? dayjs(task.endDate).format('HH:mm') : '',
        notification: task.notification ?? 'OFF',
        visibility: task.visibility ?? 'OFF',
        memo: task.memo || '',
        shareIds: task.shareIds || [],
        notifyCycle: task.notifyCycle || [],
        isBookmarked: task.favorite === 'ACTIVE',
      }));

      // 상태 업데이트 후 값 확인
      setTimeout(() => {
        console.log('📌 업데이트된 taskData:', taskData);
      }, 100);
    }
  }, [task]);

  const handleChange = (field: keyof typeof taskData, value: any) => {
    setTaskData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputTime = e.target.value.replace(/[^0-9]/g, '');
    if (inputTime.length > 4) inputTime = inputTime.slice(0, 4);

    let formattedTime = '';
    if (inputTime.length >= 2) {
      let hours = inputTime.slice(0, 2);
      let minutes = inputTime.slice(2);

      if (parseInt(hours) > 23) hours = '23';
      if (minutes.length > 0 && parseInt(minutes) > 59) minutes = '59';

      formattedTime = `${hours}:${minutes}`;
    } else {
      formattedTime = inputTime;
    }

    handleChange('dueTime', formattedTime);
  };

  const handleTimeBlur = () => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(taskData.dueTime)) {
      alert('24시간 형식 (00:00 ~ 23:59)으로 입력하세요.');
      handleChange('dueTime', '');
    }
  };

  const handleAlarmCycleToggle = (cycle: string) => {
    handleChange(
      'notifyCycle',
      taskData.notifyCycle.includes(cycle)
        ? taskData.notifyCycle.filter((c) => c !== cycle)
        : [...taskData.notifyCycle, cycle]
    );
  };

  const alarmOptions = [
    { label: '3일 전', value: 'DAY3' },
    { label: '24시간 전', value: 'DAY1' },
    { label: '10시간 전', value: 'H10' },
    { label: '1시간 전', value: 'H1' },
  ];

  const handleConfirmFriends = () => {
    const selectedFriends = friendData
      .filter((friend) => checkedFriends[friend.friendId])
      .map((friend) => friend.friendId);

    handleChange('shareIds', selectedFriends);
  };

  const handleSave = async () => {
    try {
      const formattedEndDate = `${dayjs(taskData.dueDate).format('YYYY-MM-DD')}T${taskData.dueTime}:00.000Z`;

      await editTask({
        assId: task.assId,
        title: taskData.title,
        endDate: formattedEndDate,
        memo: taskData.memo,
        notification: taskData.notification,
        notifyCycle: taskData.notifyCycle,
        visibility: taskData.visibility,
        favorite: taskData.isBookmarked ? 'ACTIVE' : 'INACTIVE',
        shareIds: taskData.shareIds,
      });

      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    } catch (error) {
      console.error('과제 수정 오류:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task.assId);
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    } catch (error) {
      console.error('과제 삭제 오류:', error);
    }
  };

  const handleComplete = async () => {
    try {
      await completeTask(task.assId);

      queryClient.invalidateQueries({ queryKey: ['tasks'] }); // 과제 목록 갱신
      onClose();
    } catch (error) {
      console.error('과제 완료 오류:', error);
    }
  };

  return (
    <ModalWrapper>
      {/* 헤더 */}
      <Header>
        <TitleSection>
          <span>{taskData.title}</span>
          <img
            src={taskData.visibility === 'ON' ? UnLockIcon : LockIcon}
            alt="Visibility Icon"
            onClick={() =>
              handleChange(
                'visibility',
                taskData.visibility === 'ON' ? 'OFF' : 'ON'
              )
            }
            style={{ cursor: 'pointer' }}
          />
        </TitleSection>
        <img
          src={taskData.isBookmarked ? BookmarkFilledIcon : BookmarkIcon}
          alt="Bookmark Icon"
          onClick={() => handleChange('isBookmarked', !taskData.isBookmarked)}
          style={{ cursor: 'pointer' }}
        />
      </Header>

      {/* 과제 마감일 */}
      <TaskDeadlineSection>
        <Label>과제 마감일</Label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputContainer>
            <DesktopDatePicker
              value={dayjs(taskData.dueDate)}
              onChange={(newValue) =>
                handleChange('dueDate', newValue?.format('YYYY-MM-DD'))
              }
              format="YYYY/MM/DD"
              slots={{ textField: StyledTextField }}
            />
            <StyledTimeInput
              type="text"
              value={taskData.dueTime}
              placeholder="23:59"
              onChange={handleTimeChange}
              onBlur={handleTimeBlur}
              maxLength={5}
              required
            />
          </InputContainer>
        </LocalizationProvider>
      </TaskDeadlineSection>

      {/* 알림 설정 */}
      <AlarmContainer>
        <Label>알림 설정</Label>
        <div style={{ transform: 'scale(0.5)', display: 'inline-block' }}>
          <SmallToggleSwitch
            isOn={taskData.notification === 'ON'}
            onToggle={() =>
              handleChange(
                'notification',
                taskData.notification === 'ON' ? 'OFF' : 'ON'
              )
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
              isActive={taskData.notifyCycle.includes(value)}
              onClick={() => handleAlarmCycleToggle(value)}
            >
              {label}
            </AlarmCycleSettingButton>
          ))}
        </AlertCycleSettingButtonGroup>
      </AlertCycleSettingSection>

      {/* 공유 중인 친구 */}
      <Label>공유 중인 친구</Label>
      {/* <PlusFriendsButton onClick={openFriendModal}>
        <img src={GrayPlusIcon} alt="Gray Plus Icon" />
        추가
      </PlusFriendsButton> */}
      <FriendsList>
        {taskData.shareIds.length > 0 &&
          taskData.shareIds.map((friendId) => {
            const friend = friendData.find((f) => f.friendId === friendId);
            return friend ? (
              <FriendTag key={friendId}>{friend.nickname}</FriendTag>
            ) : null;
          })}
      </FriendsList>

      {isFriendModalOpen && (
        <SelectFriendsModal onConfirm={handleConfirmFriends} />
      )}

      {/* 메모 입력 */}
      <Label>메모</Label>
      <MemoTextarea
        placeholder="메모를 입력하세요..."
        value={taskData.memo}
        onChange={(e) => handleChange('memo', e.target.value)}
      />

      {/* 버튼 그룹 */}
      <ButtonGroup>
        <DeleteButton
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          과제 삭제
        </DeleteButton>
        <EditButton
          onClick={(e) => {
            e.stopPropagation();
            handleSave();
          }}
        >
          정보 수정
        </EditButton>
        <CompleteButton
          onClick={(e) => {
            e.stopPropagation();
            handleComplete();
          }}
        >
          과제 완료
        </CompleteButton>
      </ButtonGroup>
    </ModalWrapper>
  );
};

export default EditTaskModal;
