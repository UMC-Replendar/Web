import FriendRegister from './commuContent/friendRegister';
import FriendNews from './commuContent/friendNews';
import FriendList from './commuContent/friendList';
import FriendManagement from './commuContent/friendManagement';
import TaskList from './commuContent/taskList';
import DepartmentList from './commuContent/departmentNews';
import LectureList from './commuContent/lectureList';

interface MenuContentProps {
  menuState: string;
  expanded: string;
}

const MenuContent: React.FC<MenuContentProps> = ({ menuState, expanded }) => {
  let content;
  switch (menuState) {
    case '친구등록':
      content = <FriendRegister />;
      break;
    case '친구목록':
      content = <FriendList expanded={expanded} />;
      break;
    case '친구소식':
      content = <FriendNews expanded={expanded} />;
      break;
    case '친구관리':
      content = <FriendManagement expanded={expanded} />;
      break;
    case '학과소식':
      content = <DepartmentList expanded={expanded} />;
      break;
    case '과제목록':
      content = <TaskList expanded={expanded} />;
      break;
    case '강좌목록':
      content = <LectureList expanded={expanded} />;
      break;
    default:
      content = <FriendRegister />;
  }

  return <>{content}</>;
};
export default MenuContent;
