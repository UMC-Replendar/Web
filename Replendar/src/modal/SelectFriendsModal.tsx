import styled from 'styled-components';
import UnCheckBoxIcon from '../assets/images/UnCheckBoxIcon.svg';
import CheckBoxIcon from '../assets/images/CheckBoxIcon.svg';
import { IFriendList, ITaskFriendList } from '../types';
import useFriendStore from '../store/useFriendStore';

const SelectFriendsModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 452px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`;

const SelectFriendsModalTitle = styled.h5`
  font-size: 23px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
  margin-left: 24px;
`;

const SelectAllFriends = styled.div`
  display: flex;
  width: 394px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 50px;
  margin-left: 29px;
`;

const FriendsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  white-space: nowrap;
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 29px;
`;

const FriendsNameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FriendsNickname = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  width: 50px; /* 원하는 고정 너비 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  white-space: normal; /* 줄바꿈 허용 */
`;

const FriendsNameAndMemo = styled.div<{ width?: string }>`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

const FriendsMemoSection = styled.div`
  display: flex;
  width: 312px;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const FriendsMemoInput = styled.input`
  display: flex;
  width: 200px;
  height: 38px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: white;
  resize: none;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function SelectFriendsModal() {
  const {
    checkedFriends,
    toggleFriend,
    toggleAllFriends,
    closeFriendModal,
    friendData,
  } = useFriendStore();

  //일단
  //all true인지
  const isAllChecked =
    Array.isArray(friendData) &&
    friendData.length > 0 &&
    friendData.every(
      (friend: IFriendList | ITaskFriendList) => checkedFriends[friend.friendId]
    );

  return (
    <SelectFriendsModalOverlay>
      <SelectFriendsModalTitle>공유할 친구 선택</SelectFriendsModalTitle>
      <SelectAllFriends>
        전체 선택
        <div
          onClick={() => {
            toggleAllFriends(
              friendData.map(
                (friend: IFriendList | ITaskFriendList) => friend.friendId
              )
            );
          }}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={isAllChecked ? CheckBoxIcon : UnCheckBoxIcon}
            alt="Checkbox Icon"
          />
        </div>
      </SelectAllFriends>
      {friendData.map((friend: IFriendList | ITaskFriendList) => (
        <FriendsItem key={friend.friendId}>
          <FriendsNameSection>
            <FriendsNickname>{friend.nickname}</FriendsNickname>
            <FriendsNameAndMemo width="50px">{friend.name}</FriendsNameAndMemo>
          </FriendsNameSection>
          <FriendsMemoSection>
            <FriendsNameAndMemo>메모</FriendsNameAndMemo>
            <FriendsMemoInput defaultValue={friend.friendNote} />
            <div
              onClick={() => toggleFriend(friend.friendId)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={
                  checkedFriends[friend.friendId]
                    ? CheckBoxIcon
                    : UnCheckBoxIcon
                }
                alt="Checkbox Icon"
              />
            </div>
          </FriendsMemoSection>
        </FriendsItem>
      ))}

      <ConfirmButton onClick={closeFriendModal}>선택하기</ConfirmButton>
    </SelectFriendsModalOverlay>
  );
}

export default SelectFriendsModal;
