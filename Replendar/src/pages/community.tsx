import MenuSection from '../components/CommuComponents/menuSection';
import styled from 'styled-components';

//사이드바 테스트 하는데 height 없어야지 잘 돌아가서 일단 주석 처리 해놨어요!.
// 아마 다른 거 지장 없을 거 같긴 한데 문제 생기면 말씀해주세요!
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  /* height: 100%; */
  padding: 0 50px;
`;
const Community = () => {
  return (
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
  );
};

export default Community;
