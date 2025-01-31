import styled from 'styled-components';
import DownArrow from '../../../assets/images/downArrow.svg';
import UpArrow from '../../../assets/images/upArrow.svg';
import { AddButton } from '../../../pages/OngoingTasks';
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

  const visibleItems = expanded === 'true' ? 10 : 4;

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
  };

  return (
    <Container>
      <AddButtonDiv>
        <AddButton onClick={handleMakeGroup}>
          친구 만들기
          <PlusIcon />
        </AddButton>
      </AddButtonDiv>

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
              <FlexDiv onClick={handleAddGroup}>
                그룹에 추가하기 <PlusIcon fill="white" />
              </FlexDiv>
            )}
          </SpaceBtwDiv>
          {showGroups[index] && (
            <FlexDiv>
              <FriendList expanded="false" />
            </FlexDiv>
          )}
        </div>
      ))}
    </Container>
  );
};

export default FriendManagement;

const AddButtonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`;
const Container = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  padding: 20px;
  gap: 4px;
  box-sizing: border-box;
`;

const SpaceBtwDiv = styled.div<{ status: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.status === 'true' ? '#666' : 'white')};
  color: ${(props) => (props.status === 'true' ? 'white' : 'black')};
  font-size: 23px;

  height: 67px;
  border-radius: 20px;
  padding: 0px 30px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
