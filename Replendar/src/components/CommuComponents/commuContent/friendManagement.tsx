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

  const visibleItems = expanded === 'true' ? 20 : 4;

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
          그룹 만들기
          <PlusIcon />
        </AddButton>
      </AddButtonDiv>

      {data.slice(0, visibleItems).map((item, index) => (
        <>
          <SpaceBtwDiv key={index} status={showGroups[index].toString()}>
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
        </>
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
  height: 855px;
  padding: 20px;
  overflow-y: auto;
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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  &:nth-child(10),
  &:nth-child(11) {
    margin-bottom: 1.5px; /* 얼탱없네 얘네 */
  }
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
  { groupName: '그룹5' },
  { groupName: '그룹6' },
  { groupName: '그룹7' },
  { groupName: '그룹8' },
  { groupName: '그룹9' },
  { groupName: '그룹10' },
];
