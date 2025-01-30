import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';

const MakeGroup: React.FC = () => {
  const { closeModal } = useModalStore();
  return (
    <Container>
      <h1>그룹 만들기</h1>
      <GapDiv>
        <div>
          {' '}
          <label>그룹명</label>
          <TransparentInput placeholder="그룹 이름을 입력하세요"></TransparentInput>
        </div>

        <label>그룹에 넣을 친구</label>
      </GapDiv>
      <PlusFriendsButton>
        <img src={GrayPlusIcon} alt="Gray Plus Icon" />
        추가
      </PlusFriendsButton>
      <FlexEndGroup>
        <PlusFriendsButton onClick={closeModal}>완료</PlusFriendsButton>
      </FlexEndGroup>
    </Container>
  );
};
export default MakeGroup;

const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`;
const FlexEndGroup = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
const GapDiv = styled.div`
  label {
    font-size: 16px;
    color: #666;
  }
  div {
    gap: 20px;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 0px;
  gap: 10px;
`;
const Container = styled.div`
  padding: 20px;
`;
