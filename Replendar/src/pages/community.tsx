import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  display: flex;
`;
const TextBtn = styled.button`
  background: none;
  border: none;
  width: 100px;
  cursor: pointer;
  &:focus {
    text-decoration: underline;
  }
`;
const TextBtnDiv = styled.div`
  position: relative;
  left: 50px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ContentDiv = styled.div`
  background-color: white;
`;
const SpaceBetDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Community = () => {
  const [activeMenu, setActiveMenu] = useState('news'); // 기본 메뉴는 '친구 소식'

  const renderContent = () => {
    switch (activeMenu) {
      case 'news':
        return (
          <ContentContainer>
            <SpaceBetDiv>
              <h3>친구 소식</h3>
              <TextBtn>더보기</TextBtn>
            </SpaceBetDiv>
            <ContentDiv>친구 소식 content</ContentDiv>
          </ContentContainer>
        );
      case 'list':
        return (
          <ContentContainer>
            {' '}
            <SpaceBetDiv>
              <h3>친구 목록</h3>
              <TextBtn>더보기</TextBtn>
            </SpaceBetDiv>
            <ContentDiv>친구 목록 content</ContentDiv>
          </ContentContainer>
        );
      case 'add':
        return (
          <ContentContainer>
            <SpaceBetDiv>
              <h3>친구 등록</h3>
              <TextBtn>더보기</TextBtn>
            </SpaceBetDiv>
            <ContentDiv>친구 등록 content</ContentDiv>
          </ContentContainer>
        );
      case 'manage':
        return (
          <ContentContainer>
            <SpaceBetDiv>
              <h3>친구 관리</h3>
              <TextBtn>더보기</TextBtn>
            </SpaceBetDiv>
            <ContentDiv className="contentDiv">친구 관리 content</ContentDiv>
          </ContentContainer>
        );
    }
  };

  return (
    <Container>
      <TextBtnDiv>
        <h2>친구</h2>
        <TextBtn onClick={() => setActiveMenu('news')}>친구 소식</TextBtn>
        <TextBtn onClick={() => setActiveMenu('list')}>친구 목록</TextBtn>
        <TextBtn onClick={() => setActiveMenu('add')}>친구 등록</TextBtn>
        <TextBtn onClick={() => setActiveMenu('manage')}>친구 관리</TextBtn>
      </TextBtnDiv>

      {renderContent()}
    </Container>
  );
};

export default Community;
