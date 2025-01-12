import styled from 'styled-components';
import CharacterTestImg from '../assets/images/CharacterTestImg.png';
import HomeImg from '../assets/images/HomeIcon.png';
import CommunityIcon from '../assets/images/CommunityIcon.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <MenuContainer>
          <Menu>
            <IconImg src={HomeImg} />
            <Link to="/">
              <MenuItem>홈</MenuItem>
            </Link>
          </Menu>
          <Menu>
            <IconImg src={CommunityIcon} />
            <Link to="/community">
              <MenuItem>커뮤니티</MenuItem>
            </Link>
          </Menu>
          <Menu>
            <IconImg />
            <Link to="/info">
              <MenuItem>내정보</MenuItem>
            </Link>
          </Menu>
          <Menu>
            <IconImg />
            <Link to="/settings">
              <MenuItem>환경설정</MenuItem>
            </Link>
          </Menu>
        </MenuContainer>
        <CharacterImg src={CharacterTestImg}></CharacterImg>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  /* position: fixed; */
  width: 188px;
  height: 1080px;
  flex-shrink: 0;
  border-radius: 0px 180px 10px 0px;
  background: #2bae66;
  box-shadow: 6px 1px 19.9px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  padding-right: 55px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  gap: 13px;
  align-self: stretch;
  text-decoration-line: none;
  &:first-child {
    border-radius: 0px 50px 50px 0px;
    background: #00893d;
  }
`;

const IconImg = styled.img``;

const MenuItem = styled.div`
  color: black;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CharacterImg = styled.img`
  position: fixed;
  width: 188px;
  bottom: 0;
`;
