import styled from 'styled-components';
import { useState } from 'react';

const shareModal: React.FC = () => {
  const [friends] = useState<string[]>(['사랑', '성원', '찬건', '선영']);
  return (
    <SelectFriendsModal>
      <SelectFriendsModalTitle>공유할 친구 선택</SelectFriendsModalTitle>
      <FriendsList>
        {friends.map((friend) => (
          <FriendsItem key={friend}>{friend}</FriendsItem>
        ))}
      </FriendsList>
    </SelectFriendsModal>
  );
};

export default shareModal;
const SelectFriendsModal = styled.div`
  position: absolute;
  width: 452px;
  height: 461px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`;

const SelectFriendsModalTitle = styled.h5`
  font-size: 23px;
  font-weight: 600;
  margin: 24px 0 50px 24px;
`;
const FriendsList = styled.ul`
  display: flex;
  width: 392px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const FriendsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;
