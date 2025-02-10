import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Characters from '../assets/images/SideBarIcons/Characters.svg';
import HomeImg from '../assets/images/SideBarIcons/Home.svg';
import CommunityIcon from '../assets/images/SideBarIcons/Community.svg';
import InfoIcon from '../assets/images/SideBarIcons/Profile.svg';
import SettingsIcon from '../assets/images/SideBarIcons/Settings.svg';
import { Link, useLocation } from 'react-router-dom';
import { themeBackground, useThemeStore } from '../store/useThemeStore';

function Sidebar() {
  const location = useLocation();
  const { selectedTheme } = useThemeStore();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY * 0.67);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);
  return (
    <SidebarContainer
      scrollY={scrollY}
      backgroundColor={themeBackground[selectedTheme][0]}
    >
      <MenuContainer>
        <Link to="/">
          <Menu
            backgroundColor={themeBackground[selectedTheme][5]}
            isActive={isActive('/')}
          >
            <IconImg src={HomeImg} />
            <MenuItem>홈</MenuItem>
          </Menu>
        </Link>
        <Link to="/community">
          <Menu
            backgroundColor={themeBackground[selectedTheme][5]}
            isActive={isActive('/community')}
          >
            <IconImg src={CommunityIcon} />
            <MenuItem>커뮤니티</MenuItem>
          </Menu>
        </Link>
        <Link to="/info">
          <Menu
            backgroundColor={themeBackground[selectedTheme][5]}
            isActive={isActive('/info')}
          >
            <IconImg src={InfoIcon} />
            <MenuItem>내정보</MenuItem>
          </Menu>
        </Link>
        <Link to="/settings">
          <Menu
            backgroundColor={themeBackground[selectedTheme][5]}
            isActive={isActive('/settings')}
          >
            <IconImg src={SettingsIcon} />
            <MenuItem>환경설정</MenuItem>
          </Menu>
        </Link>
      </MenuContainer>
      <CharacterImg src={Characters} />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div<{
  scrollY: number;
  backgroundColor: string;
}>`
  position: sticky;
  width: 188px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0px 180px 40px 0px;
  background: ${(props) => props.backgroundColor};
  box-shadow: 6px 1px 19.9px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 250px;
  transition:
    background 0.3s ease-in-out,
    transform 0.4s ease-out;
  transform: translate(calc(-150px), calc(${(props) => props.scrollY}px * 2.2));

  &:hover {
    transform: translate(0, calc(${(props) => props.scrollY}px * 2.2));
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 270px;
  gap: 20px;
  height: 100%;
`;

const Menu = styled.div<{ isActive: boolean; backgroundColor: string }>`
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
  background: ${(props) =>
    props.isActive ? props.backgroundColor : 'transparent'};
`;

const IconImg = styled.img`
  width: 30px;
  height: 30px;
`;

const MenuItem = styled.div`
  color: white;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CharacterImg = styled.img`
  width: 188px;
  bottom: 0;
  border-bottom-right-radius: 40px;
  /* margin-top: 40px; */
`;
