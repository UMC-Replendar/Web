import styled from 'styled-components';

const Container = styled.div`
  width: 10%;
  height: 20%;
  position: relative;
`;

const Body = styled.div`
  width: 94px;
  height: 127px;
  position: absolute;
  background: #f9b08c;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
`;

const Eye = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
  background: #3f3f3f;
  border-radius: 9999px;
`;

const EyeLeft = styled(Eye)`
  left: 24px;
  top: 34px;
`;

const EyeRight = styled(Eye)`
  left: 62px;
  top: 34px;
`;
const Smile = styled.img`
  width: 40px; /* SVG의 크기 조절 */
  height: auto;
  position: absolute;
  left: 27px; /* 위치 조정 */
  top: 49px; /* 위치 조정 */
`;

const OrangeCharacter = () => {
  return (
    <Container>
      <Body />
      <EyeLeft />
      <EyeRight />
      <Smile src="src/assets/images/SmileOrange.svg" alt="Smile" />
    </Container>
  );
};

export default OrangeCharacter;
