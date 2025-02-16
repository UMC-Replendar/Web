import MenuSection from '../components/CommuComponents/menuSection';
import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 68px 0px 68px 0px;
//   width: 100%;
//   gap: 59px;
//   padding: 0 50px;
// `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 68px 0px 136px 0px;
  width: 100%;
  gap: 59px;
  padding: 0 100px;
`;
const Community = () => {
  return (
    <>
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
