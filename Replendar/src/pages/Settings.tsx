import styled from 'styled-components';
import Setting from '../assets/images/Setting.png';
import { Link } from 'react-router-dom';

function Settings() {
  const userId = '닉네임';

  return (
    <SettingsContainer>
      <SectionContainer>
        <SettingsIcon src={Setting} />
        <SettingsTitle>환경설정</SettingsTitle>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>계정</SectionTitle>
        <SectionLink>아이디 {userId}</SectionLink>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>앱 설정</SectionTitle>
        <SectionLink>
          <Link to={'/settings/theme'}>테마 설정</Link>
        </SectionLink>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>이용 안내</SectionTitle>
        <Link to={'/settings/ask'}>
          <SectionLink>문의하기</SectionLink>
        </Link>
        <Link to={'/settings/notify'}>
          <SectionLink>공지사항</SectionLink>
        </Link>
        <Link to={'/settings/detail'}>
          <SectionLink>서비스 이용약관</SectionLink>
        </Link>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>기타</SectionTitle>
        <SectionLink>회원 탈퇴</SectionLink>
        <SectionLink>로그아웃</SectionLink>
      </SectionContainer>
    </SettingsContainer>
  );
}

export default Settings;

const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 130%;
  flex-direction: column;
  gap: 20px;
`;

const SettingsIcon = styled.img``;

const SettingsTitle = styled.span``;

const SectionContainer = styled.div`
  &:first-child {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const SectionLink = styled.div``;
