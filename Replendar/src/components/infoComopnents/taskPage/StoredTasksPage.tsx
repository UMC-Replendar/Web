import React from 'react';
import styled from 'styled-components';
import { StoredTask } from '../../../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
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
  padding: 34.5px 37px 30.5px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

const Wrapper = styled.div`
  display: flex;
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

const GridContainer = styled.div`
  display: grid;
  margin-right: 10px;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding: 20px;
  color: black;
`;

const WhiteBox = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const TaskRow = styled.div`
  margin-right: 10px;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  text-align: center;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
  padding: 10px 0;
`;

const TaskStatus = styled.div<{ isValid: boolean }>`
  color: ${({ isValid }) => (isValid ? '#3982E2' : '#666666')};
  font-size: 19px;
  font-weight: 500;
`;

const storedTasks: StoredTask[] = [
  {
    date: '11 / 02',
    delay: '만료',
    description: '~~과~~~~~하기 과제',
  },
  {
    date: '11 / 02',
    delay: '유효',
    description: '~~과~~~~~하기 과제',
  },
];

const StoredTaskPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/InfoIcons/Task.svg" alt="Task Icon" />
        <Text>보관한 과제</Text>
      </Wrapper>

      <Box>
        <GridContainer>
          <div>마감일</div>
          <div>유효 여부</div>
          <div>과제명</div>
        </GridContainer>

        {storedTasks.map((task, index) => {
          const isValid = task.delay === '유효';
          return (
            <WhiteBox key={index}>
              <TaskRow>
                <div>{task.date}</div>
                <TaskStatus isValid={isValid}>{task.delay}</TaskStatus>
                <div>{task.description}</div>
              </TaskRow>
            </WhiteBox>
          );
        })}
      </Box>
    </Container>
  );
};

export default StoredTaskPage;
