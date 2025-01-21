import { Route, Routes } from 'react-router-dom';
import Info from '../pages/Info';
import Community from '../pages/community';
import Login from '../pages/login';
import OngoingTasks from '../pages/OngoingTasks';
import Settings from '../pages/Settings';
import CompletedTasksPage from '../components/infoComopnents/CompletedTasksPage';
import StoredTasksPage from '../components/infoComopnents/StoredTasksPage';
import HistoryPage from '../components/infoComopnents/HistoryPage';
import SignUp from '../pages/SignUp';
import DetailPage from '../components/SettingsComponents/DetailPage';
import IssuPage from '../components/SettingsComponents/IssuPage';
import ThemeSettingPage from '../components/SettingsComponents/ThemeSettingPage';
import NotifyPage from '../components/SettingsComponents/NotifyPage';
import Redirect from '../components/LoginComponents/Redirect';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<OngoingTasks />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/settings/theme" element={<ThemeSettingPage />}></Route>
      <Route path="/settings/ask" element={<IssuPage />}></Route>
      <Route path="/settings/notify" element={<NotifyPage />}></Route>
      <Route path="/settings/detail" element={<DetailPage />}></Route>
      <Route path="/completed" element={<CompletedTasksPage />} />
      <Route path="/stored" element={<StoredTasksPage />} />
      <Route path="/history" element={<HistoryPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/oauth/kakao/callback" element={<Redirect />}></Route>
    </Routes>
  );
}

export default Router;
