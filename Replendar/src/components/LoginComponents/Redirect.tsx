import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function Redirect() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setAuth, setTheme } = useAuthStore();
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');

  const getToken = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_API_URL}?code=${AUTHORIZE_CODE}`)
        .then((response) => {
          console.log(response);
          const { accessToken, id, nickName, email, theme } =
            response.data.result;
          if (response.data.isSuccess) {
            setAuth(accessToken, email, id, nickName, theme);
            setTheme(theme);
            navigate('/signup');

            alert('로그인에 성공했습니다');
            if (!nickName) {
              alert('Replendar에 처음이시군요. 회원가입부터 진행해주세요!');
              navigate('/signup');
            } else {
              alert('Replendar에 오신 것을 환영합니다. ' + nickName + '님');

              if (pathname !== '/') {
                navigate('/');
              }
              navigate('/');
            }
          } else {
            throw new Error('토큰이 없습니다.');
          }
        });
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
      navigate('/login');
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return <h1>리다이렉트 중입니다.</h1>;
}
