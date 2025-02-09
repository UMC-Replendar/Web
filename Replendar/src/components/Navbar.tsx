import styled, { keyframes } from 'styled-components';
import AppIcon from '../assets/images/AppIcon.png';
import ProfileImage from '../assets/images/ProfileImg.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useProfileStore } from '../store/profileStore';
import DefaultProfileImg from '../assets/images/SideBarIcons/DefaultProfileImg.svg';

function NavBar() {
  const [currentTime, setCurrentTime] = useState(
    dayjs().format('YYYY년 MM월 DD일 HH:mm:ss')
  );
  const { profile } = useProfileStore(); // 기본 닉네임 설정

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('YYYY년 MM월 DD일 HH:mm:ss'));
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
          <ProfileStatus>
            <TimeDisplay>{currentTime}</TimeDisplay>
          </ProfileStatus>
        </UserContainer>
        <UserContainer>
          <Link to={'/info'}>
            {/* ✅ 프로필 이미지가 존재하면 표시, 없으면 기본 이미지 */}
            <ProfileImg
              src={profile?.profileImageUrl || DefaultProfileImg}
              alt="Profile"
            />
          </Link>
          <Link to={'/info'}>
            <ProfileStatus>{profile?.nickname || '리플레닝'}</ProfileStatus>
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
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 0px;
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

const ProfileImg = styled.div<{ src: string }>`
  width: 34px;
  height: 34px;
  border-radius: 300px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
`;

const ProfileStatus = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
