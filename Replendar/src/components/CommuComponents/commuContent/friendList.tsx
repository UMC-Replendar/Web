import FriendListRender from '../friendListRender';
import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';
import { FriendListSkeleton } from '../../skeleton.tsx';

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const url = expanded ? `/api/friends` : `/api/friends?limit=5`;
  const { data, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return (
      <Container>
        <FriendListSkeleton count={2} />
      </Container>
    );
  }

  if (isError) {
    return <h1>에러</h1>;
  }

  return (
    <Container>
      <FriendListRender data={data} queryKey={url} />

      <FriendListSkeleton count={2} />
    </Container>
  );
};

export default FriendList;

const Container = styled.div`
  width: 100%;

  padding: 20px;
`;
