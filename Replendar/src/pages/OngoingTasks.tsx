import { useState, useEffect } from 'react';
import useTaskStore from '../store/useTaskStore';
import useModalStore from '../store/modalStore';
import { fetchTaskDetail, completeTask } from '../apis/taskApi';
import styled from 'styled-components';
import TaskItem from './TaskItem';
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

/*
interface TaskItem {
  id: number;
  assId: number;
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
*/

// import { useProfileStore } from '../store/profileStore';
// import { sendNotification } from '../hooks/useNotification';

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

  const handleEditTask = async (id: number) => {
    try {
      const taskDetail = await fetchTaskDetail(id);
      openModal(<EditTaskModal task={taskDetail} onClose={closeModal} />);
    } catch (error) {
      console.error('과제 상세 조회 오류:', error);
    }
  };

  const handleCompleteTask = async (id: number) => {
    try {
      await completeTask(id);

      // 진행 중 과제 목록 갱신
      await fetchTasks();

      // 중요한 과제 목록에서 해당 과제 제거
      useTaskStore.setState((state) => ({
        importantTasks: [
          ...state.importantTasks.filter((task) => task.id !== id),
        ],
      }));

      console.log('완료된 과제 삭제됨:', id);
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
            key={task.assignmentId || task.assId}
            task={{
              ...task,
              id: task.assId ?? task.assignmentId, // 동일한 값을 id로 통합
              color: index < 4 ? taskColors[index] : themeColors[4],
              isOverdue: task.isOverdue, // ✅ 마감 여부 전달
            }}
            onComplete={() =>
              handleCompleteTask(task.assId ?? task.assignmentId)
            }
            onEdit={() => handleEditTask(task.assId ?? task.assignmentId)}
            /*
            onComplete={handleCompleteTask}
            onEdit={handleEditTask} */
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
