import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
`;

const ProfilePicture = styled.div`
  padding: 140px 96px;
  background: #fcf6f5;
  box-shadow: 0px 4px 6px -3px #cdcdcd;
  border-radius: 50%;
`;

const ProfileText = styled.div`
  color: #666666;
  font-size: 28px;
  font-weight: 700;
  line-height: 39.2px;
  word-wrap: break-word;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nickname = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 18px;
`;
const Message = styled.p``;
function ProfileSection() {
  return (
    <ProfileContainer>
      <ProfilePicture>
        <ProfileText>프로필 사진</ProfileText>
      </ProfilePicture>
      <InfoBox>
        <Nickname>닉네임</Nickname>
        <Message>상태 메시지 자리</Message>
        <InfoText>친구</InfoText>
        <InfoText>진행중인 과제</InfoText>
      </InfoBox>
    </ProfileContainer>
  );
}

export default ProfileSection;
