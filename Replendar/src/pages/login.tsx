import styled from 'styled-components';
import KakaoLogo from '../assets/images/KakaoTalk_logo.png';
import AppIcon from '../assets/images/logoCapture.png';
// import Character from '../components/Character'; 사진 대신 작성 할 캐릭터 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: white;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const KakaoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #381e1f;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ffd700;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
`;

const Login = () => {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 버튼 클릭됨!');
    // 예: window.Kakao.Auth.login({...});
  };

  return (
    <Container>
      <Image src={AppIcon} alt="앱 아이콘" />
      <Title>카카오 로그인</Title>
      <KakaoButton onClick={handleKakaoLogin}>
        <img src={KakaoLogo} alt="Kakao Logo" />
        카카오로 로그인하기
      </KakaoButton>
    </Container>
  );
};

export default Login;
