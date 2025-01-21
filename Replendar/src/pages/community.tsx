/*import styled from 'styled-components';
import MoreIcon from '../components/CommuComponents/MoreIcon';
import { useState } from 'react';
import CloseIcon from '../components/CommuComponents/CloseIcon';
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
} from '../components/CommuComponents/mocks';

const Community = () => {
  const [friendMenuState, setFriendMenuState] = useState({
    activeMenu: '친구등록',
    expanded: false,
  });

  const [departmentMenuState, setDepartmentMenuState] = useState({
    activeMenu: '학과소식',
    expanded: false,
  });

  const handleFriendMenuClick = (menu: string) => {
    setFriendMenuState({ activeMenu: menu, expanded: false });
  };
  const handleDepartmentMenuClick = (menu: string) => {
    setDepartmentMenuState({ activeMenu: menu, expanded: false });
  };

  const handleFriendExpandClick = () => {
    setFriendMenuState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded,
    }));
  };

  const handleDepartmentExpandClick = () => {
    setDepartmentMenuState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded,
    }));
  };

  interface MenuContentProps {
    expanded: boolean;
    data: string[];
  }

  const MenuContent: React.FC<MenuContentProps> = ({ expanded, data }) => {
    return expanded
      ? data.map((item, index) => <div key={index}>{item}</div>)
      : data.slice(0, 3).map((item, index) => <div key={index}>{item}</div>);
  };
  let friendDataToShow;
  switch (friendMenuState.activeMenu) {
    case '친구등록':
      friendDataToShow = data1;
      break;
    case '친구목록':
      friendDataToShow = data2;
      break;
    case '친구소식':
      friendDataToShow = data3;
      break;
    case '친구관리':
      friendDataToShow = data4;
      break;
    default:
      friendDataToShow = data1;
  }
  let departmentDataToShow;
  switch (departmentMenuState.activeMenu) {
    case '학과소식':
      departmentDataToShow = data5;
      break;
    case '과제목록':
      departmentDataToShow = data6;
      break;
    case '강좌목록':
      departmentDataToShow = data7;
      break;
    default:
      departmentDataToShow = data5;
  }
  return (
    <Container>
      <Gaph2>친구</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          {['친구등록', '친구목록', '친구소식', '친구관리'].map((menu) => (
            <CustomBtn key={menu} onClick={() => handleFriendMenuClick(menu)}>
              {menu}
            </CustomBtn>
          ))}
        </BtnContainer>

        {friendMenuState.expanded ? (
          <CloseIcon onClick={handleFriendExpandClick} />
        ) : (
          <MoreIcon onClick={handleFriendExpandClick} />
        )}
      </SpaceBtwDiv>
      <StyledDiv expanded={friendMenuState.expanded.toString()}>
        <InputContainer>
          <SearchIcon src="src/assets/images/search.svg" alt="Search Icon" />
          <SearchInput placeholder="등록할 친구의 이미지를 검색해주세요"></SearchInput>
          <SearchBtn>검색</SearchBtn>
        </InputContainer>

        <MenuContent
          expanded={friendMenuState.expanded}
          data={friendDataToShow}
        />
      </StyledDiv>
      <Gaph2>학과</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          {['학과소식', '과제목록', '강좌목록'].map((menu) => (
            <CustomBtn
              key={menu}
              onClick={() => handleDepartmentMenuClick(menu)}
            >
              {menu}
            </CustomBtn>
          ))}
        </BtnContainer>
        {departmentMenuState.expanded ? (
          <CloseIcon onClick={handleDepartmentExpandClick} />
        ) : (
          <MoreIcon onClick={handleDepartmentExpandClick} />
        )}
      </SpaceBtwDiv>
      <StyledDiv expanded={departmentMenuState.expanded.toString()}>
        <MenuContent
          expanded={departmentMenuState.expanded}
          data={departmentDataToShow}
        />
      </StyledDiv>
    </Container>
  );
};

export default Community;*/
import MenuSection from '../components/CommuComponents/menuSection';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
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
