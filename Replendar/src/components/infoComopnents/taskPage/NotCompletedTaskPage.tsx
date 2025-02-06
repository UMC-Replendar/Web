import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlueButton from '../../blueButton';
import { Task } from '../../../types';
import useAuthStore from '../../../store/authStore';
import { axiosInstance } from '../../../apis/axios-instance';
import axios from 'axios';

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
const TaskDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const TaskText = styled.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;

  /* 개별 요소 너비 설정 */
  &:nth-child(1) {
    /* 날짜 */
    flex-basis: 10%;
    text-align: center;
  }

  &:nth-child(2) {
    /* 과제명 */
    flex-basis: 60%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; /* 너무 길 경우 한 줄로 */
  }
`;

const NotCompletedTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchUnfinishedTasks = async () => {
      if (!token) {
        setError('로그인이 필요합니다.');
        window.location.href = '/login';
        return;
      }

      const queryParams = new URLSearchParams({
        page: '1',
        size: '5',
        sort: 'dueDate',
      }).toString();

      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(
          `/api/assignment/unfinished?${queryParams}`
        );

        console.log('API 응답:', response.data);

        // ✅ API 응답 데이터 매핑
        const fetchedTasks = response.data.result.content.map((item: any) => ({
          date: item.deadline || '미정',
          delay: item.isValid ? '유효' : '만료됨',
          description: item.title || '과제 없음',
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

    fetchUnfinishedTasks();
  }, [token]);

  useEffect(() => {
    if (tasks.length === 0) {
      console.log('예제 데이터 적용');
      setTasks([
        {
          date: '2025-02-10',
          StoredTaskdelay: undefined,
          description: 'React 프로젝트 제출',
          time: '23:59',
          delay: '',
          status: '미완료',
        },
        {
          date: '2025-02-15',
          StoredTaskdelay: undefined,
          description: 'TypeScript 강의 듣기',
          time: '23:59',
          delay: '',
          status: '미완료',
        },
        {
          date: '2025-02-20',
          StoredTaskdelay: undefined,
          description: '스터디 리포트 작성',
          time: '23:59',
          delay: '',
          status: '미완료',
        },
      ]);
    }
  }, [tasks]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/Worked.svg" alt="Task Icon" />
        <Text>미완료 과제</Text>
      </Wrapper>

      <Box>
        {tasks.map((task, index) => {
          return (
            <WhiteBox key={index}>
              <TaskItem>
                <TaskDetails>
                  <TaskText>{task.date}</TaskText>

                  <TaskText>{task.description}</TaskText>
                </TaskDetails>
                <BlueButton status={task.status}>{task.status}</BlueButton>
              </TaskItem>
            </WhiteBox>
          );
        })}
      </Box>
    </Container>
  );
};

export default NotCompletedTaskPage;
