import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';

const MakeGroup: React.FC = () => {
  const { closeModal } = useModalStore();
  return (
    <>
      <h1>그룹 만들기</h1>
      <label>그룹명</label>
      <TransparentInput placeholder="그룹 이름을 입력하세요"></TransparentInput>
      <label>그룹에 넣을 친구</label>
      <PlusFriendsButton>
        {' '}
        <img src={GrayPlusIcon} alt="Gray Plus Icon" />
        추가
      </PlusFriendsButton>
      <PlusFriendsButton onClick={closeModal}>완료</PlusFriendsButton>
    </>
  );
};
export default MakeGroup;

const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
`;
