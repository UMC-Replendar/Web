import styled from 'styled-components';
import BlueButton from '../../blueButton';
import { useInView } from 'react-intersection-observer';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetInfiniteData } from '../../../hooks/useGetInfiniteData';
import { useEffect } from 'react';
import { IDepartmentNewsContent, IPage } from '../../../types';
import NewsSkeleton from '../../skeleton';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);yarn add react-spinners

  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  jsutify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Scroll = styled.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DepartmentNews = () => {
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteData('/api/major/lectures/news', 4);

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [isFetching, hasNextPage, fetchNextPage, inView]);

  //데이터를 처음 요청할 때부터 응답이 올 때까지 데이터를 기다리는 상태
  //  isFetching은 데이터가 이미 로드된 후 추가 데이터를 요청할 때
  if (isPending) {
    return (
      <Container>
        <NewsSkeleton count={5}></NewsSkeleton>
      </Container>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      {data?.pages?.map((page: IPage<IDepartmentNewsContent>) =>
        page.content.map((item: IDepartmentNewsContent) => (
          <FlexDiv key={item.friendId}>
            <CenterDiv>{item.time}</CenterDiv>
            <CenterDiv>
              {item.nickname}님이 {item.title}를 등록하였습니다
            </CenterDiv>
            <RightAlignedItem>
              {item.check === 'CHECK' ? (
                <BlueButton status="등록됨">등록됨</BlueButton>
              ) : (
                <BlueButton>내 일정에 등록</BlueButton>
              )}
            </RightAlignedItem>
          </FlexDiv>
        ))
      )}
      {isFetching && (
        <Container>
          <NewsSkeleton count={5}></NewsSkeleton>
        </Container>
      )}
      <Scroll ref={ref} className="scroll">
        {isFetching && <ClipLoader color={'#fff'}></ClipLoader>}
      </Scroll>
    </Container>
  );
};

export default DepartmentNews;
