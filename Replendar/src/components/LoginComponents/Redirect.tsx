import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import Swal from 'sweetalert2';

export default function Redirect() {
  const navigate = useNavigate();
  const { setAuth, setTheme } = useAuthStore();
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');

  const getToken = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}?code=${AUTHORIZE_CODE}`
      );

      console.log(response);
      const { accessToken, id, nickName, email, theme } = response.data.result;

      if (response.data.isSuccess) {
        setAuth(accessToken, email, id, nickName, theme);
        setTheme(theme);

        await Swal.fire({
          icon: 'success',
          title: '로그인에 성공했습니다!',
          text: nickName
            ? `Replendar에 돌아오신 것을 환영합니다. ${{ nickName }}님!`
            : 'Replendar에 처음 오셨군요! 회원가입을 진행해주세요.',
          timer: 3000,
          showConfirmButton: false,
        });

        if (!nickName) {
          navigate('/signup');
        } else {
          navigate('/');
        }
      } else {
        throw new Error('토큰이 없습니다.');
      }
    } catch (error) {
      console.error('로그인 실패:', error);

      await Swal.fire({
        icon: 'error',
        title: '로그인 실패',
        text: '로그인에 실패하였습니다. 다시 시도해주세요.',
        confirmButtonText: '확인',
      });

      navigate('/login');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <h1></h1>;
}
