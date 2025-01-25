import styled, { keyframes } from 'styled-components';
import AppIcon from '../assets/images/AppIcon.png';
import ProfileImage from '../assets/images/ProfileImg.png';
import { Link } from 'react-router-dom';
import KakaoLogo from '../assets/images/KakaoTalk_logo.png';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ChillChillGuy from '../assets/images/ChillGuy.png';
function NavBar() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format('YYYY:MM:DD HH:mm:ss')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('YYYY:MM:DD HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NavWrapper>
      <IconWrapper>
        <Link to={'/'}>
          <IconImg src={AppIcon} />
        </Link>
        <Link to={'/'}>
          <AppName>Replendar</AppName>
        </Link>
      </IconWrapper>
      <ProfileWrapper>
        <UserContainer>
          <Link to={'/login'}>
            <ProfileImg src={KakaoLogo} />
          </Link>
          <Link to={'/login'}>
            <ProfileStatus>임시 로그인</ProfileStatus>
          </Link>
        </UserContainer>
        <UserContainer>
          <Link to={'/signup'}>
            <ProfileImg src={ChillChillGuy} />
          </Link>
          <Link to={'/signup'}>
            <ProfileStatus>회원가입</ProfileStatus>
          </Link>
        </UserContainer>
        <UserContainer>
          <ProfileStatus>
            <TimeDisplay>{currentTime}</TimeDisplay>
          </ProfileStatus>
        </UserContainer>
        <UserContainer>
          <Link to={'/info'}>
            <ProfileImg src={ProfileImage} />
          </Link>
          <Link to={'/info'}>
            <ProfileStatus>닉네임</ProfileStatus>
          </Link>
        </UserContainer>
      </ProfileWrapper>
    </NavWrapper>
  );
}

export default NavBar;

const NavWrapper = styled.div`
  height: 46px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 120px;
  margin-left: 70px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition:
    filter 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.8);
    opacity: 0.8;
  }
`;

const IconImg = styled.img`
  width: 40px;
  height: 42.798px;
`;

const AppName = styled.span`
  color: #000;
  font-family: Jua;
  font-size: 20px;
  font-style: normal;
  font-weight: Bold;
  line-height: normal;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
`;

const UserContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 0px; /* 둥근 모서리 적용 */
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 7px 5px -5px #7ac19a;
  }
`;

const fadeAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1; }
`;

const TimeDisplay = styled.span`
  font-size: 20px;

  animation: ${fadeAnimation} 0.8s ease-in-out;
`;

const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
`;

const ProfileStatus = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
