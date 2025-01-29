import styled from 'styled-components';
import BlueButton from '../../blueButton';
import { Task } from '../../../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`;

const Box = styled.div`
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`;

const WhiteBox = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px; //항목 별 간격 유지
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskDetails = styled.div`
  display: flex;
  gap: 161px;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const DelayMessage = styled.div<{ isEarly: boolean }>`
  width: 100%;
  text-align: right;
  color: ${({ isEarly }) => (isEarly ? '#4CAF50' : '#EB8A8A')};
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  margin-top: 5px;
`;

const TaskText = styled.div`
  color: black;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
`;

const StoreContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 161px;
  padding: 20px;
`;

const StoreText = styled.div`
  color: black;
  font-size: 19px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
`;

const TaskStatus = styled.div<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? '#3982E2' : '#666666')};
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
`;

interface TaskCardProps {
  imageSrc: string;
  title: string;
  tasks: Task[];
  showDetails?: boolean;
}

const TaskCard = ({
  imageSrc,
  title,
  tasks,
  showDetails = true,
}: TaskCardProps) => {
  return (
    <Container>
      <Wrapper>
        <Image src={imageSrc} alt="Task Icon" />
        <Text>{title}</Text>
      </Wrapper>

      <Box>
        {showDetails && (
          <StoreContainer>
            <StoreText>마감일</StoreText>
            <StoreText>만료여부</StoreText>
            <StoreText>과제명</StoreText>
          </StoreContainer>
        )}

        {tasks.map((task, index) => {
          const isEarly = task.delay.includes('빨랐습니다');
          const isValid = task.delay === '유효';
          return (
            <WhiteBox key={index}>
              {' '}
              <TaskItem>
                <TaskDetails>
                  <TaskText>{task.date}</TaskText>
                  {!showDetails && <TaskText>{task.time}</TaskText>}
                  {showDetails && (
                    <TaskStatus isValid={isValid}>{task.delay}</TaskStatus>
                  )}
                  <TaskText>{task.description}</TaskText>
                </TaskDetails>
                {!showDetails && (
                  <BlueButton status={task.status}>{task.status}</BlueButton>
                )}
              </TaskItem>
              {!showDetails && (
                <DelayMessage isEarly={isEarly}>{task.delay}</DelayMessage>
              )}
            </WhiteBox>
          );
        })}
      </Box>
    </Container>
  );
};

export default TaskCard;
