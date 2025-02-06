import styled, { keyframes } from 'styled-components';
import KakaoLogo from '../assets/images/KakaoTalk_logo.png';
import AppIcon from '../assets/images/logoCapture.png';
import Blue from '../assets/images/loginImage/Blue.svg';
import Orange from '../assets/images/loginImage/Orange.svg';
import Pink from '../assets/images/loginImage/Pink.svg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140vh;
  background-color: white;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
`;

const TitleContainer = styled.div`
  font-family: Pretendard;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 100px;
`;

const KakaoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(254, 229, 0, 0.8);
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  color: #381e1f;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  width: 419px;
  height: 108px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(254, 229, 0, 1);
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
  }
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
`;

const ImgWrapper = styled.div`
  width: 420px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const CharacterImage = styled.img<{ top: string; left: string }>`
  position: fixed;
  width: 120px;
  height: auto;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  &:first {
    width: 150px;
  }
`;
const movingLeaves = keyframes`
  0% {
    transform: translateX(-10vw) translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(200vw) translateY(25vh) rotate(360deg);
    opacity: 1;
  }
`;

const FakeLogin = styled.span``;

const Leaf = styled.div<{
  top: string;
  size: string;
  duration: string;
  delay: string;
}>`
  position: fixed;
  top: ${({ top }) => top};
  left: -15%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: #4caf50;
  border-radius: 50% 0% 50% 50%;
  transform: rotate(45deg);
  animation: ${movingLeaves} ${({ duration }) => duration} linear infinite;
  animation-delay: ${({ delay }) => delay};
`;

function Login() {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 버튼 클릭됨!');
    const REST_API_KEY: string = import.meta.env.VITE_KAKAO_API_KEY; // 발급받은 클라이언트 아이디
    const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI_KAKAO; // Callback URL
    const KAKAO_AUTH_URL: string = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <ImgWrapper>
        <Image src={AppIcon} alt="앱 아이콘" />
      </ImgWrapper>
      <TitleContainer>REPLENDAR</TitleContainer>
      <KakaoButton onClick={handleKakaoLogin}>
        <img src={KakaoLogo} alt="Kakao Logo" />
        카카오로 로그인하기
      </KakaoButton>
      <Link to={'/fakelogin'}>
        <FakeLogin>테스트 로그인</FakeLogin>
      </Link>
      <CharacterImage src={Pink} alt="Character 1" top="85%" left="25%" />
      <CharacterImage src={Orange} alt="Character 2" top="85%" left="70%" />
      <CharacterImage src={Blue} alt="Character 3" top="70%" left="80%" />
      <Leaf top="5%" size="40px" duration="15s" delay="0s" />
      <Leaf top="15%" size="50px" duration="10s" delay="1s" />
      <Leaf top="20%" size="50px" duration="20s" delay="2s" />
      <Leaf top="40%" size="35px" duration="18s" delay="3s" />
      <Leaf top="70%" size="45px" duration="12s" delay="2s" />
      <Leaf top="60%" size="45px" duration="22s" delay="1s" />
      <Leaf top="80%" size="30px" duration="17s" delay="4s" />
    </Container>
  );
}

export default Login;
