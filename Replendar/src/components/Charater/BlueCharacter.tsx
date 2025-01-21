import styled from 'styled-components';

const Container = styled.div`
  width: 10%;
  height: 23%;
  position: relative;
`;

const Shape = styled.div`
  width: 94px;
  height: 168px;
  position: absolute;
  background: #7cd7eb;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
  background: #3f3f3f;
  border-radius: 9999px;
`;

const Dot1 = styled(Dot)`
  left: 25px;
  top: 35px;
`;

const Dot2 = styled(Dot)`
  left: 63px;
  top: 35px;
`;

const Smile = styled.img`
  width: 43px; /* SVG의 크기 조절 */
  height: auto;
  position: absolute;
  left: 26px; /* 위치 조정 */
  top: 50px; /* 위치 조정 */
`;

const BlueCharacter = () => (
  <Container>
    <Shape />
    <Dot1 />
    <Dot2 />
    <Smile src="src/assets/images/SmileBlue.svg" alt="Smile" />
  </Container>
);

export default BlueCharacter;
