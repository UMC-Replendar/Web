import styled from 'styled-components';
import '../assets/css/App.css';
import Router from '../routes/Routes';
import Sidebar from './Sidebar';
import NavBar from './Navbar';
// import OngoingTasks from './OngoingTasks';

function App() {
  return (
    <PageWrapper>
      <Sidebar />
      <MainWrapper>
        <NavBar />
        <Router />
      </MainWrapper>
      {/* <OngoingTasks /> */}
    </PageWrapper>
  );
}

export default App;

const PageWrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  width: 100%;
`;
