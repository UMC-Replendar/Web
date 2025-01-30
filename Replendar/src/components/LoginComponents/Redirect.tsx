export default function Redirect() {
  const AUTHORIZE_CODE: string | null = new URLSearchParams(
    window.location.search
  ).get('code');

  console.log(AUTHORIZE_CODE);
  return <h1>리다이렉션 페이지</h1>;
}
