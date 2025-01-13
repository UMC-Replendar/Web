import styled from 'styled-components';
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

const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const ToggleSwitch = styled.input`
  appearance: none;
  width: 125px;
  height: 60px;
  background-color: #848484;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:checked {
    background-color: #22bd68;
  }

  &::before {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  &:checked::before {
    transform: translateX(65px);
  }
`;

interface TaskProps {
  color: string;
  name: string;
  time: string;
}

function Task({ color, name, time }: TaskProps) {
  return (
    <TaskBlockContainer>
      <TaskBlock color={color}>
        <TaskName>{name}</TaskName>
        <RemainingTime>{time}</RemainingTime>
      </TaskBlock>
      <ToggleSwitchContainer>
        <ToggleSwitch />
      </ToggleSwitchContainer>
    </TaskBlockContainer>
  );
}

function OngoingTasks() {
  return (
    <PageWrapper>
      <MainPageTitle>진행 중인 과제</MainPageTitle>
      <ButtonContainer>
        <AddButton>과제 추가하기</AddButton>
        <AddButtonWithBorder>과제 추가하기</AddButtonWithBorder>
        <More>더보기</More>
      </ButtonContainer>

      <TaskBox>
        <Task color="#2BAE66" name="과제 1" time="10h 10m 20s" />
        <Task color="#25C26C" name="과제 2" time="10h 10m 22s" />
        <Task color="#7AC19A" name="과제 3" time="10h 10m 22s" />
        <Task color="#9DCFB4" name="과제 4" time="10h 10m 22s" />
      </TaskBox>

      <CustomCalendar />
    </PageWrapper>
  );
}

export default OngoingTasks;
