import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const navigate = useNavigate();
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');
  axios
    .get(`${import.meta.env.VITE_BACKEND_API_URL}/code=${AUTHORIZE_CODE}`, {})
    .then((response) => {
      console.log(response);

      //넘어오는 jwt 토큰을 받음
      const JWT_TOKEN: any = response;

      localStorage.setItem('token', JWT_TOKEN);
      alert('로그인에 성공했습니다');
      if (response.data.userID == null) {
        navigate('/signup');
      } else {
        navigate('/');
      }
    })
    .catch((error) => {
      console.log(error);
      alert('로그인에 실패했습니다.');
      navigate('/login');
    });
  return <h1>리다이렉트 중입니다.</h1>;
}
