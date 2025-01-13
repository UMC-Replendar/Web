import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
`;

const SummaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 250px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;
const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TaskText = styled.div`
  font-size: 23px;
  text-align: left;
`;

const TaskCount = styled.div`
  font-size: 23px;
  text-align: right;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;

function TaskSummary() {
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      <SummaryButton onClick={() => navigate('/completed')}>
        <Icon src="src/assets/images/Worked.svg" alt="Completed Task Icon" />
        <TaskContainer>
          <TaskText>완료한 과제</TaskText>
          <TaskCount>22</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/stored')}>
        <Icon src="src/assets/images/StoredWork.svg" alt="Stored Task Icon" />
        <TaskContainer>
          <TaskText>보관한 과제</TaskText>
          <TaskCount>3</TaskCount>
        </TaskContainer>
      </SummaryButton>
    </SummaryContainer>
  );
}

export default TaskSummary;
