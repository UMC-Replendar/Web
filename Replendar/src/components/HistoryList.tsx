import styled from 'styled-components';

const CustomDiv = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  margin-left: 20%;
`;
const Container = styled.div`
  background-color: lightgrey;
  margin-top: 10px;
`;

function HistoryList() {
  const historyData = [
    { date: '11/02', time: '23:55', task: '~~~과제', status: '미완료' },
    { date: '11/01', time: '23:48', task: '~~~과제', status: '완료' },
  ];

  return (
    <CustomDiv className="history-list">
      <div>히스토리</div>
      <Container>
        <thead>
          <tr>
            <th>날짜</th>
            <th>시간</th>
            <th>과제</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.task}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Container>
    </CustomDiv>
  );
}

export default HistoryList;
