import { useState, useEffect, useRef } from 'react';
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
  due_datetime: string;
  color: string;
}

interface TaskProps {
  task: TaskItem;
  onComplete: (assId: number) => void;
  onEdit: (assId: number) => void;
  selectedTab: 'ongoing' | 'important';
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

  const { tasks, fetchTasks, importantTasks, fetchImportantTasks } =
    useTaskStore();
  const { isOpen, openModal, closeModal, modalContent } = useModalStore();
  const [selectedTab, setSelectedTab] = useState<'ongoing' | 'important'>(
    'ongoing'
  );
  const [ongoingTasksCount, setOngoingTasksCount] = useState(3); // 진행 중 과제 개수
  const [importantTasksCount, setImportantTasksCount] = useState(3); // 중요한 과제 개수

  const displayTask = selectedTab === 'ongoing' ? tasks : importantTasks;

  useEffect(() => {
    if (selectedTab === 'ongoing') {
      fetchTasks(); // 진행 중인 과제 가져오기
    } else if (selectedTab === 'important') {
      fetchImportantTasks();
    }
  }, [selectedTab]);

  const handleShowMore = () => {
    if (selectedTab === 'ongoing') {
      setOngoingTasksCount(
        ongoingTasksCount === tasks.length ? 3 : tasks.length
      );
    } else if (selectedTab === 'important') {
      setImportantTasksCount(
        importantTasksCount === importantTasks.length
          ? 3
          : importantTasks.length
      );
    }
  };

  const visibleCount =
    selectedTab === 'ongoing' ? ongoingTasksCount : importantTasksCount;

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

          {displayTask.length > 3 && (
            <More onClick={handleShowMore}>
              {visibleCount === displayTask.length ? '닫기' : '더보기'}
              <img
                src={
                  visibleCount === displayTask.length
                    ? UpArrowIcon
                    : DownArrowIcon
                }
                alt={
                  visibleCount === displayTask.length
                    ? 'Up Arrow'
                    : 'Down Arrow'
                }
              />
            </More>
          )}
        </div>
      </MainPageTitleWrapper>

      <TaskBox
        isScrollable={displayTask.length > 10}
        background={themeColors[1]}
      >
        {displayTask.slice(0, visibleCount).map((task: any, index: number) => (
          <TaskItem
            key={task.assignmentId}
            task={{
              ...task,
              color: index < 4 ? taskColors[index] : themeColors[4],
              isOverdue: task.isOverdue, // ✅ 마감 여부 전달
            }}
            onComplete={handleCompleteTask}
            onEdit={handleEditTask}
            selectedTab={selectedTab}
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

const TaskItem: React.FC<TaskProps> = ({
  task,
  onComplete,
  onEdit,
  selectedTab,
}) => {
  const { fetchTasks, fetchImportantTasks } = useTaskStore();

  const isFetched = useRef(false);
  const isImportantFetched = useRef(false);

  useEffect(() => {
    if (selectedTab === 'ongoing' && !isFetched.current) {
      fetchTasks();
      isFetched.current = true; // 이후 다시 실행되지 않도록 설정
    } else if (selectedTab === 'important' && !isImportantFetched.current) {
      isImportantFetched.current = true;
      fetchImportantTasks(); //
    }
  }, [selectedTab, fetchTasks, fetchImportantTasks]);
  const initialTime =
    selectedTab === 'ongoing'
      ? convertToSeconds(task.due_time)
      : convertToSeconds(task.due_datetime);

  const [remainingTime, setRemainingTime] = useState<number>(initialTime);
  const [isOverdue, setIsOverdue] = useState(false);
  const [notified, setNotified] = useState(false); // 알림 상태 추가

  useEffect(() => {
    const updateRemainingTime = () => {
      if (remainingTime <= 0) {
        setIsOverdue(true);
        return;
      }

      setRemainingTime((prev) => prev - 1);

      // 1시간 전 알림 (한 번만 실행)
      if (
        task.notification === 'ON' &&
        remainingTime == 3600 && // 1시간 이하
        !notified &&
        Notification.permission === 'granted'
      ) {
        new Notification('과제 마감 알림', {
          body: `🔔 '${task.title}' 과제가 1시간 후 마감됩니다!`,
        });
        setNotified(false); // 한 번만 실행되도록 설정
      }
    };

    const interval = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(interval);
  }, [remainingTime, notified, task]);

  useEffect(() => {
    // 알림 권한 요청
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return '과제 마감됨';
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  function convertToSeconds(timeString: string) {
    if (!timeString) return 0;

    if (selectedTab === 'ongoing') {
      const timeMatch = timeString.match(/(\d{1,2})h (\d{1,2})m/);
      if (timeMatch) {
        const hours = parseInt(timeMatch[1], 10) * 3600;
        const minutes = parseInt(timeMatch[2], 10) * 60;
        return hours + minutes;
      }
    }

    const timeMatch = timeString.match(/(-?\d+)d (-?\d+)h (-?\d+)m (-?\d+)s/);
    if (timeMatch) {
      const days = parseInt(timeMatch[1]) * 86400;
      const hours = parseInt(timeMatch[2]) * 3600;
      const minutes = parseInt(timeMatch[3]) * 60;
      const seconds = parseInt(timeMatch[4]);
      return days + hours + minutes + seconds;
    }
    return 0;
  }

  return (
    <TaskBlockContainer onClick={() => onEdit(task.assignmentId)}>
      <TaskBlock color={task.color}>
        <TaskInfo>{task.title}</TaskInfo>
        <TaskInfo isOverdue={isOverdue}>
          {isOverdue ? '과제 마감됨' : formatTime(remainingTime)}
        </TaskInfo>
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation();
          onComplete(task.assignmentId);
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
};
