import React from 'react';
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
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: #666;
  text-align: center;
`;

const HistoryEtc: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  return (
    <HistoryContainer background={backgroundColor}>
      <Message>기타 항목이 없습니다.</Message>
    </HistoryContainer>
  );
};

export default HistoryEtc;
