import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../apis/axios-instance';
import BlueButton from '../blueButton';
import { useThemeStore, themeBackground } from '../../store/useThemeStore';

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

const Button = styled.button<{ active: boolean; background: string }>`
  height: 38px;
  width: 135px;
  padding: 8px 8px;
  background-color: ${(props) => (props.active ? props.background : '#E8E8E8')};
  border-radius: 50px;
  border: none;
  color: ${(props) => (props.active ? 'white' : '#666666')};
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({ background }) => background};
    color: white;
  }
`;

const ContentBox = styled.div<{ background: string }>`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({ background }) => background};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HistoryWhiteBox = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`;

const HistoryItem = styled.div`
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

  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];
  const buttonColor = themeColors[0];

  const apiUrl = (() => {
    switch (activeMenu) {
      case '친구소식':
        return '/api/activity/friend';
      case '과제알림':
        return '/api/activity/assignment/notify';
      case '기타':
        return '/api/activity'; // 이후 공지사항 관련 API 연결
      default:
        return '/api/activity'; // 전체 API
    }
  })();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['activity', activeMenu], // 메뉴별 캐싱
    queryFn: async () => {
      const response = await axiosInstance.get(apiUrl, {
        params: { page: 1, size: 10, sort: 'CreatedAt' },
      });

      console.log(`${activeMenu} API Response:`, response.data);

      // 전체 API는 response.data.content, 나머지는 response.data.result.content
      return activeMenu === '전체'
        ? response.data.content || []
        : response.data.result?.content || [];
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐싱 유지
    refetchOnWindowFocus: false, // 창 포커스 변경 시 리패치 비활성화
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류 발생!</div>;

  return (
    <Container>
      <Title>히스토리</Title>
      <Menu>
        {['전체', '친구소식', '과제알림', '기타'].map((menu) => (
          <Button
            background={buttonColor}
            key={menu}
            active={activeMenu === menu}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </Button>
        ))}
      </Menu>
      <ContentBox background={backgroundColor}>
        {data.length > 0 ? (
          data.map(
            (
              item: any,
              index: number //어떻게 배치하지
            ) => (
              <HistoryWhiteBox key={index}>
                <HistoryItem>
                  <HistoryDetails>
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                    <div>{item.content}</div>
                  </HistoryDetails>
                  <BlueButton status={item.check ? '등록됨' : '내 일정에 등록'}>
                    {item.check ? '등록됨' : '내 일정에 등록'}
                  </BlueButton>
                </HistoryItem>
              </HistoryWhiteBox>
            )
          )
        ) : (
          <div>기록이 없습니다.</div>
        )}
      </ContentBox>
    </Container>
  );
};

export default HistoryPage;
