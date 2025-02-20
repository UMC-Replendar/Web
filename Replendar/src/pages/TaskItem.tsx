import { styled } from 'styled-components';
import useTaskStore from '../store/useTaskStore';
import { useEffect, useState } from 'react';

import { sendNotification } from '../hooks/useNotification';

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
  cursor: pointer;
`;

const TaskInfo = styled.div<{ isOverdue?: boolean }>`
  color: ${({ isOverdue }) => (isOverdue ? 'red' : 'white')};
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

interface TaskItem {
  assignmentId: number;
  title: string;
  due_date: string;
  due_time: string;
  memo?: string;
  notification: 'ON' | 'OFF';
  visibility: 'ON' | 'OFF';
  notifyCycle?: string[];
  favorite?: 'ACTIVE' | 'INACTIVE';
  isOverdue: boolean;
  due_datetime: string;
  color: string;
}

interface TaskProps {
  task: TaskItem;
  onComplete: (assId: number) => void;
  onEdit: (assId: number) => void;
  selectedTab: 'ongoing' | 'important';
}

function TaskItem({ task, onComplete, onEdit, selectedTab }: TaskProps) {
  const { fetchTasks, fetchImportantTasks } = useTaskStore();

  const [dueTime, setDueTime] = useState(task.due_time);
  const [dueDateTime, setDueDateTime] = useState(task.due_datetime);
  const [isOverdue, setIsOverdue] = useState(task.isOverdue);
  const [timeNumbers, setTimeNumbers] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const updateDueTime = () => {
      if (selectedTab === 'ongoing') {
        setDueTime(task.due_time);
        fetchTasks();
      } else if (selectedTab === 'important') {
        setDueDateTime(task.due_datetime);
        fetchImportantTasks();
      }
      const formattedtime = selectedTab === 'ongoing' ? dueTime : dueDateTime;
      setIsOverdue((formattedtime || '').includes('-'));
      if (isOverdue) {
        setTimeNumbers([0, 0, 0, 0]);
      } else {
        const numbers = formattedtime.match(/\d+/g)?.map(Number) || [
          0, 0, 0, 0,
        ];
        setTimeNumbers(numbers);

        // 알람 조건: 0d 1h 0m 0s일 때
        if (task.notification === 'ON' && numbers.join(' ') === '0 1 0 0') {
          sendNotification(
            `'${task.title}' 과제 마감 알림!`,
            '과제를 확인하세요!'
          );
        }
      }
    };

    const debounceUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDueTime, 800);
    };

    debounceUpdate();
    return () => clearTimeout(timeoutId);
  }, [selectedTab, task.due_time, task.due_datetime, dueTime, dueDateTime]);

  return (
    <TaskBlockContainer onClick={() => onEdit(task.assignmentId)}>
      <TaskBlock color={task.color}>
        <TaskInfo>{task.title}</TaskInfo>

        {isOverdue ? (
          <TaskInfo isOverdue={isOverdue}>과제가 마감되었습니다</TaskInfo>
        ) : (
          <TaskInfo>
            {selectedTab === 'ongoing' ? dueTime : dueDateTime}
          </TaskInfo>
        )}
      </TaskBlock>
      <TaskCompleteButton
        onClick={(e) => {
          e.stopPropagation();
          onComplete(task.assignmentId);
        }}
      >
        완료
      </TaskCompleteButton>
    </TaskBlockContainer>
  );
}

export default TaskItem;
