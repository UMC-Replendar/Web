import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';

const AddGroup: React.FC = () => {
  const { closeModal } = useModalStore();
  return (
    <Container>
      <h1>그룹에 추가하기</h1>
      <GapDiv>
        {' '}
        <label>그룹에 넣을 친구</label>
      </GapDiv>

      <PlusFriendsButton>
        {' '}
        <img src={GrayPlusIcon} alt="Gray Plus Icon" />
        추가
      </PlusFriendsButton>
      <FlexEndGroup>
        <PlusFriendsButton onClick={closeModal}>완료</PlusFriendsButton>
      </FlexEndGroup>
    </Container>
  );
};

export default AddGroup;
const FlexEndGroup = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
const Container = styled.div`
  padding: 20px;
`;
const GapDiv = styled.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`;
