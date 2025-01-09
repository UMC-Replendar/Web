import "../assets/css/App.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <Div>시작해볼까요</Div>
    </>
  );
}

export default App;

const Div = styled.h1`
  ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.pc1};
  text-align: center;
`;
