import React, { useState } from 'react';
import styled from 'styled-components';
import BlueButton from '../blueButton';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 70px;
  margin-left: 79px;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: black;
`;

const Menu = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<{ active: boolean }>`
  height: 38px;
  width: 135px;
  padding: 8px 8px;
  background-color: ${(props) => (props.active ? 'green' : '#E8E8E8')};
  border-radius: 50px;
  border: none;
  color: ${(props) => (props.active ? 'white' : '#666666')};
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;

const ContentBox = styled.div`
  padding: 34.5px 109px 67.5px 37px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
`;
const HistoryWhiteBox = styled.div`
  background-color: white;
  border-radius: 20px;
`;
const HistoryItem = styled.div`
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 100px;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const HistoryPage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('전체');
  const content = [
    {
      date: '11 / 02',
      time: '23:55',
      task: '000님이 ~~~~~~~하기 과제',
      status: '완료',
    },
    {
      date: '11 / 02',
      time: '23:55',
      task: '000님이 ~~~~~~~하기 과제',
      status: '미완료',
    },
  ];

  return (
    <Container>
      <Title>히스토리</Title>
      <Menu>
        {['전체', '친구소식', '과제알림', '기타'].map((menu) => (
          <Button
            key={menu}
            active={activeMenu === menu}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </Button>
        ))}
      </Menu>
      <ContentBox>
        <HistoryWhiteBox>
          {content.map((item, index) => (
            <HistoryItem key={index}>
              <HistoryDetails>
                <div>{item.date}</div>
                <div>{item.time}</div>
                <div>{item.task}</div>
              </HistoryDetails>
              <BlueButton
                status={item.status === '완료' ? '등록됨' : '내 일정에 등록'}
              >
                {item.status}
              </BlueButton>
            </HistoryItem>
          ))}
        </HistoryWhiteBox>
      </ContentBox>
    </Container>
  );
};

export default HistoryPage;
