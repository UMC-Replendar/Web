import styled from 'styled-components';
import Setting from '../assets/images/Setting.png';
import { Link } from 'react-router-dom';

function Settings() {
  const userId = '닉네임';

  return (
    <SettingsWrapper>
      <TitleContainer>
        <SettingsIcon src={Setting} />
        <SettingsTitle>환경설정</SettingsTitle>
      </TitleContainer>
      <ComponentContainer>
        <SectionContainer>
          <SectionTitle>계정</SectionTitle>
          <SectionLink>
            <span>아이디</span>
            <NicknameContainer> {userId}</NicknameContainer>
          </SectionLink>
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
      </ComponentContainer>
    </SettingsWrapper>
  );
}

export default Settings;

const SettingsWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-top: 70px;
  /* width: 100%; */
  gap: 20px;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 60px;
  align-items: flex-start;
  padding: 40px 163px 63px 39px;
  border-radius: 20px;
  background: #fcf6f5;

  box-shadow: 0px 7px 22.3px -6px #cdcdcd;
`;

const SettingsIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SettingsTitle = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SectionContainer = styled.div``;

const SectionTitle = styled.span`
  color: var(--, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const SectionLink = styled.div`
  color: var(--, #666);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const NicknameContainer = styled.span`
  color: rgba(102, 102, 102, 0.7);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
