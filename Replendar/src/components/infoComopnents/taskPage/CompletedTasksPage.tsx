import styled from 'styled-components';
import BlueButton from '../../blueButton';
import { Task } from '../../../types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from '../../../store/authStore';
import { axiosInstance } from '../../../apis/axios-instance';
import { useNavigate } from 'react-router-dom';

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

const CompletedTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/');
        return;
      }
      //페이지 방식 수정 필요
      const queryParams = new URLSearchParams({
        page: '1',
        size: '5',
        sort: 'completionTime',
      }).toString();

      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(
          `/api/assignment/complete?${queryParams}`
        );

        console.log('API 응답:', response.data);

        //임시
        const fetchedTasks = response.data.result.content.map((item: any) => ({
          date: item.date || '미정',
          time: item.time || '미정',
          description: item.description || '설명 없음',
          delay: item.delay || '지연 정보 없음',
          status: item.status === '' ? undefined : item.status,
        }));

        setTasks(fetchedTasks);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || '서버 오류 발생');
        } else {
          setError('예기치 않은 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedTasks();
  }, [token]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/Worked.svg" alt="Task Icon" />
        <Text>완료한 과제</Text>
      </Wrapper>

      <Box>
        {tasks.length === 0 ? (
          <p>
            완료된 과제가 없습니다. <br />
            완료된 과제가 있을 때 넘겨받은 content 구조 보고 수정 필요할 듯
          </p>
        ) : (
          tasks.map((task, index) => {
            const isEarly = task.delay.includes('빨랐습니다');
            return (
              <WhiteBox key={index}>
                <TaskItem>
                  <TaskDetails>
                    <TaskText>{task.date}</TaskText>
                    <TaskText>{task.time}</TaskText>
                    <TaskText>{task.description}</TaskText>
                  </TaskDetails>
                  <BlueButton status={undefined}>
                    {task.status ?? '미확인'}
                  </BlueButton>
                </TaskItem>
                <DelayMessage isEarly={isEarly}>{task.delay}</DelayMessage>
              </WhiteBox>
            );
          })
        )}
      </Box>
    </Container>
  );
};

export default CompletedTasksPage;
