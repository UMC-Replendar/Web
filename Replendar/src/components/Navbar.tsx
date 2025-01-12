import styled from 'styled-components';
import AppIcon from '../assets/images/AppIcon.png';
import DateImg from '../assets/images/DateImg.png';
// import ProfileImg from '../assets/images/ProfileImg.png';
import ProfileImage from '../assets/images/ProfileImg.png';
function NavBar() {
  return (
    <NavWrapper>
      <IconWrapper>
        <IconImg src={AppIcon} />
        <AppName>Replendar</AppName>
      </IconWrapper>
      <ProfileWrapper>
        <UserContainer>
          <ProfileImg src={DateImg} />
          <ProfileStatus>Today</ProfileStatus>
        </UserContainer>
        <UserContainer>
          <ProfileImg src={ProfileImage} />
          <ProfileStatus>닉네임</ProfileStatus>
        </UserContainer>
      </ProfileWrapper>
    </NavWrapper>
  );
}

export default NavBar;

const NavWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 120px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const IconImg = styled.img`
  width: 40px;
  height: 42.798px;
`;

const AppName = styled.span`
  color: #000;
  font-family: Jua;
  font-size: 15px;
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
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
`;

const ProfileStatus = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
