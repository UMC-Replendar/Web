// import { lazy, Suspense } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// // const Info = lazy(() => import('../pages/Info'));
// // const Community = lazy(() => import('../pages/community'));
// // const Login = lazy(() => import('../pages/login'));
// // const OngoingTasks = lazy(() => import('../pages/OngoingTasks'));
// // const Settings = lazy(() => import('../pages/Settings'));
// // const CompletedTasksPage = lazy(
// //   () => import('../components/infoComopnents/taskPage/CompletedTasksPage')
// // );
// // const StoredTasksPage = lazy(
// //   () => import('../components/infoComopnents/taskPage/StoredTasksPage')
// // );
// // const HistoryPage = lazy(
// //   () => import('../components/infoComopnents/HistoryPage')
// // );
// // const SignUp = lazy(() => import('../pages/SignUp'));
// // const DetailPage = lazy(
// //   () => import('../components/SettingsComponents/DetailPage')
// // );
// // const AskPage = lazy(() => import('../components/SettingsComponents/AskPage'));
// // const ThemeSettingPage = lazy(
// //   () => import('../components/SettingsComponents/ThemeSettingPage')
// // );
// // const NotifyPage = lazy(
// //   () => import('../components/SettingsComponents/NotifyPage')
// // );
// // const Redirect = lazy(() => import('../components/LoginComponents/Redirect'));
// // const NotCompletedTaskPage = lazy(
// //   () => import('../components/infoComopnents/taskPage/NotCompletedTaskPage')
// // );
// // const ImportantTaskPage = lazy(
// //   () => import('../components/infoComopnents/taskPage/ImportantTaskPage')
// // );
// // const Fakelogin = lazy(
// //   () => import('../components/infoComopnents/taskPage/Fakelogin')
// // );

// import Info from '../pages/Info';
// import Community from '../pages/community';
// import Login from '../pages/login';
// import OngoingTasks from '../pages/OngoingTasks';
// import Settings from '../pages/Settings';
// import CompletedTasksPage from '../components/infoComopnents/taskPage/CompletedTasksPage';
// import StoredTasksPage from '../components/infoComopnents/taskPage/StoredTasksPage';
// import HistoryPage from '../components/infoComopnents/HistoryPage';
// import SignUp from '../pages/SignUp';
// import DetailPage from '../components/SettingsComponents/DetailPage';
// import AskPage from '../components/SettingsComponents/AskPage';
// import ThemeSettingPage from '../components/SettingsComponents/ThemeSettingPage';
// import NotifyPage from '../components/SettingsComponents/NotifyPage';

// import Redirect from '../components/LoginComponents/Redirect';

// import NotCompletedTaskPage from '../components/infoComopnents/taskPage/NotCompletedTaskPage';
// import ImportantTaskPage from '../components/infoComopnents/taskPage/ImportantTaskPage';
// import Fakelogin from '../components/infoComopnents/taskPage/Fakelogin';
// import useAuthStore from '../store/authStore';

// function Router() {
//   const { token } = useAuthStore();
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={token ? <OngoingTasks /> : <Navigate to="/login" replace />}
//       />
//       <Route
//         path="/info"
//         element={token ? <Info /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route
//         path="/community"
//         element={token ? <Community /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route path="/login" element={<Login />}></Route>
//       <Route
//         path="/settings"
//         element={token ? <Settings /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route
//         path="/settings/theme"
//         element={
//           token ? <ThemeSettingPage /> : <Navigate to="/login" replace />
//         }
//       ></Route>
//       <Route
//         path="/settings/ask"
//         element={token ? <AskPage /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route
//         path="/settings/notify"
//         element={token ? <NotifyPage /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route
//         path="/settings/detail"
//         element={token ? <DetailPage /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route
//         path="/info/completed"
//         element={
//           token ? <CompletedTasksPage /> : <Navigate to="/login" replace />
//         }
//       />
//       <Route
//         path="/info/stored"
//         element={token ? <StoredTasksPage /> : <Navigate to="/login" replace />}
//       />
//       <Route
//         path="/info/history"
//         element={token ? <HistoryPage /> : <Navigate to="/login" replace />}
//       ></Route>
//       <Route path="/signup" element={<SignUp />}></Route>

//       <Route path="/callback" element={<Redirect />}></Route>

//       <Route
//         path="/info/notcompleted"
//         element={<NotCompletedTaskPage />}
//       ></Route>
//       <Route path="/info/important" element={<ImportantTaskPage />}></Route>
//       <Route path="/Fakelogin" element={<Fakelogin />}></Route>
//     </Routes>
//   );
// }

// export default Router;

import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

// 📌 Lazy Loading 적용
const Info = lazy(() => import('../pages/Info'));
const Community = lazy(() => import('../pages/community'));
const Login = lazy(() => import('../pages/login'));
const OngoingTasks = lazy(() => import('../pages/OngoingTasks'));
const Settings = lazy(() => import('../pages/Settings'));
const CompletedTasksPage = lazy(
  () => import('../components/infoComopnents/taskPage/CompletedTasksPage')
);
const StoredTasksPage = lazy(
  () => import('../components/infoComopnents/taskPage/StoredTasksPage')
);
const HistoryPage = lazy(
  () => import('../components/infoComopnents/history/HistoryPage')
);
const SignUp = lazy(() => import('../pages/SignUp'));
const DetailPage = lazy(
  () => import('../components/SettingsComponents/DetailPage')
);
const AskPage = lazy(() => import('../components/SettingsComponents/AskPage'));
const ThemeSettingPage = lazy(
  () => import('../components/SettingsComponents/ThemeSettingPage')
);
const NotifyPage = lazy(
  () => import('../components/SettingsComponents/NotifyPage')
);
const Redirect = lazy(() => import('../components/LoginComponents/Redirect'));
const NotCompletedTaskPage = lazy(
  () => import('../components/infoComopnents/taskPage/NotCompletedTaskPage')
);
const ImportantTaskPage = lazy(
  () => import('../components/infoComopnents/taskPage/ImportantTaskPage')
);
const Fakelogin = lazy(
  () => import('../components/infoComopnents/taskPage/Fakelogin')
);

function Router() {
  const { token } = useAuthStore();

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        <Route
          path="/"
          element={token ? <OngoingTasks /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/info"
          element={token ? <Info /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/community"
          element={token ? <Community /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/settings"
          element={token ? <Settings /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/settings/theme"
          element={
            token ? <ThemeSettingPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/settings/ask"
          element={token ? <AskPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/settings/notify"
          element={token ? <NotifyPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/settings/detail"
          element={token ? <DetailPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/info/completed"
          element={
            token ? <CompletedTasksPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/info/stored"
          element={
            token ? <StoredTasksPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/info/history"
          element={token ? <HistoryPage /> : <Navigate to="/login" replace />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/callback" element={<Redirect />} />
        <Route path="/info/notcompleted" element={<NotCompletedTaskPage />} />
        <Route path="/info/important" element={<ImportantTaskPage />} />
        <Route path="/Fakelogin" element={<Fakelogin />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
