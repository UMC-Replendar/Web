//양식 확인용
//연결은 HistoryPage.tsx 완성 후

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BlueButton from '../blueButton';

interface HistoryEntry {
  date: string;
  time: string;
  task: string;
  status: '완료' | '미완료';
}

const Title = styled.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  word-wrap: break-word;
  margin-bottom: 17px;
  cursor: pointer;
`;

const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 39.5px 37px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
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
  gap: 100px;
  align-items: center;
`;

const HistoryText = styled.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  color: black;
`;

function HistoryList() {
  const navigate = useNavigate();
  const historyEntries: HistoryEntry[] = [
    {
      date: '11/02',
      time: '23:55',
      task: '000님이 ~~~~~~~하기 과제',
      status: '완료',
    },
    {
      date: '11/02',
      time: '23:55',
      task: '000님이 ~~~~~~~하기 과제',
      status: '미완료',
    },
  ];

  return (
    <div>
      <Title onClick={() => navigate('/history')}>히스토리</Title>
      <HistoryContainer onClick={() => navigate('/history')}>
        {historyEntries.map((entry, index) => (
          <HistoryEntryContainer key={index}>
            <HistoryDetails>
              <HistoryText>{entry.date}</HistoryText>
              <HistoryText>{entry.time}</HistoryText>
              <HistoryText>{entry.task}</HistoryText>
            </HistoryDetails>
            <BlueButton
              status={entry.status === '완료' ? '등록됨' : '내 일정에 등록'}
            >
              {entry.status}
            </BlueButton>
          </HistoryEntryContainer>
        ))}
      </HistoryContainer>
    </div>
  );
}

export default HistoryList;
