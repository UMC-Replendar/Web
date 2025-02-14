import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddTaskModal from '../modal/AddTaskModal';
import CustomCalendar from '../components/OngoingComponents/CustomCalendar';
import PlusIcon from '../assets/images/PlusIcon.svg';
import DownArrowIcon from '../assets/images/DownArrowIcon.svg';
import UpArrowIcon from '../assets/images/UpArrowIcon.svg';
import EditTaskModal from '../modal/EditTaskModal';
import useModalStore from '../store/modalStore';
import useAuthStore from '../store/authStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useThemeStore, themeBackground } from '../store/useThemeStore';
import useDebounce from '../hooks/useDebounce';

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

const MainPageTitleBox = styled.div<{
  isSelected: boolean;
  background: string;
}>`
  display: flex;
  padding: 17px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  background: ${(props) => (props.isSelected ? props.background : '#e8e8e8')};
  color: ${({ isSelected }) => (isSelected ? 'black' : '#7e7f7f')};
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

const TaskBox = styled.div<{ $isScrollable: boolean; background: string }>`
  border-radius: 0px 20px 20px 20px;
  background: ${({ background }) => background};
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
  task: {
    assignmentId: number;
    color: string;
    title: string;
    due_date: string;
    due_time: string;
    memo: string;
    notification: string;
  };
  onComplete: (assignmentId: number) => void;
  onEdit: (task: TaskProps['task']) => void;
}

//과제 시간이 마이너스가 되면 조회 목록에서 삭제해야하는데...
function TaskItem({ task, onComplete, onEdit }: TaskProps) {
  const [dueTime, setDueTime] = useState(task.due_time);
  const [dueTimeNumbers, setDueTimeNumbers] = useState<number[]>([]);

  const sendNotification = (message: string) => {
    if (Notification.permission === 'granted') {
      new Notification('과제 마감 알림', { body: message });
    }
  };

  useEffect(() => {
    setDueTime(task.due_time);
    const timeNumbers = task.due_time.match(/-?\d+/g)?.map(Number) || [];
    if (timeNumbers) {
      setDueTimeNumbers(timeNumbers.map(Number));
      if (
        task.notification == 'ON' &&
        dueTimeNumbers[0] == 0 &&
        dueTimeNumbers[1] == 1 &&
        dueTimeNumbers[2] == 0 &&
        dueTimeNumbers[3] == 0
      ) {
        sendNotification(`'${task.title}' 과제 마감 알림!`);
      }
    } else {
      setDueTimeNumbers([0, 0, 0, 0]); // 기본값
    }
  }, [task.due_time]);

  return (
    <TaskBlockContainer onClick={() => onEdit(task)}>
      <TaskBlock color={task.color}>
        <TaskInfo>{task.title}</TaskInfo>
        <TaskInfo>{dueTime}</TaskInfo>
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지
          onComplete(task.assignmentId);
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
}

function OngoingTasks() {
  const { isOpen, openModal, closeModal, modalContent } = useModalStore();
  const { token, id: userId } = useAuthStore();
  const queryClient = useQueryClient();

  const { selectedTheme } = useThemeStore();

  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  // 진행 중인 과제 데이터 가져오기
  // const {
  //   data: tasks = [],
  //   isLoading,
  //   isError,
  // } = useGetData(`/api/assignment?userId=${userId}`, {
  //   headers: { Authorization: `${token}` },
  // });

  const debouncedUserId = useDebounce(userId, 1000);

  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const deleteTasks = async (assid: number) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?assId=${assid}`,
        {
          headers: { Authorization: `${token}` },
        }
      );
      console.log(response.data, assid);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(tasks);
  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?userId=${debouncedUserId}`,
        {
          headers: { Authorization: `${token}` },
        }
      );
      if (Array.isArray(response.data.result)) {
        const filteredTasks = response.data.result.filter((task) => {
          // ✅ 정규식을 사용하여 숫자만 추출
          const timeNumbers = task.due_time.match(/-?\d+/g)?.map(Number) || [];
          if (timeNumbers[0] < 0) {
            console.log(task.assignmentId);
            deleteTasks(task.assignmentId);
          }
          // ✅ 모든 시간이 0 이하(음수 포함)라면 과제 제외
          return !timeNumbers.some((num) => num < 0);
        });

        setTasks(filteredTasks); // ✅ 필터링된 과제만 저장
      } else {
        console.warn('⚠️ API 응답이 배열이 아님:', response.data);
        setTasks([]);
      }
    } catch (error) {
      console.error('❌ 과제 데이터 가져오기 실패:', error);
      setTasks([]);
    }
  };

  useEffect(() => {
    if (!debouncedUserId) return;

    setIsLoading(true);
    fetchTasks()
      .then(() => setIsLoading(false))
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });

    // 1초마다 실행
    const interval = setInterval(() => {
      fetchTasks();
    }, 1000);

    return () => clearInterval(interval); // ✅ 컴포넌트 언마운트 시 정리
  }, [debouncedUserId]);

  const [selectedTab, setSelectedTab] = useState<'ongoing' | 'important'>(
    'ongoing'
  );

  const [visibleTasksCount, setVisibleTasksCount] = useState(3);

  const handleShowMore = () => {
    setVisibleTasksCount((prev) => (prev < tasks.length ? tasks.length : 3));
  };

  // 과제 완료 처리
  const completeTaskMutation = useMutation({
    mutationFn: async (assId: number) => {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/complete/${assId}?assId=${assId}`,
        {},
        {
          headers: { Authorization: `${token}` },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', userId] }); // 과제 목록 갱신
    },
    onError: (error) => {
      console.error('과제 완료 처리 중 오류 발생:', error);
      alert('과제 완료 처리 중 문제가 발생했습니다.');
    },
  });

  const handleCompleteTask = (assId: number) => {
    completeTaskMutation.mutate(assId, {
      onSuccess: () => {
        console.log(`과제 완료: ${assId}`);
        setTimeout(() => {
          closeModal();
          queryClient.invalidateQueries({ queryKey: ['tasks', userId] });
        }, 100);
      },
    });
  };

  const handleEditTask = (task: any) => {
    openModal(
      <EditTaskModal
        task={task}
        onClose={closeModal}
        onComplete={() => handleCompleteTask(task)}
      />
    );
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 데 실패했습니다.</div>;

  // 과제 색상 지정
  const taskColors = [
    themeColors[5],
    themeColors[2],
    themeColors[3],
    themeColors[4],
  ];

  return (
    <PageWrapper>
      <MainPageTitleWrapper>
        <LeftTitles>
          <MainPageTitleBox
            isSelected={selectedTab === 'ongoing'}
            onClick={() => setSelectedTab('ongoing')}
            background={backgroundColor}
          >
            <MainPageTitle>진행 중인 과제</MainPageTitle>
          </MainPageTitleBox>
          <MainPageTitleBox
            isSelected={selectedTab === 'important'}
            onClick={() => setSelectedTab('important')}
            background={backgroundColor}
          >
            <MainPageTitle>중요한 과제</MainPageTitle>
          </MainPageTitleBox>
        </LeftTitles>

        <div style={{ display: 'flex', gap: '31px' }}>
          <AddButton
            onClick={() =>
              openModal(
                <AddTaskModal
                  onTaskAdded={() =>
                    queryClient.invalidateQueries({
                      queryKey: ['tasks', userId],
                    })
                  }
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

      <TaskBox background={backgroundColor} $isScrollable={tasks.length > 10}>
        {tasks.slice(0, visibleTasksCount).map((task: any, index: number) => (
          <TaskItem
            key={task.assignmentId}
            task={{
              ...task,
              color: index < 4 ? taskColors[index] : themeColors[4],
            }}
            onComplete={handleCompleteTask}
            onEdit={() => handleEditTask(task.assignmentId)}
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
