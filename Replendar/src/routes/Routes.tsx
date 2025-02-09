import { Route, Routes, Navigate } from 'react-router-dom';
import Info from '../pages/Info';
import Community from '../pages/community';
import Login from '../pages/login';
import OngoingTasks from '../pages/OngoingTasks';
import Settings from '../pages/Settings';
import CompletedTasksPage from '../components/infoComopnents/taskPage/CompletedTasksPage';
import StoredTasksPage from '../components/infoComopnents/taskPage/StoredTasksPage';
import HistoryPage from '../components/infoComopnents/HistoryPage';
import SignUp from '../pages/SignUp';
import DetailPage from '../components/SettingsComponents/DetailPage';
import AskPage from '../components/SettingsComponents/AskPage';
import ThemeSettingPage from '../components/SettingsComponents/ThemeSettingPage';
import NotifyPage from '../components/SettingsComponents/NotifyPage';

import Redirect from '../components/LoginComponents/Redirect';

import NotCompletedTaskPage from '../components/infoComopnents/taskPage/NotCompletedTaskPage';
import ImportantTaskPage from '../components/infoComopnents/taskPage/ImportantTaskPage';
import Fakelogin from '../components/infoComopnents/taskPage/Fakelogin';
import useAuthStore from '../store/authStore';

function Router() {
  const { token } = useAuthStore();
  return (
    <Routes>
      <Route
        path="/"
        element={token ? <OngoingTasks /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/info"
        element={token ? <Info /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/community"
        element={token ? <Community /> : <Navigate to="/login" replace />}
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      {/*토큰 없으면 무조건 login으로 가게 했는데, 에러 잡아야 할 수 있으니, 세팅 페이지는 그냥 열어놓을게요*/}
      <Route
        path="/settings"
        element={token ? <Settings /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/settings/theme"
        element={
          token ? <ThemeSettingPage /> : <Navigate to="/login" replace />
        }
      ></Route>
      <Route
        path="/settings/ask"
        element={token ? <AskPage /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/settings/notify"
        element={token ? <NotifyPage /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/settings/detail"
        element={token ? <DetailPage /> : <Navigate to="/login" replace />}
      ></Route>
      <Route
        path="/completed"
        element={
          token ? <CompletedTasksPage /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/stored"
        element={token ? <StoredTasksPage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/history"
        element={token ? <HistoryPage /> : <Navigate to="/login" replace />}
      ></Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/callback" element={<Redirect />}></Route>

      <Route path="/notcompleted" element={<NotCompletedTaskPage />}></Route>
      <Route path="/important" element={<ImportantTaskPage />}></Route>
      <Route path="/Fakelogin" element={<Fakelogin />}></Route>
    </Routes>
  );
}

export default Router;
