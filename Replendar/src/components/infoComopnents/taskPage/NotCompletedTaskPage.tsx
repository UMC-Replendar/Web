import React from 'react';
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
  margin-bottom: 1px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const TaskDetails = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const TaskText = styled.div`
  color: black;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;

  text-align: left;
`;

const DelayMessage = styled.div<{ isEarly: boolean }>`
  width: 100%;
  text-align: right;
  color: ${({ isEarly }) => (isEarly ? '#4CAF50' : '#EB8A8A')};
  font-size: 19px;
  font-weight: 500;
  margin-top: 5px;
`;

const NotCompletedTaskPage: React.FC = () => {
  const tasks: Task[] = [
    {
      date: '11 / 02',
      time: '23:55',
      description: '000님이 ~~~~~~~하기 과제',
      delay: '',
      status: '미완료',
    },
    {
      date: '11 / 03',
      time: '22:30',
      description: '000님이 ~~~~~~~하기 과제',
      delay: '',
      status: '미완료',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/Worked.svg" alt="Task Icon" />
        <Text>미완료 과제</Text>
      </Wrapper>

      <Box>
        {tasks.map((task, index) => {
          const isEarly = task.delay.includes('빨랐습니다');
          return (
            <WhiteBox key={index}>
              <TaskItem>
                <TaskDetails>
                  <TaskText>{task.date}</TaskText>
                  <TaskText>{task.time}</TaskText>
                  <TaskText>{task.description}</TaskText>
                </TaskDetails>
                <BlueButton status={task.status}>{task.status}</BlueButton>
              </TaskItem>
              <DelayMessage isEarly={isEarly}>{task.delay}</DelayMessage>
            </WhiteBox>
          );
        })}
      </Box>
    </Container>
  );
};

export default NotCompletedTaskPage;
