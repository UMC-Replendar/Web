import { useState } from 'react';
import styled from 'styled-components';
import AddTaskModal from '../modal/AddTaskModal';
import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import PlusIcon from '../assets/images/PlusIcon.svg';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';
import EditTaskModal from '../modal/EditTaskModal';
import useModalStore from '../store/modalStore';
// import useTaskStore from '../store/useTaskStore';
import useGetData from '../hooks/useGetData';

const PageWrapper = styled.div`
  margin-top: 79px;
  margin-left: 66px;
  margin-right: 163px;
  display: flex;
  flex-direction: column;
`;

const MainPageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftTitles = styled.div`
  display: flex;
`;

const MainPageTitleBox = styled.div`
  display: flex;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background: #fcf6f5;
  width: 200px;
  height: fit-content;
  cursor: pointer;
`;

const MainPageTitle = styled.h5`
  margin: 0;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: none;
  background: #e8e8e8;
  color: black;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
`;

const More = styled.div`
  display: flex;
  padding: 0px 6px;
  align-items: center;
  gap: 6px;
  color: #666666;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;

  img {
    width: 15px;
    height: 15px;
  }
`;

const TaskBox = styled.div<{ $isScrollable: boolean }>`
  border-radius: 0px 20px 20px 20px;
  background: #fcf6f5;
  padding: 52px 64px;
  ${({ $isScrollable }) =>
    $isScrollable
      ? `
    max-height: 744px;
    overflow-y: auto;
  `
      : `
    max-height: none;
    overflow-y: visible;
  `}
`;

const TaskBlockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskBlock = styled.div<{ color: string }>`
  display: flex;
  padding: 14px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  width: 100%;
`;

const TaskInfo = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TaskCompleteButton = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(270deg, #18b9dd 0%, #63d8f2 100%);
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
  white-space: nowrap;
`;

interface TaskProps {
  assignmentId: number;
  color: string;
  name: string;
  remainingTime: string;
  memo: string;
  onComplete: () => void;
  onEdit: () => void; // 수정 버튼 이벤트 추가
}

function TaskItem({
  color,
  name,
  remainingTime,
  onComplete,
  onEdit,
}: TaskProps) {
  return (
    <TaskBlockContainer onClick={onEdit}>
      <TaskBlock color={color}>
        <TaskInfo>{name}</TaskInfo>
        <TaskInfo>{remainingTime}</TaskInfo>
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지
          onComplete();
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
}

function OngoingTasks() {
  // const { tasks, setTasks, deleteTask, updateRemainingTimes } = useTaskStore(); // Zustand에서 상태 가져오기
  const { isOpen, openModal, closeModal, modalContent } = useModalStore(); // useModalStore 추가했어요요
  const userId = 4;
  const {
    data: tasks,
    isLoading,
    isError,
  } = useGetData(`/api/assignment?userId=${userId}`);
  const [visibleTasksCount, setVisibleTasksCount] = useState(3);

  const handleShowMore = () => {
    setVisibleTasksCount((prev) => (prev < tasks.length ? tasks.length : 3));
  };

  const handleCompleteTask = (assignmentId: number) => {
    console.log(`Complete task with ID: ${assignmentId}`);
  };

  const handleEditTask = (task: any) => {
    openModal(
      <EditTaskModal
        task={task}
        onClose={closeModal}
        onComplete={() => handleCompleteTask(task.assignmentId)}
      />
    );
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  return (
    <PageWrapper>
      <MainPageTitleWrapper>
        <LeftTitles>
          <MainPageTitleBox>
            <MainPageTitle>진행 중인 과제</MainPageTitle>
          </MainPageTitleBox>
          <MainPageTitleBox style={{ background: '#E8E8E8' }}>
            <MainPageTitle>중요한 과제</MainPageTitle>
          </MainPageTitleBox>
        </LeftTitles>

        <div style={{ display: 'flex', gap: '31px' }}>
          <AddButton
            onClick={() =>
              openModal(
                <AddTaskModal
                  onTaskAdded={() => console.log('과제가 추가되었습니다.')}
                />
              )
            }
          >
            과제 추가하기
            <img src={PlusIcon} alt="Plus Icon" />
          </AddButton>

          {tasks.length > 3 && (
            <More onClick={handleShowMore}>
              {visibleTasksCount === tasks.length ? '닫기' : '더보기'}
              <img
                src={
                  visibleTasksCount === tasks.length
                    ? UpArrowIcon
                    : DownArrowIcon
                }
                alt={
                  visibleTasksCount === tasks.length ? 'Up Arrow' : 'Down Arrow'
                }
              />
            </More>
          )}
        </div>
      </MainPageTitleWrapper>

      <TaskBox $isScrollable={tasks.length > 10}>
        {tasks.slice(0, visibleTasksCount).map((task: any) => (
          <TaskItem
            key={task.assignmentId}
            assignmentId={task.assignmentId}
            color={'#7AC19A'}
            name={task.title}
            remainingTime={task.due_time}
            memo={task.memo}
            onComplete={() => handleCompleteTask(task.assignmentId)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </TaskBox>

      <CustomCalendar
        tasks={tasks.map((task: any) => ({
          name: task.title,
          deadline: task.due_date,
        }))}
      />
      {isOpen && modalContent}
    </PageWrapper>
  );
}

export default OngoingTasks;
