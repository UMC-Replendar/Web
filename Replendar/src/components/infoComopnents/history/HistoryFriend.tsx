import React from 'react';
import styled from 'styled-components';
import FriendNewsRender from '../../friendNewsRender';
import { themeBackground, useThemeStore } from '../../../store/useThemeStore';

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

const HistoryFriend: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  return (
    <ContentBox background={backgroundColor}>
      <FriendNewsRender />{' '}
    </ContentBox>
  );
};

export default HistoryFriend;
