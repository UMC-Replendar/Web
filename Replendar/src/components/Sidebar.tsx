import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Characters from '../assets/images/SideBarIcons/Characters.svg';
import HomeImg from '../assets/images/SideBarIcons/Home.svg';
import CommunityIcon from '../assets/images/SideBarIcons/Community.svg';
import InfoIcon from '../assets/images/SideBarIcons/Profile.svg';
import SettingsIcon from '../assets/images/SideBarIcons/Settings.svg';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {
  isActive: boolean;
}

function Sidebar() {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0); // 스크롤 위치 상태

  const handleScroll = () => {
    setScrollY(window.scrollY * 0.67); // 현재 스크롤 Y 위치 업데이트
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 리스너 등록
    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  // 각 경로에 따른 스타일 적용
  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarContainer scrollY={scrollY}>
      <MenuContainer>
        <Link to="/">
          <Menu isActive={isActive('/')}>
            <IconImg src={HomeImg} />
            <MenuItem>홈</MenuItem>
          </Menu>
        </Link>
        <Link to="/community">
          <Menu isActive={isActive('/community')}>
            <IconImg src={CommunityIcon} />
            <MenuItem>커뮤니티</MenuItem>
          </Menu>
        </Link>
        <Link to="/info">
          <Menu isActive={isActive('/info')}>
            <IconImg src={InfoIcon} />
            <MenuItem>내정보</MenuItem>
          </Menu>
        </Link>
        <Link to="/settings">
          <Menu isActive={isActive('/settings')}>
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

const Width = {
  188: '188px',
};

const SidebarContainer = styled.div<{ scrollY: number }>`
  position: sticky;
  width: 188px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0px 180px 40px 0px;
  background: #2bae66;
  box-shadow: 6px 1px 19.9px 0px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 250px;
  transform: translate(
    calc(${Width[188]} * -0.8),
    calc(${(props) => props.scrollY}px * 2.2)
  );

  transition: transform 0.4s ease-out;
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
