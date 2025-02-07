import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
`;

const SummaryButton = styled.button`
  display: flex;
  align-items: center;
  padding: 31.5px 26px;
  width: 100%;
  max-width: 320px;
  height: 161px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  gap: 69px;

  &:hover {
    background: #f0f0f0;
  }
`;

const TaskContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TaskText = styled.div`
  width: 150px;
  align-self: stretch;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`;

const TaskCount = styled.div`
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

interface TaskSummaryProps {
  taskData: any;
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ taskData }) => {
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      <SummaryButton onClick={() => navigate('/completed')}>
        <Icon src="src/assets/images/Worked.svg" alt="Completed Task Icon" />
        <TaskContainer>
          <TaskText>완료한 과제</TaskText>
          <TaskCount>{taskData.completed_TasksCount}</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/stored')}>
        <Icon
          src="src/assets/images/InfoIcons/Task.svg"
          alt="Stored Task Icon"
        />
        <TaskContainer>
          <TaskText>보관한 과제</TaskText>
          <TaskCount>{taskData.store_TasksCount}</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/notcompleted')}>
        <Icon
          src="src/assets/images/InfoIcons/Task.svg"
          alt="Incomplete Task Icon"
        />
        <TaskContainer>
          <TaskText>미완료 과제</TaskText>
          <TaskCount>{taskData.not_completedTasksCount}</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/important')}>
        <Icon
          src="src/assets/images/InfoIcons/Task.svg"
          alt="Important Task Icon"
        />
        <TaskContainer>
          <TaskText>중요한 과제</TaskText>
          <TaskCount>{taskData.important_taskCount}</TaskCount>
        </TaskContainer>
      </SummaryButton>
    </SummaryContainer>
  );
};

export default TaskSummary;
