import { Route, Routes } from 'react-router-dom';
import Info from '../pages/Info';
import Community from '../pages/community';
import Login from '../pages/login';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/settings"></Route>
    </Routes>
  );
}

export default Router;
