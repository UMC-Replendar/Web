import styled from 'styled-components';
import Friend1 from './commuContent/friend1';
interface MenuContentProps {
  menuState: string;
}
const MenuContent: React.FC<MenuContentProps> = ({ menuState }) => {
  let content;

  switch (menuState) {
    case '친구등록':
      content = <Friend1 />;
      break;
    case '친구목록':
      content = <div>친구목록</div>;
      break;
    case '친구소식':
      content = <div>친구소식</div>;
      break;
    case '친구관리':
      content = <div>친구관리</div>;
      break;
    case '학과소식':
      content = <div>학과소식</div>;
      break;
    case '과제목록':
      content = <div>과제목록</div>;
      break;
    case '강좌목록':
      content = <div>강좌목록</div>;
      break;
    default:
      content = <div>디폴트는 없어</div>;
  }

  return <>{content}</>;
};
export default MenuContent;
