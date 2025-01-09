import { css } from "styled-components";

//font는 정해지면 아래의 예시와 같이 변경하면 됩니다.
const fonts = {
  sansita_one: css`
    font-family: "Sansita", sans-serif;
    font-weight: 800;
    font-style: italic;
  `,
  roboto_mono: css`
    font-family: "Roboto Mono", monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  `,
  roboto_medium: css`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  `,
  roboto_regular: css`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
};

//point color = 주로 많이 사용하는 컬러입니다. 색은 정해지면 바꿉시다!
const colors = {
  pc1: "#377D00",
  pc2: "#00520D",
  pc3: "#90A344",
  black: "#111111",
  deep_grey: "#767676",
  medium_grey: "#999999",
  light_grey: "#DBDBDB",
  white: "#FFFFFF",
};

const theme = { fonts, colors }; //이런 식으로 보낼 수 있더라...

export default theme;
