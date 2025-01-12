import '../assets/css/App.css';
import Router from '../routes/Routes';
import Sidebar from './Sidebar';
import OngoingTasks from './OngoingTasks';

function App() {
  return (
    <>
      <Sidebar />
      <Router />
      <OngoingTasks />
    </>
  );
}

export default App;
