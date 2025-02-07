import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';
import { createGroup } from '../../../apis/commuApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import SelectFriendsModal from '../../../modal/SelectFriendsModal';
import useGetData from '../../../hooks/useGetData';
import useFriendsStore from '../../../store/useFriendStore';

const MakeGroup: React.FC = () => {
  const { closeModal } = useModalStore();

  const {
    isFriendModalOpen,
    openFriendModal,
    nicknames,
    updateFriendsData,
    setFriendData,
    friendData,
    resetFriends,
  } = useFriendsStore();

  useEffect(() => {
    resetFriends();
  }, [closeModal]);

  const [groupName, setGroupName] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (groupName: string) => createGroup(groupName),
    onSuccess: () => {
      alert('그룹이 성공적으로 생성되었습니다.');
      closeModal();

      queryClient.invalidateQueries({
        queryKey: [`/api/friend-groups`],
      });
    },
    onError: (error: Error) => {
      alert('그룹을 생성하는 데 실패했습니다.');
      console.error(error);
    },
  });
  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      alert('그룹 이름을 입력하세요.');
      return;
    }
    mutation.mutate(groupName);
  };

  useEffect(() => {
    updateFriendsData();
  }, [isFriendModalOpen]);

  const { data } = useGetData(`/api/friends`);

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(friendData)) {
      setFriendData(data);
    }
  }, [data]);
  /*if (data && data !== friendData) {
    setFriendData(data);
  }*/
  return (
    <Container>
      <h1>그룹 만들기</h1>
      <GapDiv>
        <div>
          {' '}
          <label>그룹명</label>
          <TransparentInput
            placeholder="그룹 이름을 입력하세요"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          ></TransparentInput>
        </div>

        <label>그룹에 넣을 친구</label>
      </GapDiv>
      <FlexDiv>
        <PlusFriendsButton onClick={openFriendModal}>
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
        <PlusFriendsButton onClick={handleCreateGroup}>완료</PlusFriendsButton>
      </FlexEndGroup>
    </Container>
  );
};
export default MakeGroup;

const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`;
const FlexEndGroup = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
const GapDiv = styled.div`
  label {
    font-size: 16px;
    color: #666;
  }
  div {
    gap: 20px;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 0px;
  gap: 10px;
`;
const Container = styled.div`
  padding: 20px;
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
