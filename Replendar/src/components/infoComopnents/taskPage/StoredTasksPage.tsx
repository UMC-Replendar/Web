import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Task, IPage } from '../../../types';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';

import taskIcon from '../../../assets/images/InfoIcons/Task.svg';
import { useGetInfiniteData } from '../../../hooks/useGetInfiniteData';
import { useInView } from 'react-intersection-observer';
import ClipLoader from 'react-spinners/ClipLoader';

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

const Box = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
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

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StoredTaskPage: React.FC = () => {
  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteData(`/api/assignment/store`, 5);

  const { ref, inView } = useInView({ threshold: 0 });

  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

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
        <Text>보관한 과제</Text>
      </Wrapper>

      <Box background={backgroundColor}>
        <GridContainer>
          <div>마감일</div>
          <div>유효 여부</div>
          <div>과제명</div>
        </GridContainer>

        {data?.pages?.flatMap((page: IPage<Task>) =>
          page.content.map((item: Task) => {
            console.log('과제 데이터:', item);

            // 마감일 및 시간 변환
            const dueDateTime = new Date(`${item.due_date} ${item.due_time}`);
            const now = new Date(); // 현재 시간
            const isValid = now < dueDateTime; // 현재 시간보다 이후면 유효

            return (
              <WhiteBox key={item.createdAt}>
                <TaskRow>
                  <div>
                    {item.due_date} {item.due_time}
                  </div>
                  <TaskStatus isValid={isValid}>
                    {isValid ? '유효' : '만료됨'}
                  </TaskStatus>
                  <div>{item.title}</div>
                </TaskRow>
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

export default StoredTaskPage;
