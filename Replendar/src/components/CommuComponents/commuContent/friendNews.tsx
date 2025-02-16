import FriendNewsRender from '../../friendNewsRender';
import styled from 'styled-components';
const FriendNews = () => {
  return (
    <Container>
      <FriendNewsRender />
    </Container>
  );
};

export default FriendNews;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
