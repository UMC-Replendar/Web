import styled from 'styled-components';

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

const TaskItem = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TaskDetails = styled.div`
  display: flex;
  gap: 100px;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const Status = styled.div`
  padding: 4px 16px;
  background: #73d5ff;
  border-radius: 50px;
  color: white;
  font-size: 13px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
`;

const DelayMessage = styled.div<{ isEarly: boolean }>`
  width: 100%;
  text-align: right;
  color: ${({ isEarly }) =>
    isEarly ? '#4CAF50' : '#EB8A8A'}; // 초록색 or 빨간색
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  margin-top: 5px;
`;

interface TaskCardProps {
  imageSrc: string;
  title: string;
  tasks: { date: string; time: string; description: string; delay: string }[];
}

const TaskCard = ({ imageSrc, title, tasks }: TaskCardProps) => {
  return (
    <Container>
      <Wrapper>
        <Image src={imageSrc} alt="Task Icon" />
        <Text>{title}</Text>
      </Wrapper>
      <Box>
        {tasks.map((task, index) => {
          const isEarly = task.delay.includes('빨랐습니다');
          return (
            <div key={index}>
              <TaskItem>
                <TaskDetails>
                  <div>{task.date}</div>
                  <div>{task.time}</div>
                  <div>{task.description}</div>
                </TaskDetails>
                <Status>완료</Status>
              </TaskItem>
              <DelayMessage isEarly={isEarly}>{task.delay}</DelayMessage>
            </div>
          );
        })}
      </Box>
    </Container>
  );
};

export default TaskCard;
