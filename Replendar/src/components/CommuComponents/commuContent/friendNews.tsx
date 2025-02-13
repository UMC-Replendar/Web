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
  width: 100%;
  padding: 20px;
`;
