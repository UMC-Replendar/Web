import FriendListRender from '../friendListRender';
import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const url = expanded ? `/api/friends` : `/api/friends?limit=5`;
  const { data, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }

  return (
    <Container>
      <FriendListRender data={data} queryKey={url} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  padding: 20px;
`;
export default FriendList;
