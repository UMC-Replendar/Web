import React, { useEffect } from 'react';
import BlueButton from '../../blueButton';
import styled from 'styled-components';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';
import { useInView } from 'react-intersection-observer';
import { IHistoryAllContent, IPage } from '../../../types';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteDataRaw } from '../../../hooks/useGetInfiniteDataRaw';
import AddTaskModal from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { respondToFriendRequest } from '../../../apis/commuApi';
import { HistoryAllSkeleton } from '../../skeleton';
const HistoryContainer = styled.div<{ background: string }>`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({ background }) => background};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HistoryEntryContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 100px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const HistoryText = styled.div`
  min-width: 100px;
  text-align: center;
`;

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const HistoryAll: React.FC = () => {
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteDataRaw(`/api/activity`, 5);

  const { ref, inView } = useInView({ threshold: 0 });
  const { openModal } = useModalStore();

  const queryClient = useQueryClient();

  const RespondToFriendMutation = useMutation({
    mutationFn: ({
      requestId,
      isAccepted,
    }: {
      requestId: number;
      isAccepted: boolean;
    }) => respondToFriendRequest({ requestId, isAccepted }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/activity/friend`],
      });

      Swal.fire({
        icon: 'success',
        text: '친구 요청을 수락했습니다',
        timer: 2000,
        showConfirmButton: false,
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '친구 수락에 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  if (isPending) {
    return <HistoryAllSkeleton count={5} />;
  }

  return (
    <>
      <HistoryContainer background={backgroundColor}>
        {data?.pages?.flatMap((page: IPage<IHistoryAllContent>) =>
          page.content.map((item: IHistoryAllContent) => (
            <HistoryEntryContainer key={item.createdAt}>
              <HistoryDetails>
                <HistoryText>{item.date}</HistoryText>
                <HistoryText>{item.time}</HistoryText>
                <HistoryText>{item.content}</HistoryText>
              </HistoryDetails>
              {item.type === '과제 추가' || item.type === '과제 공유' ? (
                item.isRegistered ? (
                  <BlueButton status="등록됨">등록됨</BlueButton>
                ) : (
                  <BlueButton
                    onClick={() =>
                      openModal(
                        <AddTaskModal
                          assId={item.assId}
                          onTaskAdded={() =>
                            console.log('과제가 추가되었습니다.')
                          }
                        />
                      )
                    }
                  >
                    내 일정에 등록
                  </BlueButton>
                )
              ) : item.type === '친구 요청' ? (
                item.check === 'CHECK' ? (
                  <BlueButton status="등록됨">수락됨</BlueButton>
                ) : (
                  <BlueButton
                    onClick={() =>
                      RespondToFriendMutation.mutate({
                        requestId: item.friendRequestId,
                        isAccepted: true,
                      })
                    }
                  >
                    수락
                  </BlueButton>
                )
              ) : null}{' '}
              {/*나머지는 버튼이 없음*/}
            </HistoryEntryContainer>
          ))
        )}
        {isFetching && <HistoryAllSkeleton count={5} />}
      </HistoryContainer>
      <Scroll ref={ref}>{isFetching && <ClipLoader color={'black'} />}</Scroll>
    </>
  );
};

export default HistoryAll;
