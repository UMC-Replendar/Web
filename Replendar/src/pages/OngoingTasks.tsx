import { useState, useEffect } from 'react';
import useTaskStore from '../store/useTaskStore';
import useModalStore from '../store/modalStore';
import { fetchTaskDetail, completeTask } from '../apis/taskApi';
import styled from 'styled-components';

import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import AddTaskModal from '../modal/AddTaskModal';
import EditTaskModal from '../modal/EditTaskModal';

import { PlusIcon } from '../components/CommuComponents/commuIcons';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';

import { useThemeStore, themeBackground } from '../store/useThemeStore';
// import useDebounce from '../hooks/useDebounce';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

interface TaskItem {
  assignmentId: number;
  title: string;
  due_date: string;
  due_time: string;
  memo?: string;
  notification: 'ON' | 'OFF';
  visibility: 'ON' | 'OFF';
  notifyCycle?: string[];
  favorite?: 'ACTIVE' | 'INACTIVE';
  isOverdue: boolean;

  color: string;
}

interface TaskProps {
  task: TaskItem;
  onComplete: (assId: number) => void;
  onEdit: (assId: number) => void;
}

const PageWrapper = styled.div`
  margin-top: 79px;
  margin-left: 66px;
  margin-right: 163px;
  display: flex;
  flex-direction: column;
`;

const MainPageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftTitles = styled.div`
  display: flex;
`;

const MainPageTitleBox = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background: ${({ isSelected }) => (isSelected ? '#fcf6f5' : '#d9d9d9')};
  color: ${({ isSelected }) => (isSelected ? '#7e7f7f' : 'black')};
  width: 200px;
  height: fit-content;
  cursor: pointer;
`;

const MainPageTitle = styled.h5`
  margin: 0;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: none;
  background: #e8e8e8;
  color: black;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
  img {
    width: 15px;
    height: 15px;
  }
`;

const More = styled.div`
  display: flex;
  padding: 0px 6px;
  align-items: center;
  gap: 6px;
  color: #666666;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
`;

const TaskBox = styled.div<{ isScrollable: boolean; background: string }>`
  border-radius: 0px 20px 20px 20px;
  background: ${({ background }) => background};
  padding: 52px 64px;
  max-height: ${({ isScrollable }) => (isScrollable ? '744px' : 'none')};
  overflow-y: ${({ isScrollable }) => (isScrollable ? 'auto' : 'visible')};
`;

const TaskBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskBlock = styled.div<{ color: string }>`
  display: flex;
  padding: 14px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  width: 100%;
  cursor: pointer;
`;

const TaskInfo = styled.div<{ isOverdue?: boolean }>`
  color: ${({ isOverdue }) => (isOverdue ? 'red' : 'white')};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TaskCompleteButton = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(270deg, #18b9dd 0%, #63d8f2 100%);
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
  white-space: nowrap;
`;

function OngoingTasks() {
  const { selectedTheme } = useThemeStore(); // 현재 선택된 테마 가져오기
  const themeColors = themeBackground[selectedTheme];

  const { tasks, fetchTasks } = useTaskStore();
  const { isOpen, openModal, closeModal, modalContent } = useModalStore();
  const [selectedTab, setSelectedTab] = useState<'ongoing' | 'important'>(
    'ongoing'
  );
  const [visibleTasksCount, setVisibleTasksCount] = useState(3);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleShowMore = () => {
    setVisibleTasksCount((prev) => (prev < tasks.length ? tasks.length : 3));
  };

  const handleEditTask = async (assId: number) => {
    try {
      const taskDetail = await fetchTaskDetail(assId);
      openModal(<EditTaskModal task={taskDetail} onClose={closeModal} />);
    } catch (error) {
      console.error('과제 상세 조회 오류:', error);
    }
  };

  const handleCompleteTask = async (assignmentId: number) => {
    try {
      await completeTask(assignmentId);
      await fetchTasks(); // 과제 완료 후 목록 갱신
    } catch (error) {
      console.error('과제 완료 처리 중 오류 발생:', error);
    }
  };

  //   const debouncedUserId = useDebounce(userId, 1000);

  //   // console.log(tasks);
  //   const fetchTasks = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?userId=${debouncedUserId}`,
  //         {
  //           headers: { Authorization: `${token}` },
  //         }
  //       );
  //       if (Array.isArray(response.data.result)) {
  //         const filteredTasks = response.data.result.filter((task: any) => {
  //           // ✅ 정규식을 사용하여 숫자만 추출
  //           const timeNumbers = task.due_time.match(/-?\d+/g)?.map(Number) || [];
  //           if (timeNumbers[0] < 0) {
  //             console.log(task.assignmentId);
  //             deleteTasks(task.assignmentId);
  //           }
  //           // ✅ 모든 시간이 0 이하(음수 포함)라면 과제 제외
  //           return !timeNumbers.some((num: number) => num < 0);
  //         });

  //         setTasks(filteredTasks); // ✅ 필터링된 과제만 저장
  //       } else {
  //         console.warn('⚠️ API 응답이 배열이 아님:', response.data);
  //         setTasks([]);
  //       }
  //     } catch (error) {
  //       console.error('❌ 과제 데이터 가져오기 실패:', error);
  //       setTasks([]);
  //     }
  //   };

  //   useEffect(() => {
  //     if (!debouncedUserId) return;

  //     setIsLoading(true);
  //     fetchTasks()
  //       .then(() => setIsLoading(false))
  //       .catch(() => {
  //         setIsError(true);
  //         setIsLoading(false);
  //       });

  //     // 1초마다 실행
  //     const interval = setInterval(() => {
  //       fetchTasks();
  //     }, 1000);

  //     return () => clearInterval(interval); // ✅ 컴포넌트 언마운트 시 정리
  //   }, [debouncedUserId]);

  //   useEffect(() => {
  //     if (!selectedAssId) return;

  //     openModal(
  //       <EditTaskModal
  //         assId={selectedAssId}
  //         onClose={closeModal}
  //         onComplete={() => handleCompleteTask(selectedAssId)}
  //       />
  //     );
  //   }, [selectedAssId]);

  // 과제 색상 지정
  const taskColors = [
    themeColors[5],
    themeColors[2],
    themeColors[3],
    themeColors[4],
  ];

  return (
    <PageWrapper>
      <MainPageTitleWrapper>
        <LeftTitles>
          <MainPageTitleBox
            isSelected={selectedTab === 'ongoing'}
            onClick={() => setSelectedTab('ongoing')}
          >
            <MainPageTitle>진행 중인 과제</MainPageTitle>
          </MainPageTitleBox>
          <MainPageTitleBox
            isSelected={selectedTab === 'important'}
            onClick={() => setSelectedTab('important')}
          >
            <MainPageTitle>중요한 과제</MainPageTitle>
          </MainPageTitleBox>
        </LeftTitles>

        <div style={{ display: 'flex', gap: '31px' }}>
          <AddButton
            onClick={() =>
              openModal(<AddTaskModal onTaskAdded={() => fetchTasks()} />)
            }
          >
            과제 추가하기
            <PlusIcon fill="currentColor" />
          </AddButton>

          {tasks.length > 3 && (
            <More onClick={handleShowMore}>
              {visibleTasksCount === tasks.length ? '닫기' : '더보기'}
              <img
                src={
                  visibleTasksCount === tasks.length
                    ? UpArrowIcon
                    : DownArrowIcon
                }
                alt={
                  visibleTasksCount === tasks.length ? 'Up Arrow' : 'Down Arrow'
                }
              />
            </More>
          )}
        </div>
      </MainPageTitleWrapper>

      <TaskBox isScrollable={tasks.length > 10} background={themeColors[1]}>
        {tasks.slice(0, visibleTasksCount).map((task: any, index: number) => (
          <TaskItem
            key={task.assId}
            task={{
              ...task,
              color: index < 4 ? taskColors[index] : themeColors[4],
            }}
            onComplete={handleCompleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </TaskBox>

      <CustomCalendar
        tasks={tasks.map((task: any) => ({
          name: task.title,
          deadline: task.due_date,
        }))}
      />

      {isOpen && modalContent}
    </PageWrapper>
  );
}

export default OngoingTasks;

const TaskItem: React.FC<TaskProps> = ({ task, onComplete, onEdit }) => {
  const [remainingTime, setRemainingTime] = useState<string>('');
  const [isOverdue, setIsOverdue] = useState<boolean>(false);
  const [notified, setNotified] = useState<boolean>(false);

  useEffect(() => {
    const updateRemainingTime = () => {
      if (!task?.due_date || !task?.due_time) {
        setRemainingTime('잘못된 과제 정보');
        setIsOverdue(true);
        return;
      }

      // 기존 과제 데이터의 날짜 형식 변환
      let formattedDueDate = task.due_date.replace(/\//g, '-'); // YYYY-MM-DD 변환
      let formattedDueTime = task.due_time.slice(0, 5); // HH:mm 변환

      formattedDueTime = convertRelativeTimeToClockTime(task.due_time);

      const dueDateTime = dayjs(
        `${formattedDueDate} ${formattedDueTime}`,
        'YYYY-MM-DD HH:mm'
      );
      const now = dayjs();

      if (!dueDateTime.isValid()) {
        console.log(
          '변환된 날짜가 유효하지 않음:',
          formattedDueDate,
          formattedDueTime
        );
        setRemainingTime('잘못된 날짜 형식');
        setIsOverdue(true);
        return;
      }

      const diff = dueDateTime.diff(now);

      // 과제 마감 여부 확인
      if (diff <= 0) {
        setRemainingTime('과제 마감됨');
        setIsOverdue(true);
        return;
      }

      // 남은 시간 계산
      const durationObj = dayjs.duration(diff);
      const days = Math.floor(durationObj.asDays());
      const hours = durationObj.hours();
      const minutes = durationObj.minutes();
      const seconds = durationObj.seconds();

      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      setIsOverdue(false);

      // 1시간 전 알림
      if (
        task.notification === 'ON' &&
        durationObj.asMinutes() <= 60 &&
        !notified &&
        Notification.permission === 'granted'
      ) {
        new Notification('과제 마감 알림', {
          body: `🔔 '${task.title}' 과제가 1시간 후 마감됩니다!`,
        });
        setNotified(true); // 한 번만 실행되도록
      }
    };

    // "dd hh mm ss" -> "hh:mm" 변환
    const convertRelativeTimeToClockTime = (relativeTime: string) => {
      const timeMatch = relativeTime.match(/(\d{1,2})h (\d{1,2})m/);
      if (timeMatch) {
        const hours = timeMatch[1].padStart(2, '0');
        const minutes = timeMatch[2].padStart(2, '0');
        return `${hours}:${minutes}`;
      }
      return '00:00';
    };

    // 처음 한 번 실행
    updateRemainingTime();

    // 매초마다 실행
    const interval = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [task, notified]);

  return (
    <TaskBlockContainer onClick={() => onEdit(task.assignmentId)}>
      <TaskBlock color={task.color}>
        <TaskInfo>{task.title}</TaskInfo>
        <TaskInfo isOverdue={isOverdue}>
          {isOverdue ? '과제 마감됨' : remainingTime}
        </TaskInfo>
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지
          onComplete(task.assignmentId);
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
};
