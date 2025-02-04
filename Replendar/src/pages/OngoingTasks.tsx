import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import AddTaskModal from '../modal/AddTaskModal';
import PlusIcon from '../assets/images/PlusIcon.svg';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';
import EditTaskModal from '../modal/EditTaskModal';
import useModalStore from '../store/modalStore';
import useTaskStore from '../store/useTaskStore';

// 기존 스타일 정의
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

const TaskBox = styled.div<{ isScrollable: boolean }>`
  border-radius: 0px 20px 20px 20px;
  background: #fcf6f5;
  padding: 52px 64px;
  ${({ isScrollable }) =>
    isScrollable
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
  width: 100px;
  height: 50px;
  padding: 14px 30px;
  background: linear-gradient(270deg, #18b9dd 0%, #63d8f2 100%);
  border-radius: 50px;
  border: none;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  cursor: pointer;
  word-wrap: break-word;
  white-space: nowrap;
`;

interface TaskData {
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
  isBookmarked: boolean;
}

// =======================
// 스켈레톤 UI 관련 코드
// =======================

// 셔머 애니메이션 (로딩 효과)
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// 스켈레톤 기본 스타일
const SkeletonItem = styled.div`
  background: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f0f0f0 40px,
    #e0e0e0 80px
  );
  background-size: 600px;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 4px;
`;

// 스켈레톤 페이지 전체 레이아웃 (기존 PageWrapper와 동일한 마진 및 flex 설정)
const SkeletonPageWrapper = styled(PageWrapper)``;

const SkeletonMainTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SkeletonLeftTitles = styled.div`
  display: flex;
  gap: 10px;
`;

const SkeletonTitleBox = styled(SkeletonItem)`
  width: 200px;
  height: 50px;
  border-radius: 20px 20px 0 0;
`;

const SkeletonAddButton = styled(SkeletonItem)`
  width: 140px;
  height: 40px;
  border-radius: 50px;
`;

const SkeletonTaskBox = styled(SkeletonItem)<{ isScrollable?: boolean }>`
  padding: 52px 64px;
  border-radius: 0 20px 20px 20px;
  margin-bottom: 20px;
  ${({ isScrollable }) =>
    isScrollable
      ? `
      max-height: 744px;
      overflow-y: auto;
    `
      : `
      max-height: none;
      overflow-y: visible;
    `}
`;

const SkeletonTaskItem = styled(SkeletonItem)`
  height: 50px;
  border-radius: 50px;
  margin-bottom: 16px;
`;

const SkeletonCalendar = styled(SkeletonItem)`
  height: 300px;
  border-radius: 20px;
  margin-top: 20px;
`;

// 스켈레톤 UI 컴포넌트
function SkeletonOngoingTasks() {
  return (
    <SkeletonPageWrapper>
      <SkeletonMainTitleWrapper>
        <SkeletonLeftTitles>
          <SkeletonTitleBox />
          <SkeletonTitleBox style={{ background: '#cccccc' }} />
        </SkeletonLeftTitles>
        <SkeletonAddButton />
      </SkeletonMainTitleWrapper>
      <SkeletonTaskBox isScrollable>
        {Array.from({ length: 3 }).map((_, idx) => (
          <SkeletonTaskItem key={idx} />
        ))}
      </SkeletonTaskBox>
      <SkeletonCalendar />
    </SkeletonPageWrapper>
  );
}

// =======================
// 기존 OngoingTasks 컴포넌트
// =======================
function OngoingTasks() {
  const { tasks, deleteTask, updateRemainingTimes } = useTaskStore(); // Zustand에서 상태 가져오기
  const { isOpen, openModal, closeModal, modalContent } = useModalStore();

  // 로딩 상태 (예시: 2초 후 실제 데이터 준비)
  const [isLoading, setIsLoading] = useState(true);

  const [visibleTasksCount, setVisibleTasksCount] = useState(
    tasks.length <= 3 ? tasks.length : 3
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    updateRemainingTimes();
    const interval = setInterval(updateRemainingTimes, 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [updateRemainingTimes]);

  const handleShowMore = () => {
    if (visibleTasksCount < tasks.length) {
      setVisibleTasksCount(tasks.length);
    } else {
      setVisibleTasksCount(3);
    }
  };

  const handleCompleteTask = (name: string) => {
    deleteTask(name);
  };

  const handleEditTask = (task: TaskData) => {
    const taskIndex = tasks.findIndex((t) => t.name === task.name);
    if (taskIndex !== -1) {
      openModal(
        <EditTaskModal
          task={task}
          onClose={closeModal}
          onComplete={() => handleCompleteTask(task.name)}
        />
      );
    }
  };

  // 로딩 중일 때 스켈레톤 UI를 렌더링
  if (isLoading) {
    return <SkeletonOngoingTasks />;
  }

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
          <AddButton onClick={() => openModal(<AddTaskModal />)}>
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
      <TaskBox isScrollable={tasks.length > 10}>
        {tasks.slice(0, visibleTasksCount).map((task) => (
          <Task
            key={task.name}
            color={task.color}
            name={task.name}
            remainingTime={task.remainingTime || ''}
            onComplete={() => handleCompleteTask(task.name)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </TaskBox>
      <CustomCalendar
        tasks={tasks.map((task) => ({
          name: task.name,
          deadline: task.deadline,
        }))}
      />
      {isOpen && modalContent}
    </PageWrapper>
  );
}

interface TaskProps {
  color: string;
  name: string;
  remainingTime: string;
  onComplete: () => void;
  onEdit: () => void;
}

function Task({ color, name, remainingTime, onComplete, onEdit }: TaskProps) {
  return (
    <TaskBlockContainer onClick={onEdit}>
      <TaskBlock color={color}>
        <TaskInfo>{name}</TaskInfo>
        <TaskInfo>{remainingTime}</TaskInfo>
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
}

export default OngoingTasks;
