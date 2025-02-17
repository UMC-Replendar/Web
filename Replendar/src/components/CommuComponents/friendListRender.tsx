import styled from 'styled-components';
import { NineDots } from '../CommuComponents/commuIcons';
import useGetData from '../../hooks/useGetData';
import { useState } from 'react';
import { SmallToggleSwitch } from '../../modal/EditTaskModal';
import DefaultProfileImg from '../../assets/images/SideBarIcons/DefaultProfileImg.svg';
import { IFriendList } from '../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  setBestFriendStatus,
  deleteFriend,
  patchNote,
} from '../../apis/commuApi';
import BlueButton from '../blueButton';
import { groupDeleteFriend } from '../../apis/commuApi';
import CustomCalendar from '../OngoingComponents/CustomCalendar';
import Swal from 'sweetalert2';
import useFriendStore from '../../store/useFriendStore';
import SelectShareAss from '../../modal/SelectShareAss';

const FriendListRender: React.FC<{
  data: IFriendList[]; // 데이터는 props로 전달
  queryKey: string;
  groupId?: number;
}> = ({ data, queryKey, groupId }) => {
  // props로 data를 받음
  const queryClient = useQueryClient();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    selectedId: number | null;
    note: string; // 메모 상태를 관리
  }>({
    isOpen: false,
    selectedId: null,
    note: '',
  });

  const { isFriendModalOpen, openFriendModal } = useFriendStore();

  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState<string>('');
  const [calendarShow, setCalendarShow] = useState(false);

  const bestFriendmutation = useMutation({
    mutationFn: ({
      friendId,
      buddyStatus,
    }: {
      friendId: number;
      buddyStatus: string;
    }) => setBestFriendStatus({ friendId, buddyStatus }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '친한 친구 설정하는 데 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  const deleteFriendmutation = useMutation({
    mutationFn: ({ friendId }: { friendId: number }) => deleteFriend(friendId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '친구 삭제하는 데 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  const patchNoteMutation = useMutation({
    mutationFn: ({ friendId, note }: { friendId: number; note: string }) =>
      patchNote({ friendId, note }), // 메모 업데이트를 위한 API 호출
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/friends/note?friendId=${modalState.selectedId}`], // 쿼리 캐시를 무효화하여 데이터를 최신 상태로 유지
      });
      setIsEditing(false); // 편집 종료
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '메모 업데이트에 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      }); // 메모 업데이트 실패 메시지
      console.error(error);
    },
  });

  const { data: noteData } = useGetData(
    modalState.selectedId
      ? `/api/friends/note?friendId=${modalState.selectedId}`
      : ''
  );

  const { data: tasks } = useGetData(
    calendarShow
      ? `/api/assignment/friend/${modalState.selectedId}/public-assignments`
      : ''
  );

  const groupDeleteFriendMutation = useMutation({
    mutationFn: ({
      groupId,
      friendshipId,
    }: {
      groupId: number;
      friendshipId: number;
    }) => groupDeleteFriend({ groupId, friendshipId }),

    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        text: '친구가 삭제되었습니다',
        timer: 2000,
        showConfirmButton: false,
      });
      queryClient.invalidateQueries({ queryKey: [`/api/friend-groups`] });
    },

    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '그룹에 친구 삭제하기 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  const hasData = Array.isArray(noteData) && noteData.length > 0;
  const memo = hasData ? noteData[0].note : null;

  const handleNoteClick = () => {
    setIsEditing(true);
    setUpdatedNote(noteData?.note || '');
  };
  const handleSaveNote = () => {
    patchNoteMutation.mutate({
      friendId: modalState.selectedId!,
      note: updatedNote,
    });
  };

  const handleNineDotsClick = (id: number) => {
    setCalendarShow(false);
    setModalState((prev) => ({
      isOpen: prev.selectedId !== id || !prev.isOpen,
      selectedId: prev.selectedId === id ? null : id,
      note: prev.selectedId === id ? prev.note : '', // 메모를 리셋
    }));
  };
  return (
    <>
      {data.map((item: IFriendList, index: number) => (
        <div key={item.friendId}>
          {calendarShow && modalState.selectedId && (
            <>
              <StyledModal>
                <FlexStartDiv>
                  <CenterDiv width="100px" bold>
                    {item.nickname}
                  </CenterDiv>

                  <CenterDiv bold>
                    진행 중인 과제: {item.ongoingAssignments}개
                  </CenterDiv>
                </FlexStartDiv>
                <CloseButton onClick={() => setCalendarShow(false)}>
                  닫기
                </CloseButton>
                <CustomCalendar
                  tasks={tasks.map((task: any) => ({
                    name: task.title,
                    deadline: task.due_date,
                  }))}
                />
              </StyledModal>
            </>
          )}
          {isFriendModalOpen && <SelectShareAss friendId={item.friendId} />}
          <SpaceBtwDiv>
            <FlexDiv>
              <ProfileImg src={item.profileImageUrl || DefaultProfileImg} />
              <CenterDiv width="100px">{item.nickname}</CenterDiv>
            </FlexDiv>

            <CenterDiv>진행 중인 과제: {item.ongoingAssignments}개</CenterDiv>
            <RightAlignedItem>
              {groupId && (
                <BlueButton
                  status="그룹에서 삭제하기"
                  onClick={() =>
                    groupDeleteFriendMutation.mutate({
                      groupId: groupId,
                      friendshipId: item.friendshipId,
                    })
                  }
                >
                  그룹에서 삭제하기
                </BlueButton>
              )}
              <NineDots
                fill={
                  modalState.selectedId === item.friendId
                    ? 'rgba(74, 198, 226, 1)'
                    : 'black'
                }
                onClick={() => handleNineDotsClick(item.friendId)}
              />
            </RightAlignedItem>
          </SpaceBtwDiv>
          {modalState.isOpen && modalState.selectedId === item.friendId && (
            <Modal
              onClick={(e) => e.stopPropagation()}
              top={`${index * 67 + 320}px`}
            >
              <ModalContent>
                <span>진행중인 과제: {item.ongoingAssignments}개</span>
                <div onClick={() => setCalendarShow(true)}>일정확인</div>
              </ModalContent>

              <P onClick={openFriendModal}>과제공유</P>

              <ModalContent>
                <div
                  style={{
                    display: 'flex',
                    transformOrigin: 'left',
                    alignItems: 'center', // 수직 중앙 정렬
                    transform: 'scale(0.5)', // 크기 조정
                  }}
                >
                  <SmallToggleSwitch
                    isOn={item.buddyStatus === 'YES'}
                    onToggle={() => {
                      bestFriendmutation.mutate({
                        friendId: item.friendId,
                        buddyStatus: item.buddyStatus === 'YES' ? 'NO' : 'YES',
                      });
                    }}
                  />
                </div>
                <div>친한친구설정</div>
              </ModalContent>
              <ModalContent>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      onChange={(e) => setUpdatedNote(e.target.value)}
                      value={updatedNote}
                      placeholder="메모를 수정하세요"
                    />
                    <div onClick={handleSaveNote}>수정완료</div>
                  </>
                ) : (
                  <>
                    <span>{memo}</span>
                    <div onClick={handleNoteClick}>메모수정</div>
                  </>
                )}
              </ModalContent>
              <P
                onClick={() =>
                  deleteFriendmutation.mutate({ friendId: item.friendId })
                }
              >
                친구삭제
              </P>
            </Modal>
          )}
        </div>
      ))}
    </>
  );
};

export default FriendListRender;

const ProfileImg = styled.div<{ src: string }>`
  width: 34px;
  height: 34px;
  border-radius: 300px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  min-width: 300px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: rgba(57, 130, 226, 1);
  }
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const CenterDiv = styled.div<{ width?: string; bold?: boolean }>`
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || 'auto'};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
const FlexDiv = styled.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const FlexStartDiv = styled.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const Modal = styled.div<{ top: string }>`
  position: absolute;
  top: ${(props) => props.top};
  right: 250px;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  flex-direction: column;
  z-index: 1;
`;
const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 8px 10px;
  height: 38px;
  z-index: 2;

  span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 18.2px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
  div {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

const P = styled.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`;
