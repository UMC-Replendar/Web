import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const ProfilePicture = styled.div`
  background-color: lightgrey;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Nickname = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const InfoText = styled.p`
  font-size: 18px;
  margin: 0;
`;

function ProfileSection() {
  return (
    <ProfileContainer>
      <ProfilePicture />
      <InfoBox>
        <Nickname>닉네임</Nickname>
        <InfoText>친구</InfoText>
        <InfoText>진행중인 과제</InfoText>
      </InfoBox>
    </ProfileContainer>
  );
}

export default ProfileSection;
