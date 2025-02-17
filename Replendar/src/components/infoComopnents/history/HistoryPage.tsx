import React, { useState } from 'react';
import styled from 'styled-components';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';

import HistoryAll from './HistoryAll';
import HistoryFriend from './HistoryFriend';
import HistoryAssignment from './HistoryAssignment';
import HistoryEtc from './HistoryEtc';

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

const HistoryPage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('전체');

  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const buttonColor = themeColors[0];

  const renderContent = () => {
    switch (activeMenu) {
      case '친구소식':
        return <HistoryFriend />;
      case '과제알림':
        return <HistoryAssignment />;
      case '기타':
        return <HistoryEtc />;
      default:
        return <HistoryAll />;
    }
  };

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
      {renderContent()}
    </Container>
  );
};

export default HistoryPage;
