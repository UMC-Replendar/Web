import FriendListRender from '../friendListRender';
import useGetData from '../../../hooks/useGetData';
import { useEffect } from 'react';
import useFriendsStore from '../../../store/useFriendStore';

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const url = expanded ? `/api/friends` : `/api/friends?limit=5`;
  const { data, isLoading, isError } = useGetData(url);

  const { updateFriendsData, isFriendModalOpen } = useFriendsStore();

  useEffect(() => {
    updateFriendsData();
  }, [isFriendModalOpen]);

  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }

  return <FriendListRender data={data} queryKey={url} />;
};

export default FriendList;
