import axios from 'axios';

const AUTHORIZE_CODE: string | null = new URLSearchParams(
  window.location.search
).get('code');
const GRANT_TYPE: string = 'authorization_code';
const REST_API_KEY: string = import.meta.env.VITE_KAKAO_API_KEY;
const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI_KAKAO;

export default function Redirect() {
  axios
    .post(
      `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((response) => {
      console.log(response);
      //   window.location.href = '/';
    })
    .catch((error) => console.log(error));
  return <h1>리다이렉션 중입니다..</h1>;
}
