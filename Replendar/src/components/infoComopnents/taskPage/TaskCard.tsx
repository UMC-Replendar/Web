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
const WhiteBox = styled.div<{ showDetails: boolean }>`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  height: ${({ showDetails }) =>
    showDetails ? '90%' : '100%'}; //보였을 때 안보였을 때 높이 차이
`;

const TaskItem = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  showDetails?: boolean; // (기본값: true)
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
        {showDetails && ( // showDetails가 true일 때만 렌더링 보관된 vs 완료된 차이를 위하여
          <StoreContainer>
            <StoreText>마감일</StoreText>
            <StoreText>만료여부</StoreText>
            <StoreText>과제명</StoreText>
          </StoreContainer>
        )}
        <WhiteBox showDetails={showDetails}>
          {tasks.map((task, index) => {
            const isEarly = task.delay.includes('빨랐습니다');
            const isValid = task.delay === '유효';
            return (
              <div key={index}>
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
              </div>
            );
          })}
        </WhiteBox>
      </Box>
    </Container>
  );
};
export default TaskCard;
