import ReactDOM from 'react-dom';
interface ModalPortalProps {
  children: React.ReactNode;
}
const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const el = document.getElementById('modal');
  if (!el) {
    console.error('modal 요소가 존재하지 않습니다.');
    return null;
  }
  return ReactDOM.createPortal(children, el);
};
export default ModalPortal;
