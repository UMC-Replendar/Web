import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../apis/axios-instance';
import BlueButton from '../../blueButton';
import styled from 'styled-components';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';

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

const HistoryAll: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['activity', '전체'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/activity', {
        params: { page: 1, size: 15, sort: 'CreatedAt' },
      });

      console.log(`전체 API Response:`, response.data);
      return response.data.content || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <HistoryContainer background={backgroundColor}>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>데이터를 불러오는 중 오류 발생!</div>
      ) : data.length > 0 ? (
        data.map((entry: any, index: number) => (
          <HistoryEntryContainer key={index}>
            <HistoryDetails>
              <HistoryText>{entry.date}</HistoryText>
              <HistoryText>{entry.time}</HistoryText>
              <HistoryText>{entry.content}</HistoryText> {/* 3개만 표시 */}
            </HistoryDetails>
            <BlueButton status={entry.check ? '등록됨' : '내 일정에 등록'}>
              {entry.check ? '등록됨' : '내 일정에 등록'}
            </BlueButton>
          </HistoryEntryContainer>
        ))
      ) : (
        <div>기록이 없습니다.</div>
      )}
    </HistoryContainer>
  );
};

export default HistoryAll;
