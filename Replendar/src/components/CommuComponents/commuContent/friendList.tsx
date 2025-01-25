import styled from 'styled-components';
import { NineDots } from '../commuIcons';

const Container = styled.div`
  width: 95%;
  background-color: white;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: spae-around;
  padding: 10px 20px 10px 20px;
  gap: 15px;
  box-sizing: border-box;
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 12px;
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
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
  gap: 20px;
`;

const FriendList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 10 : 5;

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
];
