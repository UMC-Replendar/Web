import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function Redirect() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setAuth } = useAuthStore();
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');

  const getToken = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_API_URL}?code=${AUTHORIZE_CODE}`)
        .then((response) => {
          console.log(response);
          const { accessToken, id, nickName, email } = response.data.result;
          console.log(accessToken, id, nickName, email);
          if (response.data.isSuccess) {
            setAuth(accessToken, email, id, nickName);
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

  // api 호출 두 번 하는 거 이이이새키 때문이었음.
  // dependency를 빈 배열로 주면 랜더링 될 때만 실행된다함.
  useEffect(() => {
    getToken();
  }, []);

  return <h1>리다이렉트 중입니다.</h1>;
}
