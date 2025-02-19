import styled from 'styled-components';
import UnCheckBoxIcon from '../assets/images/UnCheckBoxIcon.svg';
import CheckBoxIcon from '../assets/images/CheckBoxIcon.svg';

import useFriendStore from '../store/useFriendStore';
import useAuthStore from '../store/authStore';
import useGetData from '../hooks/useGetData';
import { useState } from 'react';
import { Task } from '../store/useTaskStore';
import { ShareAss } from '../apis/commuApi';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const SelectFriendsModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 452px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`;

const SelectFriendsModalTitle = styled.h5`
  font-size: 23px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
  margin-left: 24px;
`;

const SelectAllFriends = styled.div`
  display: flex;
  width: 394px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 50px;
  margin-left: 29px;
`;

const FriendsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  white-space: nowrap;
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 29px;
`;

const FriendsNameSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const FriendsNickname = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  width: 150px; /* 원하는 고정 너비 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  white-space: normal; /* 줄바꿈 허용 */
`;

const FriendsNameAndMemo = styled.div`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
`;

const FriendsMemoSection = styled.div`
  display: flex;
  width: 200px;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SelectShareAss: React.FC<{ friendId: number }> = ({ friendId }) => {
  const { closeFriendModal } = useFriendStore();

  const { id: userId } = useAuthStore();

  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [checkedFriends, setCheckedFriends] = useState<Record<number, boolean>>(
    {}
  );

  const { data: tasks } = useGetData(`/api/assignment?userId=${userId}`);

  const shareAssMutation = useMutation({
    mutationFn: ({
      friendId,
      assignmentIds,
    }: {
      friendId: number;
      assignmentIds: number[];
    }) => ShareAss({ friendId, assignmentIds }),

    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        text: '과제가 공유되었습니다',
        timer: 2000,
        showConfirmButton: false,
      });
      closeFriendModal();
    },

    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '과제 공유에 실패했습니다',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  const isAllChecked = tasks.every(
    (task: Task) => checkedFriends[task.assignmentId]
  );

  const handleSelectAll = () => {
    if (isAllChecked) {
      setSelectedTasks([]); // 전체 해제
      setCheckedFriends({}); // 전체 해제
    } else {
      const allChecked = tasks.reduce(
        (acc: Record<number, boolean>, task: Task) => {
          acc[task.assignmentId] = true;
          return acc;
        },
        {} as Record<number, boolean>
      );
      setSelectedTasks(tasks.map((task: Task) => task.assignmentId)); // 전체 선택
      setCheckedFriends(allChecked); // 전체 선택
    }
  };

  const handleTaskToggle = (assignmentId: number) => {
    const newSelectedTasks = [...selectedTasks];
    if (selectedTasks.includes(assignmentId)) {
      setSelectedTasks(newSelectedTasks.filter((id) => id !== assignmentId)); // 선택 해제
      setCheckedFriends((prevState) => ({
        ...prevState,
        [assignmentId]: false,
      }));
    } else {
      setSelectedTasks([...newSelectedTasks, assignmentId]); // 선택
      setCheckedFriends((prevState) => ({
        ...prevState,
        [assignmentId]: true,
      }));
    }
  };

  return (
    <ModalWrapper onClick={closeFriendModal}>
      <SelectFriendsModalOverlay onClick={(e) => e.stopPropagation()}>
        <SelectFriendsModalTitle>공유할 과제 선택</SelectFriendsModalTitle>

        <SelectAllFriends>
          전체 선택
          <div style={{ cursor: 'pointer' }} onClick={handleSelectAll}>
            <img
              src={isAllChecked ? CheckBoxIcon : UnCheckBoxIcon}
              alt="Checkbox Icon"
            />
          </div>
        </SelectAllFriends>
        {tasks.map((task: Task) => (
          <FriendsItem key={task.assignmentId}>
            <FriendsNameSection>
              <FriendsNickname>{task.title}</FriendsNickname>
              <FriendsNameAndMemo></FriendsNameAndMemo>
            </FriendsNameSection>
            <FriendsMemoSection>
              <FriendsNameAndMemo>마감일</FriendsNameAndMemo>
              <FriendsNameAndMemo>{task.due_date}</FriendsNameAndMemo>

              <div
                onClick={() => handleTaskToggle(task.assignmentId)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={
                    checkedFriends[task.assignmentId]
                      ? CheckBoxIcon
                      : UnCheckBoxIcon
                  }
                  alt="Checkbox Icon"
                />
              </div>
            </FriendsMemoSection>
          </FriendsItem>
        ))}

        <ConfirmButton
          onClick={() =>
            shareAssMutation.mutate({
              friendId,
              assignmentIds: selectedTasks,
            })
          }
        >
          공유하기
        </ConfirmButton>
      </SelectFriendsModalOverlay>
    </ModalWrapper>
  );
};

export default SelectShareAss;
