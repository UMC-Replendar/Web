import styled from 'styled-components';
import CharacterTestImg from '../assets/images/CharacterTestImg.png';
import HomeImg from '../assets/images/HomeIcon.png';
import CommunityIcon from '../assets/images/CommunityIcon.png';
import InfoIcon from '../assets/images/InfoIcon.png';
import SettingsIcon from '../assets/images/SettingsIcon.png';

import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  isActive: boolean;
}

function Sidebar() {
  const location = useLocation(); // 현재 경로 가져오기

  // 각 경로에 따른 스타일 적용
  const isActive = (path: string) => location.pathname === path;
  return (
    <>
      <SidebarContainer>
        <MenuContainer>
          <Menu isActive={isActive('/')}>
            <IconImg src={HomeImg} />
            <Link to="/">
              <MenuItem>홈</MenuItem>
            </Link>
          </Menu>
          <Menu isActive={isActive('/community')}>
            <IconImg src={CommunityIcon} />
            <Link to="/community">
              <MenuItem>커뮤니티</MenuItem>
            </Link>
          </Menu>
          <Menu isActive={isActive('/info')}>
            <IconImg src={InfoIcon} />
            <Link to="/info">
              <MenuItem>내정보</MenuItem>
            </Link>
          </Menu>
          <Menu isActive={isActive('/settings')}>
            <IconImg src={SettingsIcon} />
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
  height: 100vh;
  flex-shrink: 0;
  border-radius: 0px 180px 10px 0px;
  background: #2bae66;
  box-shadow: 6px 1px 19.9px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 250px;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 270px;
  gap: 20px;
`;

const Menu = styled.nav<MenuProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  padding-right: 55px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  align-self: stretch;
  text-decoration-line: none;
  border-radius: ${(props) => (props.isActive ? '0px 50px 50px 0px' : '0')};
  background: ${(props) => (props.isActive ? '#00893d' : 'transparent')};
`;

const IconImg = styled.img``;

const MenuItem = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CharacterImg = styled.img`
  /* position: fixed; */
  width: 188px;
  bottom: 0;
`;
