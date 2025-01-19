import { useState } from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import CustomCalendar from './CustomCalendar';

//진행 중인 과제, 과제 추가하기, task box사이의 바텀 마진 입니다.
const MarginBottom = {
  20: '20px',
};

const PageWrapper = styled.div`
  margin-top: 40px;
  margin-left: 92px;
  margin-right: 80px;
`;

const MainPageTitle = styled.h4`
  font-size: 28px;
  /* margin: 125px 0 19px 279px; */
  /* margin-top: 50px; */
  margin-bottom: ${MarginBottom[20]};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin-left: 274px; */
  /* margin-bottom: 20px; */
  margin-bottom: ${MarginBottom[20]};
`;

const AddButton = styled.button`
  padding: 14px 24px;
  font-size: 16px;
  color: black;
  background-color: #e8e8e8;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 12px;
`;

const AddButtonWithBorder = styled(AddButton)`
  color: #666666;
  background-color: white;
  border: 2px dashed #bbbbbb;
`;

const More = styled.span`
  padding: 14px 24px;
  font-size: 16px;
  color: #666666;
  cursor: pointer;
  margin-left: auto;
  /* margin-right: 106px; */
`;

const TaskBox = styled.div`
  background-color: #fcf6f5;
  border-radius: 10px;
  /* margin: 0 80px 49px 278px; */
  padding: 62px 86px;
  box-shadow: 0 9px 19.3px rgba(205, 205, 205, 1);
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
  border-radius: 50px;
  display: flex;
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
    { color: '#25C26C', name: '과제 2', time: '10h 10m 22s', isToggled: false },
    { color: '#7AC19A', name: '과제 3', time: '10h 10m 22s', isToggled: false },
    { color: '#9DCFB4', name: '과제 4', time: '10h 10m 22s', isToggled: false },
  ]);

  const handleToggle = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isToggled: !task.isToggled } : task
      )
    );
  };

  return (
    <PageWrapper>
      <MainPageTitle>진행 중인 과제</MainPageTitle>
      <ButtonContainer>
        <AddButton>과제 추가하기</AddButton>
        <AddButtonWithBorder>과제 추가하기</AddButtonWithBorder>
        <More>더보기</More>
      </ButtonContainer>

      <TaskBox>
        {tasks.map((task, index) => (
          <Task
            key={task.name}
            color={task.color}
            name={task.name}
            time={task.time}
            isToggled={task.isToggled}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </TaskBox>

      <CustomCalendar />
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
