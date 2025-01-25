import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  line-height: 39.2px;
  font-family: Pretendard, sans-serif;
`;

const TaskCount = styled.div`
  align-self: stretch;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
  line-height: 39.2px;
  font-family: Pretendard, sans-serif;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 2.33px 4.28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

function TaskSummary() {
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      <SummaryButton onClick={() => navigate('/completed')}>
        <IconContainer>
          <Icon src="src/assets/images/Worked.svg" alt="Completed Task Icon" />
        </IconContainer>
        <TaskContainer>
          <TaskText>완료한 과제</TaskText>
          <TaskCount>22</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/stored')}>
        <IconContainer>
          <Icon
            src="src/assets/images/InfoIcons/Task.svg"
            alt="Stored Task Icon"
          />
        </IconContainer>
        <TaskContainer>
          <TaskText>보관한 과제</TaskText>
          <TaskCount>3</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/notcompleted')}>
        <IconContainer>
          <Icon
            src="src/assets/images/InfoIcons/Task.svg"
            alt="Incomplete Task Icon"
          />
        </IconContainer>
        <TaskContainer>
          <TaskText>미완료 과제</TaskText>
          <TaskCount>3</TaskCount>
        </TaskContainer>
      </SummaryButton>

      <SummaryButton onClick={() => navigate('/important')}>
        <IconContainer>
          <Icon
            src="src/assets/images/InfoIcons/Task.svg"
            alt="Important Task Icon"
          />
        </IconContainer>
        <TaskContainer>
          <TaskText>중요한 과제</TaskText>
          <TaskCount>3</TaskCount>
        </TaskContainer>
      </SummaryButton>
    </SummaryContainer>
  );
}

export default TaskSummary;
