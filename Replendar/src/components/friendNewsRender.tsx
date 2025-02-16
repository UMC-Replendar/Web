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
  &:nth-child(7),
  &:nth-child(8) {
    margin-bottom: 1.5px; /* 얼탱없네 얘네 */
  }
`;

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
    console.log('Data', data);
  }, [data]);
  const { ref, inView } = useInView({ threshold: 0 });

  const { openModal } = useModalStore();

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [isFetching, hasNextPage, fetchNextPage, inView]);

  if (isPending) {
    return <NewsSkeleton count={5}></NewsSkeleton>;
  }

  return (
    <>
      {data?.pages?.map((page: IPage<IFriendNewsContent>) =>
        page.content.map((item: IFriendNewsContent) => (
          <FlexDiv key={item.createdAt}>
            <CenterDiv>{item.time}</CenterDiv>
            <CenterDiv>{item.content}</CenterDiv>
            <RightAlignedItem>
              {item.registered ? (
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
              )}
            </RightAlignedItem>
          </FlexDiv>
        ))
      )}
      {isFetching && <NewsSkeleton count={5}></NewsSkeleton>}
      <Scroll ref={ref} className="scroll">
        {isFetching && <ClipLoader color={'black'} />}
      </Scroll>
    </>
  );
};

export default FriendNewsRender;
