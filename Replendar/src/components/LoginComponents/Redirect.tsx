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

    axios
      .get(`${import.meta.env.VITE_BACKEND_API_URL}?code=${AUTHORIZE_CODE}`)
      .then((response) => {
        console.log(response);
        const { accessToken, id, nickName } = response.data.result;
        if (response.data.isSuccess) {
          localStorage.setItem('token', accessToken);
          alert('로그인에 성공했습니다');
          if (id == null) {
            alert('Replendar에 처음이시군요. 회원가입부터 진행해주세요!');
            navigate('/signup');
          } else {
            alert('Replendar에 오신 것을 환영합니다. ' + nickName + '님');
            navigate('/');
          }
        } else {
          throw new Error('토큰이 없습니다.');
        }
      })
      .catch((error) => {
        console.error('로그인 실패:', error);
        alert('로그인에 실패했습니다.');
        navigate('/login');
      });
  }, []);

  return <h1>리다이렉트 중입니다.</h1>;
}
