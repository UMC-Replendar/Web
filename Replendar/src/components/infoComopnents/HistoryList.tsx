import styled from 'styled-components';

interface HistoryEntry {
  date: string;
  time: string;
  task: string;
  status: '완료' | '미완료';
}

interface StatusIndicatorProps {
  status: '완료' | '미완료';
}

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    padding: 8px;
    text-align: center;
  }
`;

const StatusIndicator = styled.div<StatusIndicatorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; //center 안먹음..
  height: 30px;
  background: ${({ status }) => (status === '미완료' ? '#FF6C93' : '#4CAF50')};
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
`;

function HistoryList() {
  const historyEntries: HistoryEntry[] = [
    { date: '11/02', time: '23:55', task: '~~~과제', status: '완료' },
    { date: '11/01', time: '23:48', task: '~~~과제', status: '미완료' },
  ];

  return (
    <HistoryContainer>
      <HistoryTitle>히스토리</HistoryTitle>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>시간</th>
              <th>과제</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {historyEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.time}</td>
                <td>{entry.task}</td>
                <td>
                  <StatusIndicator status={entry.status}>
                    {entry.status}
                  </StatusIndicator>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </HistoryContainer>
  );
}

export default HistoryList;
