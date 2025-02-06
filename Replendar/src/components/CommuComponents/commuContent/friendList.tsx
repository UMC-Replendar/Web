import styled from 'styled-components';
import { NineDots } from '../commuIcons';
import useGetData from '../../../hooks/useGetData';
import { useState, useEffect } from 'react';
import { SmallToggleSwitch } from '../../../modal/EditTaskModal';
import { ProfileImage } from '../commuIcons';
import { IFriendList } from '../../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  setBestFriendStatus,
  deleteFriend,
  patchNote,
} from '../../../apis/commuApi';

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
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

  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState<string>('');

  const url = expanded ? `/api/friends` : `/api/friends?limit=5`;

  const bestFriendmutation = useMutation({
    mutationFn: ({
      friendId,
      buddyStatus,
    }: {
      friendId: number;
      buddyStatus: string;
    }) => setBestFriendStatus({ friendId, buddyStatus }),
    onSuccess: (data) => {
      alert(data);
      queryClient.invalidateQueries({
        queryKey: [url],
      });
    },
    onError: (error: Error) => {
      alert('친한 친구 설정하는 데 실패했습니다');
      console.error(error);
    },
  });

  const deleteFriendmutation = useMutation({
    mutationFn: ({ friendId }: { friendId: number }) => deleteFriend(friendId),
    onSuccess: (data) => {
      alert(data);
      queryClient.invalidateQueries({
        queryKey: [url],
      });
    },
    onError: (error: Error) => {
      alert('친구 삭제하는 데 실패했습니다.');
      console.error(error);
    },
  });

  const patchNoteMutation = useMutation({
    mutationFn: ({ friendId, note }: { friendId: number; note: string }) =>
      patchNote({ friendId, note }), // 메모 업데이트를 위한 API 호출
    onSuccess: (data) => {
      alert(data); // 메모 업데이트 성공 메시지
      queryClient.invalidateQueries({
        queryKey: [`/api/friends/note?friendId=${modalState.selectedId}`], // 쿼리 캐시를 무효화하여 데이터를 최신 상태로 유지
      });
      setIsEditing(false); // 편집 종료
    },
    onError: (error: Error) => {
      alert('메모 업데이트에 실패했습니다.'); // 메모 업데이트 실패 메시지
      console.error(error);
    },
  });

  const { data: noteData } = useGetData(
    modalState.selectedId
      ? `/api/friends/note?friendId=${modalState.selectedId}`
      : ''
  );

  const { data, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }

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
    setModalState((prev) => ({
      isOpen: prev.selectedId !== id || !prev.isOpen,
      selectedId: prev.selectedId === id ? null : id,
      note: prev.selectedId === id ? prev.note : '', // 메모를 리셋
    }));
  };
  return (
    <Container>
      {data.length === 0 && <div>친구 없음</div>}
      {data.map((item: IFriendList, index: number) => (
        <div key={item.friendId}>
          <SpaceBtwDiv>
            <FlexDiv>
              <ProfileImage width={'30'} height={'30'} />

              <CenterDiv width="100px">{item.nickname}</CenterDiv>
            </FlexDiv>

            <CenterDiv>진행 중인 과제: {item.ongoingAssignments}개</CenterDiv>
            <RightAlignedItem>
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
                <div>일정확인</div>
              </ModalContent>

              <P>과제공유</P>

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
                    <span>{noteData.note}</span>
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
    </Container>
  );
};

export default FriendList;

const Container = styled.div`
  width: 100%;
  height: 855px;
  padding: 20px;
  overflow-y: auto;
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(7),
  &:nth-child(8) {
    margin-bottom: 1.5px;
  }
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
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
