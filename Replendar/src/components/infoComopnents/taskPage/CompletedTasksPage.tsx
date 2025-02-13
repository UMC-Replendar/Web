import React, { useEffect } from 'react';
import styled from 'styled-components';
import BlueButton from '../../blueButton';
import { useInView } from 'react-intersection-observer';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteData } from '../../../hooks/useGetInfiniteData';
import { IPage, Task } from '../../../types';
import taskIcon from '../../../assets/images/InfoIcons/Task.svg';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const Box = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
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
const Text = styled.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
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

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CompletedTasksPage: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteData(`/api/assignment/complete`, 5);

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  if (isPending) {
    return <div>스켈레톤 UI (로딩 중...)</div>;
  }

  return (
    <Container>
      <Wrapper>
        <Image src={taskIcon} alt="Task Icon" />
        <Text>완료한 과제</Text>
      </Wrapper>

      <Box background={backgroundColor}>
        {data?.pages?.flatMap((page: IPage<Task>) =>
          page.content.map((item: Task) => {
            console.log('과제 데이터:', item);

            const isEarly = !item.due_datetime.includes('-'); // "-"가 없으면 빠른 제출
            const formattedTime = item.due_datetime.replace('-', '').trim(); // "-" 제거하여 순수 시간만 표시

            const delayMessage = `과제 제출이 ${
              isEarly
                ? `${formattedTime} 빨랐습니다`
                : `${formattedTime} 늦었습니다`
            }`;

            return (
              <WhiteBox key={item.completionTime}>
                <TaskItem>
                  <TaskDetails>
                    <TaskText>{item.due_date || '미정'}</TaskText>
                    <TaskText>{item.due_time || '미정'}</TaskText>
                    <TaskText>{item.title || '과제 없음'}</TaskText>
                  </TaskDetails>
                  <BlueButton status="완료">완료</BlueButton>
                </TaskItem>
                <DelayMessage isEarly={isEarly}>{delayMessage}</DelayMessage>
              </WhiteBox>
            );
          })
        )}
      </Box>

      {isFetching && <div>스켈레톤 UI (추가 로딩 중...)</div>}
      <Scroll ref={ref}>{isFetching && <ClipLoader color={'black'} />}</Scroll>
    </Container>
  );
};

export default CompletedTasksPage;
