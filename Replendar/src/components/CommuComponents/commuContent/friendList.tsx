import FriendListRender from '../friendListRender';
import useGetData from '../../../hooks/useGetData';
import styled from 'styled-components';
import { FriendListSkeleton } from '../../skeleton.tsx';

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const url = expanded === 'true' ? `/api/friends` : `/api/friends?limit=5`;
  const { data, isLoading } = useGetData(url);

  if (isLoading) {
    return (
      <Container>
        <FriendListSkeleton count={2} />
      </Container>
    );
  }

  return (
    <Container>
      <FriendListRender data={data} queryKey={url} />{' '}
    </Container>
  );
};

export default FriendList;

const Container = styled.div`
  width: 100%;

  padding: 20px;
`;
