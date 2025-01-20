import HistoryList from '../components/infoComopnents/HistoryList';
import ProfileSection from '../components/infoComopnents/ProfileSection';
import TaskSummary from '../components/infoComopnents/TaskSummary';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  //사이드바 실험하느라 height 주석 처리 해놨어요. 근데 height 없어야지 사이드바가 잘 되네요
  /* height: 100%; */
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
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
      </Container>
    </>
  );
};

export default Info;
