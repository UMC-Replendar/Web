import React, { useState } from 'react';
import useFriendsStore from '../store/useFriendStore';
import useModalStore from '../store/modalStore';
import { addTask, storeTask, fetchLectureAssignment } from '../apis/taskApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import SelectFriendsModal from './SelectFriendsModal';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';

import BookmarkIcon from '../assets/images/BookmarkIcon.svg';
import BookmarkFilledIcon from '../assets/images/BookmarkFilledIcon.svg';
import LockIcon from '../assets/images/LockIcon.svg';
import UnLockIcon from '../assets/images/UnLockIcon.svg';
import GrayPlusIcon from '../assets/images/GrayPlusIcon.svg';

// MUI DatePicker 관련 Import 추가
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import dayjs from 'dayjs';

import Swal from 'sweetalert2';

// import UseNotificationPermission from '../hooks/useNotification';
// import { useAcademicYearStore } from '../store/profileStore';

dayjs.locale('ko');

interface AddTaskModalProps {
  onTaskAdded: () => void;
  lectureAssignmentId?: number;
}

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

const OpenSettingButton = styled.button<{ isActive: boolean }>`
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

// interface AddTaskModalProps {
//   onTaskAdded: () => void;
//   assId?: number;
//   lectureAssignmentId?: number;
// }

// function AddTaskModal({
//   onTaskAdded,
//   assId,
//   lectureAssignmentId,
// }: AddTaskModalProps) {
//   const { closeModal } = useModalStore();
//   const { addTask } = useTaskStore();
//   const queryClient = useQueryClient();
//   const notifiypermission = UseNotificationPermission();
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [taskName, setTaskName] = useState('');
//   const [deadline, setDeadline] = useState<Dayjs | null>(dayjs());
//   const [time, setTime] = useState('23:59');
//   const [isPublic, setIsPublic] = useState(false); // 과제 공개 여부
//   const [isOn, setIsOn] = useState(false); // 알림 설정
//   const [alarmCycles, setAlarmCycles] = useState<string[]>([]);
//   const [memo, setMemo] = useState('');

//   const {
//     isFriendModalOpen,
//     openFriendModal,
//     nicknames,
//     updateFriendsData,
//     setFriendData,
//     friendData,
//     resetFriends,
//     toggleAllFriends,
//   } = useFriendsStore();

//   const { sortKey, academicYear } = useAcademicYearStore();

//   const { data } = useGetData(
//     isFriendModalOpen ? `/api/assignment/share?userId=${userId}` : ''
//   );

//   const { data: lectureAssignmentData } = useGetData(
//     lectureAssignmentId ? `/api/major/lectures/get/${lectureAssignmentId}` : ''
//   );
//   const { data: assignmentData } = useGetData(
//     assId ? `/api/assignment/${assId}` : ''
//   );

//   useEffect(() => {
//     if (
//       Array.isArray(lectureAssignmentData) &&
//       lectureAssignmentData.length > 0
//     ) {
//       const { title, due_date, due_time, content } = lectureAssignmentData[0];
//       setTaskName(title);
//       setDeadline(dayjs(due_date));
//       setTime(due_time);
//       setMemo(content);
//     }
//   }, [lectureAssignmentData]);
//   useEffect(() => {
//     if (Array.isArray(assignmentData) && assignmentData.length > 0) {
//       console.log(assignmentData);
//       const {
//         title,
//         due_date,
//         memo,
//         notification,
//         visibility,
//         notifyCycle,
//         shareFriend,
//         favorite,
//       } = assignmentData[0];
//       const [date, time] = due_date.split(' ');

//       setTaskName(title);
//       setDeadline(dayjs(date));
//       setTime(time);
//       setMemo(memo);
//       setIsOn(notification === 'ON' ? true : false);
//       setIsPublic(visibility === 'ON' ? true : false);
//       setAlarmCycles(notifyCycle);
//       toggleAllFriends(shareFriend);
//       setIsBookmarked(favorite === 'ACTIVE' ? true : false);
//     }
//   }, [assignmentData]);
//   useEffect(() => {
//     console.log('taskNaem:', taskName);
//   }, [taskName]);

//   // Mutation을 사용하여 addTask 실행
//   const addTaskMutation = useMutation({
//     mutationFn: async (taskData: Omit<Task, 'assignmentId'>) => {
//       return await addTask(taskData);
//     },
//     onSuccess: (newTask) => {
//       console.log('과제 추가 완료:', newTask);
//       queryClient.invalidateQueries({
//         queryKey: ['tasks', userId],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ['/api/activity/friend'],
//       });
//       queryClient.invalidateQueries({
//         queryKey: [
//           `/api/major/lectures/sort/${sortKey}?sort=asc&academicYear=${academicYear}&majorId=`,
//         ],
//       });
//       onTaskAdded();
//       closeModal();
//     },
//     onError: (error) => {
//       console.error('과제 추가 중 오류 발생:', error);
//       alert('과제 추가 중 문제가 발생했습니다.');
//     },
//   });

//   const handleComplete = async () => {

//     console.log(notifiypermission);

//     const taskData: Omit<Task, 'assignmentId'> = {
//       title: taskName,
//       endDate: formattedDeadline,
//       notification: isOn ? 'ON' : 'OFF',
//       visibility: isPublic ? 'ON' : 'OFF',
//       notifyCycle: alarmCycles.length > 0 ? alarmCycles : [],
//       shareIds: friendData ? friendData.map((friend) => friend.friendId) : [],
//       memo: memo.trim() === '' ? '' : memo,
//       favorite: isBookmarked ? 'ACTIVE' : 'INACTIVE',
//       originAssId: assId ? assId : null,
//       lectureAssignmentId: lectureAssignmentId ? lectureAssignmentId : null,
//     };

//     addTaskMutation.mutate(taskData);
//   };

//   useEffect(() => {
//     updateFriendsData();
//   }, [isFriendModalOpen]);

//   useEffect(() => {
//     if (JSON.stringify(data) !== JSON.stringify(friendData)) {
//       setFriendData(data);
//     }
//   }, [data, openFriendModal]);

//   useEffect(() => {
//     resetFriends();
//   }, [closeModal]);

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  onTaskAdded,
  lectureAssignmentId,
}) => {
  const { closeModal } = useModalStore();
  const queryClient = useQueryClient();
  const { checkedFriends, friendData } = useFriendsStore();

  const [taskData, setTaskData] = useState({
    isBookmarked: false,
    title: '',
    dueDate: dayjs(),
    dueTime: '',
    isPublic: false,
    isOn: false,
    notifyCycle: [] as string[],
    shareIds: [] as number[],
    memo: '',
  });
  /*
  const notifiypermission = useNotificationPermission();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState('23:59');
  const [isPublic, setIsPublic] = useState(false); // 과제 공개 여부
  const [isOn, setIsOn] = useState(false); // 알림 설정
  const [alarmCycles, setAlarmCycles] = useState<string[]>([]);
  const [memo, setMemo] = useState('');

  const { id: userId, token } = useAuthStore();

  if (!userId) {
    console.error('userId가 존재하지 않습니다. 로그인이 필요한 기능입니다.');
    alert('로그인이 필요합니다.');
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
  } = useFriendStore();

  const { sortKey, academicYear } = useAcademicYearStore();

  const { data } = useGetData(
    isFriendModalOpen ? `/api/assignment/share?userId=${userId}` : ''
  );*/

  const handleChange = (field: keyof typeof taskData, value: any) => {
    setTaskData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formattedTaskData = {
    title: taskData.title,
    endDate: `${taskData.dueDate?.format('YYYY/MM/DD')} ${taskData.dueTime}`,
    notification: taskData.isOn ? 'ON' : 'OFF',
    visibility: taskData.isPublic ? 'ON' : 'OFF',
    notifyCycle: taskData.notifyCycle,
    shareIds: taskData.shareIds,
    memo: taskData.memo.trim() || '',
    favorite: taskData.isBookmarked
      ? ('ACTIVE' as 'ACTIVE')
      : ('INACTIVE' as 'INACTIVE'),
    originAssId: undefined,
    lectureAssignmentId: undefined,
  };

  const { mutate: addTaskMutation } = useMutation({
    mutationFn: async () => addTask(formattedTaskData),
    onSuccess: () => {
      alert('과제가 추가되었습니다!');
      queryClient.invalidateQueries({ queryKey: ['tasks'] }); // 과제 목록 갱신

      /* useEffect(() => {
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

  // Mutation을 사용하여 addTask 실행
  const addTaskMutation = useMutation({
    mutationFn: async (taskData: Omit<Task, 'assignmentId'>) => {
      return await addTask(taskData);
    },
    onSuccess: (newTask) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['/api/activity/friend'],
      });
      queryClient.invalidateQueries({
        queryKey: [
          `/api/major/lectures/sort/${sortKey}?sort=asc&academicYear=${academicYear}&majorId=`,
        ],
      });*/
      onTaskAdded();
      closeModal();
    },
    onError: (error) => {
      console.error('과제 추가 실패:', error);
      alert('과제 추가 중 오류가 발생했습니다.');
    },
  });

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

  const handleConfirmFriends = () => {
    const selectedFriends = friendData
      .filter((friend) => checkedFriends[friend.friendId]) // 체크된 친구만 가져오기
      .map((friend) => friend.friendId);

    handleChange('shareIds', selectedFriends);
  };

  const alarmOptions = [{ label: '1시간 전', value: 'H1' }];

  const handleComplete = () => {
    if (!taskData.title.trim()) {
      alert('과제명을 입력해주세요.');
      return;
    }

    if (!taskData.dueDate) {
      alert('과제 마감일을 선택해주세요.');
      return;
    }

    if (!taskData.dueTime.trim()) {
      alert('과제 마감 시간을 입력해주세요.');
      return;
    }

    addTaskMutation();
  };

  const { mutate: saveDraftMutation } = useMutation({
    mutationFn: async () => storeTask(formattedTaskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      Swal.fire({
        icon: 'success',
        title: '과제가 임시저장 되었습니다.',
        confirmButtonColor: '#25C26C',
      });
      closeModal();
    },
    onError: (error) => {
      console.error('임시저장 중 오류 발생:', error);
      alert('과제 임시저장 중 문제가 발생했습니다.');
    },
  });

  const handleSaveDraft = () => {
    if (!taskData.title.trim()) {
      alert('과제명을 입력해주세요.');
      return;
    }

    if (!taskData.dueDate) {
      alert('마감일을 선택해주세요.');
      return;
    }

    saveDraftMutation();
  };

  // const saveDraftMutation = useMutation({
  //   mutationFn: async (taskData) => storeTask(taskData),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
  //     Swal.fire({
  //       icon: 'success',
  //       title: '과제가 임시저장 되었습니다.',
  //       confirmButtonColor: '#25C26C',
  //     });
  //     closeModal();
  //   },
  //   onError: (error) => {
  //     console.error('임시저장 중 오류 발생:', error);
  //     alert('과제 임시저장 중 문제가 발생했습니다.');
  //   },
  // });

  // const handleSaveDraft = () => {
  //   if (!taskData.title.trim()) {
  //     alert('과제명을 입력해주세요.');
  //     return;
  //   }
  //   if (!taskData.dueDate) {
  //     alert('마감일을 선택해주세요.');
  //     return;
  //   }

  //   const formattedDeadline = new Date(taskData.dueDate.format('YYYY-MM-DD') + 'T' + taskData.dueTime + ':00.000Z').toISOString();

  //   const draftTaskData = {
  //     title: taskData.title,
  //     endDate: formattedDeadline,
  //     notification: taskData.isOn ? 'ON' : 'OFF',
  //     visibility: taskData.isPublic ? 'ON' : 'OFF',
  //     notifyCycle: taskData.notifyCycle.length > 0 ? taskData.notifyCycle : [],
  //     shareIds: taskData.shareIds,
  //     memo: taskData.memo.trim() || '',
  //     favorite: taskData.isBookmarked ? 'ACTIVE' : 'INACTIVE',
  //     originAssId: undefined,
  //     lectureAssignmentId: undefined,
  //   };

  //   saveDraftMutation.mutate(draftTaskData);
  // };

  /*  useEffect(() => {
    if (lectureAssignmentId) {
      fetchLectureAssignment(lectureAssignmentId)
        .then((data) => {
          if (data) {
            setTaskData((prev) => ({
              ...prev,
              title: data.title,
              dueDate: dayjs(data.due_date),
              dueTime: data.due_time,
              memo: data.memo || '',
            }));
          }
        })
        .catch((error) =>
          console.error('강의 과제 데이터 가져오기 실패:', error)
        );
    }
  }, [lectureAssignmentId]);

  const saveDraftMutation = useMutation({
    mutationFn: async (taskData: Omit<Task, 'assignmentId'>) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/store`,
        taskData,
        {
          headers: { Authorization: `${token}` },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
      Swal.fire({
        icon: 'success',
        title: '과제가 임시저장 되었습니다.',
        confirmButtonColor: '#25C26C',
      });
      closeModal();
    },
    onError: (error) => {
      console.error('임시저장 중 오류 발생:', error);
      alert('과제 임시저장 중 문제가 발생했습니다.');
    },
  });

  const handleSaveDraft = async () => {

    const formattedDeadline =
      deadline && time ? `${deadline.format('YYYY/MM/DD')} ${time}` : '';

    const draftTaskData: Omit<Task, 'assignmentId'> = {
      title: taskName,
      endDate: formattedDeadline,
      notification: isOn ? 'ON' : 'OFF',
      visibility: isPublic ? 'ON' : 'OFF',
      notifyCycle: alarmCycles.length > 0 ? alarmCycles : [],
      shareIds: friendData ? friendData.map((friend) => friend.friendId) : [],
      memo: memo.trim() === '' ? '' : memo,
      favorite: isBookmarked ? 'ACTIVE' : 'INACTIVE',
      originAssId: assId ? assId : null,
      lectureAssignmentId: lectureAssignmentId ? lectureAssignmentId : null,
    };
  }; */

  return (
    <ModalOverlay onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Header>
          <TitleContainer>
            <Title>과제 추가하기</Title>
            <img
              src={taskData.isBookmarked ? BookmarkFilledIcon : BookmarkIcon}
              alt="Bookmark Icon"
              onClick={() =>
                handleChange('isBookmarked', !taskData.isBookmarked)
              }
            />
          </TitleContainer>

          <ActionButton>불러오기</ActionButton>
        </Header>

        <Section>
          <TaskNameSection>
            <Label>과제명</Label>
            <Input
              type="text"
              value={taskData.title}
              placeholder="과제 이름을 입력하세요"
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </TaskNameSection>

          <TaskDeadlineSection>
            <Label>과제 마감일</Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <InputContainer>
                <DesktopDatePicker
                  value={taskData.dueDate}
                  onChange={(newValue) => handleChange('dueDate', newValue)}
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
        </Section>

        <Section>
          <OpenSettingSection>
            <Label>공개 설정</Label>
            <OpenSettingButtonGroup>
              <OpenSettingButton
                isActive={taskData.isPublic}
                onClick={() => handleChange('isPublic', true)}
              >
                <img src={UnLockIcon} alt="UnLock Icon" /> 공개
              </OpenSettingButton>
              <OpenSettingButton
                isActive={!taskData.isPublic}
                onClick={() => handleChange('isPublic', false)}
              >
                <img src={LockIcon} alt="Lock Icon" /> 비공개
              </OpenSettingButton>
            </OpenSettingButtonGroup>
          </OpenSettingSection>

          <AlertSettingSection>
            <Label>알림 설정</Label>
            <div style={{ transform: 'scale(0.5)', display: 'inline-block' }}>
              <SmallToggleSwitch
                isOn={taskData.isOn}
                onToggle={() => handleChange('isOn', !taskData.isOn)}
              />
            </div>
          </AlertSettingSection>

          <AlertCycleSettingSection>
            <Label>알림 주기 설정</Label>
            <AlertCycleSettingButtonGroup>
              {alarmOptions.map(({ label, value }) => (
                <AlarmCycleSettingButton
                  key={value}
                  isActive={taskData.notifyCycle?.includes(value) ?? false}
                  onClick={() =>
                    handleChange(
                      'notifyCycle',
                      taskData.notifyCycle.includes(value)
                        ? taskData.notifyCycle.filter(
                            (cycle) => cycle !== value
                          )
                        : [...taskData.notifyCycle, value]
                    )
                  }
                >
                  {label}
                </AlarmCycleSettingButton>
              ))}
            </AlertCycleSettingButtonGroup>
          </AlertCycleSettingSection>
        </Section>

        <ShareSection>
          <Label>공유할 친구</Label>
          <PlusFriendsButton
            onClick={useFriendsStore.getState().openFriendModal}
          >
            <img src={GrayPlusIcon} alt="Gray Plus Icon" />
            추가
          </PlusFriendsButton>
          <SelectedFriendsList>
            {taskData.shareIds.map((friendId) => {
              const friend = friendData.find((f) => f.friendId === friendId);
              return friend ? (
                <FriendTag key={friendId}>{friend.nickname}</FriendTag>
              ) : null;
            })}
          </SelectedFriendsList>
        </ShareSection>

        {useFriendsStore.getState().isFriendModalOpen && (
          <SelectFriendsModal onConfirm={handleConfirmFriends} />
        )}

        <MemoSection>
          <Label>메모</Label>
          <MemoInput
            value={taskData.memo}
            onChange={(e) => handleChange('memo', e.target.value)}
          />
        </MemoSection>

        <ActionButtons>
          <ActionButton onClick={handleSaveDraft}>임시저장</ActionButton>
          <ActionButton onClick={closeModal}>수정</ActionButton>
          <ActionButton onClick={handleComplete}>완료</ActionButton>
        </ActionButtons>
      </Modal>
    </ModalOverlay>
  );
};

export default AddTaskModal;
