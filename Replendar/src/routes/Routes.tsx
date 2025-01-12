import { Route, Routes } from 'react-router-dom';
import Info from '../pages/Info';
import Community from '../pages/community';
import Login from '../pages/login';
import OngoingTasks from '../components/OngoingTasks';
import Settings from '../pages/Settings';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<OngoingTasks />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
}

export default Router;
