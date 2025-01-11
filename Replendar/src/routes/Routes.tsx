import { Route, Routes } from 'react-router-dom';
import Info from '../pages/Info';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/info" element={<Info />}></Route>
    </Routes>
  );
}

export default Router;
