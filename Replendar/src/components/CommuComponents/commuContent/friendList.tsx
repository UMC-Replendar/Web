import styled from 'styled-components';
import { NineDots } from '../commuIcons';
import useGetData from '../../../hooks/useGetData';

const Container = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  padding: 20px;

  box-sizing: border-box;
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
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

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 12 : 5;
  const url = expanded
    ? `https://api.replendar.site/api/friends`
    : `https://api.replendar.site/api/friends?limit=5`;

  /*const { data: data1, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }*/

  return (
    <Container>
      {data.slice(0, visibleItems).map((item, index) => (
        <SpaceBtwDiv key={index}>
          <FlexDiv>
            <img src={item.image} alt="프로필 사진" />
            <CenterDiv width="100px">{item.nickname}</CenterDiv>
          </FlexDiv>

          <CenterDiv>진행 중인 과제: {item.ongoingTaskNum}개</CenterDiv>
          <RightAlignedItem>
            <NineDots></NineDots>
          </RightAlignedItem>
        </SpaceBtwDiv>
      ))}
    </Container>
  );
};

export default FriendList;

const data = [
  {
    id: 1,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'CodeMaster',
    ongoingTaskNum: 2,
  },
  {
    id: 2,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'DesignGuru',
    ongoingTaskNum: 3,
  },
  {
    id: 3,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 4,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 5,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
  {
    id: 6,
    image: 'src/assets/images/프로필 사진.png',
    nickname: 'BugHunter',
    ongoingTaskNum: 1,
  },
];
