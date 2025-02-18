import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';
import { useInView } from 'react-intersection-observer';
import { IHistoryAllContent, IPage } from '../../../types';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteData } from '../../../hooks/useGetInfiniteData';

const HistoryContainer = styled.div<{ background: string }>`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({ background }) => background};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HistoryEntryContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 50px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const HistoryText = styled.div`
  min-width: 100px;
  text-align: center;
`;

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const HistoryAssignment: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteData(`/api/activity/assignment/notify`, 5);

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
    <>
      <HistoryContainer background={backgroundColor}>
        {data?.pages?.flatMap((page: IPage<IHistoryAllContent>) =>
          page.content
            .filter((item) => item.type === '과제 시간 알림') // "과제 시간 알림" 필터링
            .map((item: IHistoryAllContent) => (
              <HistoryEntryContainer key={item.createdAt}>
                <HistoryDetails>
                  <HistoryText>{item.date}</HistoryText>
                  <HistoryText>{item.time}</HistoryText>
                  <HistoryText>{item.content}</HistoryText>
                </HistoryDetails>
              </HistoryEntryContainer>
            ))
        )}
        {isFetching && <div>스켈레톤 UI (추가 로딩 중...)</div>}
      </HistoryContainer>
      <Scroll ref={ref}>{isFetching && <ClipLoader color={'black'} />}</Scroll>
    </>
  );
};

export default HistoryAssignment;
