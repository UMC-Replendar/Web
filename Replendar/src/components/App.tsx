import styled from 'styled-components';
import '../assets/css/App.css';
import Router from '../routes/Routes';
import Sidebar from './Sidebar';
import NavBar from './Navbar';
import { useLocation } from 'react-router-dom';
import Modal from '../modal/Modal';

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <PageWrapper>
      <Modal />
      {!hideLayout && <Sidebar />}
      <MainWrapper>
        {!hideLayout && <NavBar />}
        <Router />
      </MainWrapper>
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
