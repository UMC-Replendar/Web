import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';
import { useInView } from 'react-intersection-observer';
import { IHistoryAllContent, IPage } from '../../../types';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteData } from '../../../hooks/useGetInfiniteData';
import useDebounce from '../../../hooks/useDebounce';
import { HistoryAssignmentSkeleton } from '../../skeleton';

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
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 100px;
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

const Message = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: gray;
  margin-top: 20px;
`;

const HistoryAssignment: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteData(`/api/activity/assignment/notify`, 5);

  const { ref, inView } = useInView({ threshold: 0 });

  //inView 값에 디바운스 적용 (300ms)
  const debouncedInView = useDebounce(inView, 300);

  useEffect(() => {
    if (debouncedInView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [debouncedInView, hasNextPage, isFetching, fetchNextPage]);

  // useMemo로 데이터 필터링 최적화
  const filteredContent = useMemo(
    () =>
      data?.pages?.flatMap((page: IPage<IHistoryAllContent>) =>
        page.content.filter((item) => item.type === '과제 시간 알림')
      ) || [],
    [data]
  );

  if (isPending) {
    return (
      <HistoryContainer background={backgroundColor}>
        <HistoryAssignmentSkeleton count={3} />
      </HistoryContainer>
    );
  }

  return (
    <>
      <HistoryContainer background={backgroundColor}>
        {filteredContent.length === 0 ? (
          <Message>과제 알림 항목이 없습니다.</Message>
        ) : (
          filteredContent.map((item) => (
            <HistoryEntryContainer key={item.createdAt}>
              <HistoryDetails>
                <HistoryText>{item.date}</HistoryText>
                <HistoryText>{item.time}</HistoryText>
                <HistoryText>{item.content}</HistoryText>
              </HistoryDetails>
            </HistoryEntryContainer>
          ))
        )}
        {isFetching && <HistoryAssignmentSkeleton count={3} />}
      </HistoryContainer>
      <Scroll ref={ref}>{isFetching && <ClipLoader color={'black'} />}</Scroll>
    </>
  );
};

export default HistoryAssignment;
