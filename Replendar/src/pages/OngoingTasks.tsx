import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import AddTaskModal from '../modal/AddTaskModal';
import PlusIcon from '../assets/images/PlusIcon.svg';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';
import EditTaskModal from '../modal/EditTaskModal';
import useModalStore from '../store/modalStore';

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

const MainPageTitleBox = styled.div`
  display: flex;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background: #fcf6f5;
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

const TaskBox = styled.div<{ isScrollable: boolean }>`
  border-radius: 0px 20px 20px 20px;
  background: #fcf6f5;
  padding: 52px 64px;
  ${({ isScrollable }) =>
    isScrollable
      ? `
    max-height: 744px;
    overflow-y: auto;
  `
      : `
    max-height: none;
    overflow-y: visible;
  `}
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
`;

const TaskInfo = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TaskCompleteButton = styled.button`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background: #73d5ff;
  color: white;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;

  white-space: nowrap;
`;

interface TaskData {
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
}

function OngoingTasks() {
  const [tasks, setTasks] = useState<TaskData[]>([
    {
      color: '#2BAE66',
      name: '과제 1',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#2BAE66',
      name: '과제 2',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#25C26C',
      name: '과제 3',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#7AC19A',
      name: '과제 4',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#7AC19A',
      name: '과제 5',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#7AC19A',
      name: '과제 6',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
    {
      color: '#7AC19A',
      name: '과제 7',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
    },
  ]);

  const [visibleTasksCount, setVisibleTasksCount] = useState(
    tasks.length <= 3 ? tasks.length : 3
  );
  const { openModal, closeModal } = useModalStore(); // useModalStore 추가했어요요

  useEffect(() => {
    const updateRemainingTimes = () => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          const deadlineDate = new Date(task.deadline);
          const now = new Date();
          const diffMs = deadlineDate.getTime() - now.getTime();
          const hours = Math.floor(diffMs / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
          return {
            ...task,
            remainingTime: `${hours}h ${minutes}m ${seconds}s`,
          };
        })
      );
    };

    updateRemainingTimes();
    const interval = setInterval(updateRemainingTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShowMore = () => {
    if (visibleTasksCount < tasks.length) {
      setVisibleTasksCount(tasks.length);
    } else {
      setVisibleTasksCount(3);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (name: string, deadline: string) => {
    const newTask: TaskData = {
      color: '#7AC19A',
      name,
      deadline,
      remainingTime: '',
      isToggled: false,
    };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      const shouldExpand = updatedTasks.length > 3;
      setVisibleTasksCount(shouldExpand ? updatedTasks.length : 3);
      return updatedTasks;
    });
    setIsModalOpen(false);
  };

  const handleCompleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  const handleEditTask = (task: TaskData) => {
    console.log('Edit Task Clicked:', task); // 디버깅용 로그
    openModal(
      <EditTaskModal
        task={task}
        onClose={closeModal}
        onComplete={() => handleCompleteTask(tasks.indexOf(task))}
      />
    ); // EditTaskModal 열기
  };

  return (
    <PageWrapper>
      <MainPageTitleWrapper>
        <LeftTitles>
          <MainPageTitleBox>
            <MainPageTitle>진행 중인 과제</MainPageTitle>
          </MainPageTitleBox>
          <MainPageTitleBox style={{ background: '#E8E8E8' }}>
            <MainPageTitle>중요한 과제</MainPageTitle>
          </MainPageTitleBox>
        </LeftTitles>

        <div style={{ display: 'flex', gap: '31px' }}>
          <AddButton onClick={handleOpenModal}>
            과제 추가하기
            <img src={PlusIcon} alt="Plus Icon" />
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

      <TaskBox isScrollable={tasks.length > 10}>
        {tasks.slice(0, visibleTasksCount).map((task, index) => (
          <Task
            key={index}
            color={task.color}
            name={task.name}
            remainingTime={task.remainingTime || ''}
            onComplete={() => handleCompleteTask(index)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </TaskBox>

      <CustomCalendar
        tasks={tasks.map((task) => ({
          name: task.name,
          deadline: task.deadline,
        }))}
      />

      {isModalOpen && (
        <AddTaskModal onClose={handleCloseModal} onAddTask={handleAddTask} />
      )}
    </PageWrapper>
  );
}

interface TaskProps {
  color: string;
  name: string;
  remainingTime: string;
  onComplete: () => void;
  onEdit: () => void; // 수정 버튼 이벤트 추가
}

function Task({ color, name, remainingTime, onComplete, onEdit }: TaskProps) {
  return (
    <>
      <TaskBlockContainer onClick={onEdit}>
        <TaskBlock color={color}>
          <TaskInfo>{name}</TaskInfo>
          <TaskInfo>{remainingTime}</TaskInfo>
        </TaskBlock>
        <TaskCompleteButton
          onClick={(e) => {
            e.stopPropagation(); // 이벤트 버블링 방지
            onComplete();
          }}
        >
          과제 완료
        </TaskCompleteButton>
      </TaskBlockContainer>
    </>
  );
}

export default OngoingTasks;
