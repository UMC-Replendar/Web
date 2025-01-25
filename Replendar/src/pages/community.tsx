import MenuSection from '../components/CommuComponents/menuSection';
import styled from 'styled-components';
import CommuModal from '../modal/commuModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 50px;
`;
const Community = () => {
  return (
    <>
      <CommuModal />
      <Container>
        <MenuSection
          title="친구"
          menuItems={['친구등록', '친구목록', '친구소식', '친구관리']}
        />
        <MenuSection
          title="학과"
          menuItems={['학과소식', '과제목록', '강좌목록']}
        />
      </Container>
    </>
  );
};

export default Community;
