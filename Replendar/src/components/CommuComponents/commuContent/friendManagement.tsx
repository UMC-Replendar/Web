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
import Minus from '../../../assets/images/minus.svg';
import { useMutation } from '@tanstack/react-query';
import { deleteGroup } from '../../../apis/commuApi';
import { useQueryClient } from '@tanstack/react-query';
import { GroupSkeleton } from '../../skeleton';
import Swal from 'sweetalert2';

const FriendManagement: React.FC<{ expanded: string }> = ({ expanded }) => {
  const { openModal } = useModalStore();

  const queryClient = useQueryClient();

  const handleAddGroup = (groupId: number) => {
    openModal(<AddGroup groupId={groupId} />);
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

  const { data, isLoading } = useGetData(`/api/friend-groups`);
  const displayedData = expanded === 'true' ? data : data.slice(0, 4);
  useEffect(() => {
    console.log(data.length);
    console.log('expand', expanded);
  }, [expanded]);
  const visibleCount = expanded === 'true' ? data.length : 4;
  const DeleteGroupMutation = useMutation({
    mutationFn: (groupId: number) => deleteGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/friend-groups`],
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '그룹 삭제하는 데 실패했습니다',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  const [showGroups, setShowGroups] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  return (
    <Container>
      <AddButtonDiv>
        <AddButton onClick={handleMakeGroup}>
          그룹 만들기
          <PlusIcon />
        </AddButton>
      </AddButtonDiv>
      {isLoading && <GroupSkeleton count={4} />}

      {displayedData.slice(0, visibleCount).map((group: IGroupList) => (
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
              <FlexDiv gap="50px">
                <FlexDiv
                  onClick={() => DeleteGroupMutation.mutate(group.groupId)}
                >
                  그룹 삭제하기<img src={Minus} alt="MinusIcon"></img>
                </FlexDiv>
                <FlexDiv onClick={() => handleAddGroup(group.groupId)}>
                  그룹에 추가하기 <PlusIcon fill="white" />
                </FlexDiv>
              </FlexDiv>
            )}
          </SpaceBtwDiv>
          {showGroups[group.groupId] && (
            <ListRenderContatiner>
              <FriendListRender
                data={group.friends}
                queryKey="/api/friend-groups"
                groupId={group.groupId}
              />
            </ListRenderContatiner>
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
  padding: 20px;
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

const FlexDiv = styled.div<{ gap?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;

const ListRenderContatiner = styled.div`
  display: flex;
  flex-direction: column;
`;
