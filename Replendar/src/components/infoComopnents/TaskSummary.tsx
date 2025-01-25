import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

const SummaryButton = styled.button`
  display: flex;
  align-items: center;
  padding: 31.5px 26px; /* padding-top과 bottom 값 조정 */
  width: 300px;
  height: 180px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fcf6f5;
  box-shadow: 0px 4px 6px -3px #cdcdcd;
  overflow: hidden;
  justify-content: center;
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
  flex: 1;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
  line-height: 39.2px;
  font-family: Pretendard, sans-serif;
  word-wrap: break-word;
`;

const TaskCount = styled.div`
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
  line-height: 39.2px;
  font-family: Pretendard, sans-serif;
  word-wrap: break-word;
`;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  padding: 2.33px 4.28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 21.45px;
  height: 25.35px;
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
          <TaskText>완료 못한 과제</TaskText>
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
