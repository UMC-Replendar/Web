import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
`;

const Box = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const StoredTaskPage = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/StoredWork.svg" alt="X" />
        <Text>완료한 과제</Text>
      </Wrapper>
      <Box />
    </Container>
  );
};

export default StoredTaskPage;
