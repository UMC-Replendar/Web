import HistoryList from '../components/infoComopnents/HistoryList';
import ProfileSection from '../components/infoComopnents/ProfileSection';
import TaskSummary from '../components/infoComopnents/TaskSummary';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
`;

const Info = () => {
  return (
    <>
      <Container>
        <ProfileSection />
        <TaskSummary />
        <HistoryList />
      </Container>
    </>
  );
};

export default Info;
