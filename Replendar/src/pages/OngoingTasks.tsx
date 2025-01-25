import { useState } from 'react';
import styled from 'styled-components';
import ToggleSwitch from '../components/OngoingComponents/ToggleSwitch';
import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import AddTaskModal from '../modal/AddTaskModal';
import PlusIcon from '../assets/images/PlusIcon.svg';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';

//진행 중인 과제, 과제 추가하기, task box사이의 바텀 마진 입니다.
const MarginBottom = {
  15: '15px',
  20: '20px',
  30: '30px',
};

const PageWrapper = styled.div`
  margin-top: 79px;
  margin-left: 66px;
  margin-right: 163px;
  display: flex;
  flex-direction: column;
`;

const MainPageTitle = styled.h4`
  font-size: 28px;
  margin-bottom: ${MarginBottom[30]};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${MarginBottom[15]};
`;

export const AddButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: none;
  background-color: #e8e8e8;
  color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 13px;
    height: 13px;
  }
`;

const More = styled.div`
  display: flex;
  padding: 0px 6px;
  align-items: center;
  gap: 6px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
`;

const TaskBox = styled.div<{ isScrollable: boolean }>`
  background-color: #fcf6f5;
  border-radius: 20px;
  padding: 36px 60px;
  box-shadow: 0 9px 19.3px rgba(205, 205, 205, 1);
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
  justify-content: space-between;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskBlock = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: flex;
  border-radius: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  width: calc(100% - 135px);
`;

const TaskName = styled.div`
  font-size: 16px;
  color: white;
`;

const RemainingTime = styled.div`
  font-size: 16px;
  color: white;
`;

interface TaskData {
  color: string;
  name: string;
  time: string;
  isToggled: boolean;
}

function OngoingTasks() {
  const [tasks, setTasks] = useState<TaskData[]>([
    { color: '#2BAE66', name: '과제 1', time: '10h 10m 20s', isToggled: false },
    { color: '#2BAE66', name: '과제 2', time: '02h 50m 32s', isToggled: false },
    { color: '#25C26C', name: '과제 3', time: '11h 10m 22s', isToggled: false },
    { color: '#7AC19A', name: '과제 4', time: '11h 10m 22s', isToggled: false },
    { color: '#7AC19A', name: '과제 5', time: '11h 10m 22s', isToggled: false },
    { color: '#7AC19A', name: '과제 6', time: '11h 10m 22s', isToggled: false },
    { color: '#7AC19A', name: '과제 7', time: '11h 10m 22s', isToggled: false },
  ]);

  const [visibleTasksCount, setVisibleTasksCount] = useState(
    tasks.length <= 3 ? tasks.length : 3
  );

  const handleToggle = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isToggled: !task.isToggled } : task
      )
    );
  };

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
      time: deadline,
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

  return (
    <PageWrapper>
      <MainPageTitle>진행 중인 과제</MainPageTitle>
      <ButtonContainer>
        <AddButton onClick={handleOpenModal}>
          과제 추가하기
          <img src={PlusIcon} alt="Plus Icon" />
        </AddButton>
        {tasks.length > 3 && (
          <More onClick={handleShowMore}>
            {visibleTasksCount === tasks.length ? '닫기' : '더보기'}
            <img
              src={
                visibleTasksCount === tasks.length ? UpArrowIcon : DownArrowIcon
              }
              alt={
                visibleTasksCount === tasks.length ? 'Up Arrow' : 'Down Arrow'
              }
            />
          </More>
        )}
      </ButtonContainer>

      <TaskBox isScrollable={tasks.length > 10}>
        {tasks.slice(0, visibleTasksCount).map((task, index) => (
          <Task
            key={index}
            color={task.color}
            name={task.name}
            time={task.time}
            isToggled={task.isToggled}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </TaskBox>

      <CustomCalendar />

      {isModalOpen && (
        <AddTaskModal onClose={handleCloseModal} onAddTask={handleAddTask} />
      )}
    </PageWrapper>
  );
}

interface TaskProps {
  color: string;
  name: string;
  time: string;
  isToggled: boolean;
  onToggle: () => void;
}

function Task({ color, name, time, isToggled, onToggle }: TaskProps) {
  return (
    <TaskBlockContainer>
      <TaskBlock color={color}>
        <TaskName>{name}</TaskName>
        <RemainingTime>{time}</RemainingTime>
      </TaskBlock>
      <ToggleSwitch isOn={isToggled} onToggle={onToggle} />
    </TaskBlockContainer>
  );
}

export default OngoingTasks;
