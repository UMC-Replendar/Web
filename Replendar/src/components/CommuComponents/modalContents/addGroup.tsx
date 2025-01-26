import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import useModalStore from '../../../store/modalStore';
import styled from 'styled-components';

const AddGroup: React.FC = () => {
  const { closeModal } = useModalStore();
  return (
    <>
      <h1>그룹에 추가하기</h1>
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

export default AddGroup;
