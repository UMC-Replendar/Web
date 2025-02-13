import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../apis/axios-instance';
import BlueButton from '../blueButton';
import Plus from '../../assets/images/PlusIcon.svg';

const Title = styled.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  margin-bottom: 17px;
`;

const HistoryContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 34.5px 109px 39.5px 37px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HistoryEntryContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const HistoryText = styled.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const More = styled.img`
  margin-top: 8px;
  width: 10px;
  height: 10px;
`;

const MoreText = styled.p`
  font-size: 14px;
  color: gray;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  justify-content: flex-end;
  cursor: pointer;
`;

const HistoryList = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['history-preview'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/activity', {
        params: { page: 1, size: 3, sort: 'CreatedAt' },
      });
      return response.data.content || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류 발생!</div>;

  return (
    <div>
      <TitleWrapper>
        <Title>히스토리</Title>

        <MoreContainer>
          <MoreText onClick={() => navigate('/info/history')}>더보기</MoreText>
          <More onClick={() => navigate('/info/history')} src={Plus} />
        </MoreContainer>
      </TitleWrapper>

      <HistoryContainer>
        {data.length > 0 ? (
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
    </div>
  );
};

export default HistoryList;
