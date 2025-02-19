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
  width: 100%;
  font-size: 19px;
  padding: 0px 20px;
  padding-right: 30px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
const TimeDiv = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 67px;
`;
const CenterDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 120%;
  height: 67px;
`;

const RightAlignedItem = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
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
  const { data, isPending, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteData(`/api/activity/friend`, 5);

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
    return <NewsSkeleton count={5} />;
  }

  return (
    <div>
      {data?.pages?.map((page: IPage<IFriendNewsContent>) =>
        page.content.map((item: IFriendNewsContent) => (
          <FlexDiv key={`${item.assId}-${item.createdAt}`}>
            <TimeDiv>{item.timeStamp}</TimeDiv>
            <CenterDiv>{item.content}</CenterDiv>
            <RightAlignedItem>
              {item.type === '과제 활동 로그' ? (
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
              ) : null}
            </RightAlignedItem>
          </FlexDiv>
        ))
      )}
      {isFetching && <NewsSkeleton count={5} />}
      <Scroll ref={ref} className="scroll">
        {isFetching && <ClipLoader color={'black'} />}
      </Scroll>
    </div>
  );
};

export default FriendNewsRender;
