import { Container, TitleContainer, TitleIcon, TitleSpan } from './AskPage';
import NotifyIcon from '../../assets/images/SettingsPageIcons/NotifyIcon.svg';
import styled from 'styled-components';

export default function NotifyPage() {
  const notices = [
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
    { date: '12 / 13', title: 'ver 1.01 Replendar 패치' },
  ];

  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={NotifyIcon} alt="공지사항 아이콘" />
        <TitleSpan>공지사항</TitleSpan>
      </TitleContainer>
      <NoticeContainer>
        <NoticeTable>
          <TableHeader>날짜</TableHeader>
          <TableHeader>제목</TableHeader>
          <thead></thead>
          <tbody>
            {notices.map((notice, index) => (
              <TableRow key={index}>
                <TableCell>{notice.date}</TableCell>
                <TableCell>{notice.title}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </NoticeTable>
      </NoticeContainer>
    </Container>
  );
}

// 스타일 정의

const NoticeContainer = styled.div`
  background: #fcf6f5;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1562px;
  height: 771px;
`;

const NoticeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: white;
  border-radius: 20px;
`;

const TableHeader = styled.th`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  padding: 15px;
  background-color: #fcf6f5;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  color: #555;
  padding: 15px;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* border-bottom: 1px solid #eee; */
`;
