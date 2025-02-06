import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAuthStore from '../../../store/authStore';
import { Task } from '../../../types'; //task타입 정의가 통일되어야 하는가?
import { axiosInstance } from '../../../apis/axios-instance';
import axios from 'axios';

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

const StoredTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchStoredTasks = async () => {
      if (!token) {
        setError('로그인이 필요합니다.');
        window.location.href = '/login';
        return;
      }

      const queryParams = new URLSearchParams({
        page: '1',
        size: '5',
        sort: 'createdAt',
      }).toString();

      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(
          `/api/assignment/store?${queryParams}`
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

    fetchStoredTasks();
  }, [token]);

  useEffect(() => {
    if (tasks.length === 0) {
      console.log('예제 데이터 적용');
      setTasks([
        {
          date: '2025-02-10',
          StoredTaskdelay: '유효',
          description: 'React 프로젝트 제출',
          time: '',
          delay: '',
          status: undefined,
        },
        {
          date: '2025-02-15',
          StoredTaskdelay: '만료',
          description: 'TypeScript 강의 듣기',
          time: '',
          delay: '',
          status: undefined,
        },
        {
          date: '2025-02-20',
          StoredTaskdelay: '유효',
          description: '스터디 리포트 작성',
          time: '',
          delay: '',
          status: undefined,
        },
      ]);
    }
  }, [tasks]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

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

        {tasks.map((task, index) => {
          const isValid = task.StoredTaskdelay === '유효';
          return (
            <WhiteBox key={index}>
              <TaskRow>
                <div>{task.date}</div>
                <TaskStatus isValid={isValid}>
                  {task.StoredTaskdelay}
                </TaskStatus>
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
