import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { axiosInstance } from '../../apis/axios-instance';
//지피티 지린다
const GetGuestBook = () => {
  const [guestBook, setGuestBook] = useState<
    {
      id: number;
      nickname: string;
      name: string;
      teamName: string;
      teamPart: string;
      content: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuestBook = async () => {
      try {
        const response = await axiosInstance.get('/api/guestbook');
        if (response.data.isSuccess) {
          setGuestBook(response.data.result); // `result` 배열만 추출
        } else {
          setError('데이터를 불러오는 데 실패했습니다.');
        }
      } catch (err) {
        console.error('데이터 가져오기 실패:', err);
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchGuestBook();
  }, []);

  if (loading) return <Message>로딩 중...</Message>;
  if (error) return <Message>{error}</Message>;

  return (
    <Container>
      <Title>📖 방명록</Title>
      {guestBook.length > 0 ? (
        <List>
          {guestBook.map((entry) => (
            <ListItem key={entry.id}>
              <Header>
                <Nickname>{entry.nickname}</Nickname> (<Name>{entry.name}</Name>
                )
              </Header>
              <TeamInfo>
                {entry.teamName} / {entry.teamPart}
              </TeamInfo>
              <Content>📝 {entry.content}</Content>
            </ListItem>
          ))}
        </List>
      ) : (
        <Message>아직 방명록이 없습니다.</Message>
      )}
    </Container>
  );
};

export default GetGuestBook;

// 스타일 정의
const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Nickname = styled.span`
  color: #2c3e50;
`;

const Name = styled.span`
  color: #7f8c8d;
  font-size: 18px;
`;

const TeamInfo = styled.div`
  font-size: 16px;
  color: #3498db;
  margin-top: 5px;
`;

const Content = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

const Message = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: gray;
  text-align: center;
`;
