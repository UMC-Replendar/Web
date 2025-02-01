import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const navigate = useNavigate();
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');

  useEffect(() => {
    if (!AUTHORIZE_CODE) {
      alert('인증 코드가 없습니다.');
      navigate('/login');
      return;
    }

    let isRequestSent = false; // 중복 실행 방지

    if (!isRequestSent) {
      isRequestSent = true;
      axios
        .get(`${import.meta.env.VITE_BACKEND_API_URL}/code=${AUTHORIZE_CODE}`)
        .then((response) => {
          console.log(response);

          // JWT 토큰 저장
          const JWT_TOKEN: string = response.data?.token;
          if (JWT_TOKEN) {
            localStorage.setItem('token', JWT_TOKEN);
            alert('로그인에 성공했습니다');
          } else {
            throw new Error('토큰이 없습니다.');
          }

          // 회원가입 여부 확인 후 이동
          if (!response.data?.userID) {
            navigate('/signup');
          } else {
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
          alert('로그인에 실패했습니다.');
          navigate('/login');
        });
    }
  }, [navigate, AUTHORIZE_CODE]); // useEffect 의존성 배열

  return <h1>리다이렉트 중입니다.</h1>;
}
