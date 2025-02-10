import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuthStore from '../../../store/authStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  width: 100%;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const Fakelogin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const handleLogin = async () => {
    if (!email) {
      setError('이메일을 입력해주세요.');
      return;
    }

    try {
      const response = await fetch(
        'https://api.replendar.site/api/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      console.log('로그인 응답:', data);

      if (data.isSuccess && data.result.accessToken) {
        const { accessToken, email, id, nickname, theme } = data.result;
        // localStorage.setItem('token', data.result.accessToken); // ✅ JWT 저장
        console.log(data);
        setAuth(accessToken, email, id, nickname, theme); // ✅ Zustand에 토큰 저장
        if (nickname == null) {
          alert('Replendar에 처음이시군요! 회원가입을 진행해 주세요');
          navigate('/signup'); // 로그인 후 회원가입으로 이동
        }
      } else {
        setError(data.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 요청 오류:', error);
      setError('서버 오류 발생');
    }
  };

  return (
    <Container>
      <LoginBox>
        <h2>로그인</h2>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button onClick={handleLogin}>로그인</Button>
      </LoginBox>
    </Container>
  );
};

export default Fakelogin;
