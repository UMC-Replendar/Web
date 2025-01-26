import styled from 'styled-components';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';

const CommuModalContent: React.FC = () => {
  return (
    <>
      <FlexGroup>
        /<Label>과제명</Label>
        <TransparentInput placeholder="과제 이름을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>강좌명</Label>
        <TransparentInput placeholder="강좌 이름을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        {' '}
        <Label>교수명</Label>
        <TransparentInput placeholder="교수님 성함을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>학년</Label>
        <TransparentInput placeholder="2학년"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>과제마감일</Label>
        <TransparentInput placeholder="YYYY/ / MM / DD HH:MM"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        {' '}
        <Label>공유할 친구</Label>{' '}
        <PlusFriendsButton>
          <img src={GrayPlusIcon} alt="Gray Plus Icon" />
          추가
        </PlusFriendsButton>
      </FlexGroup>
      <FlexGroup>
        <Label>메모</Label>
        <MemoDiv></MemoDiv>
      </FlexGroup>
      <FlexEndGroup>
        {' '}
        <PlusFriendsButton>일정 추가하기</PlusFriendsButton>
      </FlexEndGroup>
    </>
  );
};

export default CommuModalContent;

const MemoDiv = styled.div`
  backgroud-color: white;
  width: 300px;
  height: 200px;
  border: solid 1px black;
`;
const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
`;

const Label = styled.label`
  text-align: right;
  width: 100px;
`;
const FlexGroup = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`;
const FlexEndGroup = styled.label`
justify-content: flex-end;
 display: flex;
 padding: 5px;
  }
`;
