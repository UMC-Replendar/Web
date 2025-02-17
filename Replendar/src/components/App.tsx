import styled from 'styled-components';
import '../assets/css/App.css';
import Router from '../routes/Routes';
import Sidebar from './Sidebar';
import NavBar from './Navbar';
import { useLocation } from 'react-router-dom';
import Modal from '../modal/Modal';
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
  }, []);
  const location = useLocation();
  const hideLayout =
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/callback' ||
    location.pathname === '/fakelogin' ||
    location.pathname === '/forguest' ||
    location.pathname === '/guestlist';
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
