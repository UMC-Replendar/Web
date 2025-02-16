import styled from 'styled-components';
import BlueButton from './blueButton';
import { useInView } from 'react-intersection-observer';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteData } from '../hooks/useGetInfiniteData';
import { useEffect } from 'react';
import { IFriendNewsContent, IPage } from '../types';
import useModalStore from '../store/modalStore';
import AddTaskModal from '../modal/AddTaskModal';
import NewsSkeleton from './skeleton';
import { respondToFriendRequest } from '../apis/commuApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const FlexDiv = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
  font-size: 19px;
  margin-bottom: 1px;
  border-radius: 20px;
  padding: 0px 30px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(5),
  &:nth-child(8) {
  }
`;

/* &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:nth-last-child(2) {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
 */

const RightAlignedItem = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
`;

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FriendNewsRender = () => {
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteData(`/api/activity/friend`, 5);

  useEffect(() => {
    console.log('Data', data?.pages);
    console.log('hasNextPage', hasNextPage);
  }, [data]);

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

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
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [isFetching, hasNextPage, fetchNextPage, inView]);

  if (isPending) {
    return <NewsSkeleton count={5}></NewsSkeleton>;
  }

  return (
    <div>
      {data?.pages?.map((page: IPage<IFriendNewsContent>) =>
        page.content.map((item: IFriendNewsContent) => (
          <FlexDiv key={`${item.assId}-${item.createdAt}`}>
            <CenterDiv>{item.timeStamp}</CenterDiv>
            <CenterDiv>{item.content}</CenterDiv>
            <RightAlignedItem>
              {item.type === '과제' ? (
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
              ) : item.type === '친구요청' ? (
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
              ) : null}
            </RightAlignedItem>
          </FlexDiv>
        ))
      )}
      {isFetching && <NewsSkeleton count={5}></NewsSkeleton>}
      <Scroll ref={ref} className="scroll">
        {isFetching && <ClipLoader color={'black'} />}
      </Scroll>
    </div>
  );
};

export default FriendNewsRender;
