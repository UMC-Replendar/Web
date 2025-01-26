import styled from 'styled-components';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import DownArrow from '../../../assets/images/downArrow.svg';
import UpArrow from '../../../assets/images/upArrow.svg';

import { useState } from 'react';
import { PlusIcon } from '../commuIcons';
import FriendList from './friendList';
import useModalStore from '../../../store/modalStore';
import AddGroup from '../modalContents/addGroup';
import MakeGroup from '../modalContents/makeGroup';

const FriendManagement: React.FC<{ expanded: string }> = ({ expanded }) => {
  const [showGroups, setShowGroups] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const visibleItems = expanded === 'true' ? 10 : 5;

  const toggleGroup = (index: number) => {
    setShowGroups((prev) => {
      const newShowGroups = [...prev];
      newShowGroups[index] = !newShowGroups[index];
      return newShowGroups;
    });
  };

  const { openModal } = useModalStore();

  const handleAddGroup = () => {
    openModal(<AddGroup />);
  };
  const handleMakeGroup = () => {
    openModal(<MakeGroup />);
    console.log('그룹만들기');
  };
  return (
    <Container>
      {data.slice(0, visibleItems).map((item, index) => (
        <div key={index}>
          <SpaceBtwDiv status={showGroups[index].toString()}>
            <FlexDiv>
              {item.groupName}
              <img
                src={showGroups[index] ? UpArrow : DownArrow}
                alt={showGroups[index] ? 'UpArrow Icon' : 'DownArrow Icon'}
                onClick={() => toggleGroup(index)}
              />
            </FlexDiv>

            {showGroups[index] && (
              <div onClick={handleAddGroup}>
                그룹에 추가하기 <PlusIcon fill="white" />
              </div>
            )}
          </SpaceBtwDiv>
          {showGroups[index] && (
            <FlexDiv>
              <FriendList expanded="false" />
            </FlexDiv>
          )}
        </div>
      ))}
      <PlusFriendsButton onClick={handleMakeGroup}>
        그룹 만들기
      </PlusFriendsButton>
    </Container>
  );
};

export default FriendManagement;
const Container = styled.div`
  width: 95%;
  background-color: white;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;

  gap: 15px;
  box-sizing: border-box;
`;

const SpaceBtwDiv = styled.div<{ status: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.status === 'true' ? '#666' : 'white')};
  color: ${(props) => (props.status === 'true' ? 'white' : 'black')};
  font-size: 19px;
  padding: 10px 15px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;
//임시데이터
const data = [
  { groupName: '그룹1' },
  { groupName: '그룹2' },
  { groupName: '그룹3' },
  { groupName: '그룹4' },
  { groupName: '그룹5' },
  { groupName: '그룹6' },
  { groupName: '그룹7' },
  { groupName: '그룹8' },
  { groupName: '그룹9' },
  { groupName: '그룹10' },
];
