import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SelectFriendsModal from '../../../modal/SelectFriendsModal';
import useGetData from '../../../hooks/useGetData';
import useFriendsStore from '../../../store/useFriendStore';
import { useGroupAddFriendMutation } from '../../../hooks/useGroupAddFriendMutation';

const AddGroup: React.FC<{ groupId: number }> = ({ groupId }) => {
  const { closeModal } = useModalStore();

  const {
    isFriendModalOpen,
    openFriendModal,
    nicknames,
    updateFriendsData,
    setFriendData,
    friendData,
    resetFriends,
    friendshipIds,
  } = useFriendsStore();

  const groupAddFriendMutation = useGroupAddFriendMutation();

  useEffect(() => {
    resetFriends();
  }, [closeModal]);

  useEffect(() => {
    updateFriendsData();
  }, [isFriendModalOpen]);

  const { data } = useGetData(
    `/api/friend-groups/${groupId}/available-friends`
  );

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(friendData)) {
      setFriendData(data);
    }
  }, [data]);

  const handleGroupAddFriend = () => {
    if (nicknames.length === 0) {
      alert('그룹에 추가할 친구를 선택하세요');
      return;
    }

    const validFriendshipIds: number[] = friendshipIds.filter(
      (id): id is number => id !== null
    );
    groupAddFriendMutation.mutate({
      groupId,
      friendshipIds: validFriendshipIds,
    });
  };

  return (
    <Container>
      <h1>그룹에 추가하기</h1>
      <GapDiv>
        {' '}
        <label>그룹에 넣을 친구</label>
      </GapDiv>
      <FlexDiv>
        <PlusFriendsButton onClick={openFriendModal}>
          {' '}
          <img src={GrayPlusIcon} alt="Gray Plus Icon" />
          추가
        </PlusFriendsButton>
        {nicknames.length > 0 && (
          <SelectedFriendsList>
            {nicknames.map((nickname) => (
              <FriendTag key={nickname}>{nickname}</FriendTag>
            ))}
          </SelectedFriendsList>
        )}
      </FlexDiv>
      {isFriendModalOpen && <SelectFriendsModal />}
      <FlexEndGroup>
        <PlusFriendsButton onClick={handleGroupAddFriend}>
          완료
        </PlusFriendsButton>
      </FlexEndGroup>
    </Container>
  );
};

export default AddGroup;
const FlexEndGroup = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
const Container = styled.div`
  padding: 20px;
`;
const GapDiv = styled.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`;

const SelectedFriendsList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`;

const FriendTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;
  width: 64px;
  height: 31px;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 8px;
`;
