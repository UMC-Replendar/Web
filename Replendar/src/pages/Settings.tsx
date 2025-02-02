import styled from 'styled-components';
import Setting from '../assets/images/Setting.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Settings() {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  const userId = '닉네임';

  const LogoutClicked = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <SettingsWrapper>
      <TitleContainer>
        <SettingsIcon src={Setting} />
        <SettingsTitle>환경설정</SettingsTitle>
      </TitleContainer>
      <ComponentContainer>
        <SectionContainer>
          <SectionTitle>계정</SectionTitle>
          <FirstSectionLink>
            <IdContainer>아이디</IdContainer>
            <NicknameContainer>{userId}</NicknameContainer>
          </FirstSectionLink>
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
          <SectionLink onClick={LogoutClicked}>로그아웃</SectionLink>
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
  align-items: flex-start;
  margin-left: 100px;
  margin-top: 70px;
  /* width: 100%; */
  gap: 50px;
`;

const ComponentContainer = styled.div`
  display: flex;
  width: 431px;
  height: 755px;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  flex-shrink: 0;
  padding: 65px 30px 0px 30px;
  border-radius: 20px;
  background: var(--bg, #fcf6f5);

  /* bg 1 */
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
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

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 100%;
  }
`;

const SectionTitle = styled.div`
  color: var(--, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const FirstSectionLink = styled.div`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const SectionLink = styled.span`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;

const NicknameContainer = styled.div`
  color: rgba(102, 102, 102, 0.7);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const IdContainer = styled.div`
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;
