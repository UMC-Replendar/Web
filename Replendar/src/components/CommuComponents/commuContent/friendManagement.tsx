import styled from 'styled-components';
import DownArrow from '../../../assets/images/downArrow.svg';
import UpArrow from '../../../assets/images/upArrow.svg';
import { AddButton } from '../../../pages/OngoingTasks';
import { useState, useEffect } from 'react';
import { PlusIcon } from '../commuIcons';
import FriendListRender from '../friendListRender';
import useModalStore from '../../../store/modalStore';
import AddGroup from '../modalContents/addGroup';
import MakeGroup from '../modalContents/makeGroup';
import useGetData from '../../../hooks/useGetData';
import { IGroupList } from '../../../types';

const FriendManagement: React.FC<{ expanded: string }> = ({ expanded }) => {
  //expand mq없는 듯
  const { openModal } = useModalStore();

  const handleAddGroup = () => {
    openModal(<AddGroup />);
  };
  const handleMakeGroup = () => {
    openModal(<MakeGroup />);
  };

  const toggleGroup = (index: number) => {
    setShowGroups((prev) => {
      const newShowGroups = [...prev];
      newShowGroups[index] = !newShowGroups[index];
      return newShowGroups;
    });
  };

  const { data, isLoading, isError } = useGetData(`/api/friend-groups`);

  const [showGroups, setShowGroups] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  if (isLoading) {
    return <div>스켈레톤</div>;

    if (isError) {
      return <div>에러</div>;
    }
  }

  return (
    <Container>
      <AddButtonDiv>
        <AddButton onClick={handleMakeGroup}>
          그룹 만들기
          <PlusIcon />
        </AddButton>
      </AddButtonDiv>

      {data.map((group: IGroupList, index: number) => (
        <div key={group.groupId}>
          <SpaceBtwDiv
            status={
              showGroups[group.groupId] !== undefined
                ? showGroups[group.groupId].toString()
                : 'false'
            }
          >
            <FlexDiv>
              {group.groupName}
              <img
                src={showGroups[group.groupId] ? UpArrow : DownArrow}
                alt={
                  showGroups[group.groupId] ? 'UpArrow Icon' : 'DownArrow Icon'
                }
                onClick={() => toggleGroup(group.groupId)}
              />
            </FlexDiv>

            {showGroups[group.groupId] && (
              <FlexDiv onClick={handleAddGroup}>
                그룹에 추가하기 <PlusIcon fill="white" />
              </FlexDiv>
            )}
          </SpaceBtwDiv>
          {showGroups[group.groupId] && (
            <FlexDiv>
              <FriendListRender
                data={group.friends}
                queryKey="/api/friend-groups"
              />
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
