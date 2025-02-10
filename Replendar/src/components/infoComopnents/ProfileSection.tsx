import { useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../apis/axios-instance';

const ProfileContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
`;

const ProfilePicture = styled.label`
  width: 320px;
  height: 320px;
  background: #fcf6f5;
  box-shadow: 0px 4px 6px -3px #cdcdcd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadText = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #7e7f7f;
  text-align: center;
  user-select: none;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nickname = styled.h2`
  font-size: 28px;
`;

const InfoText = styled.p`
  font-size: 28px;
  color: #666666;
  margin-top: 10px; //안넣으면 margin-top : 28px 드가는데 왜그러지
`;

const Message = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 500;
  gap: 10px;
`;
const ModifyMessage = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

interface ProfileProps {
  profileData: any;
}

const ProfileSection: React.FC<ProfileProps> = ({ profileData }) => {
  const [statusMessage, setStatusMessage] = useState(
    profileData.statusMessage || '상태 메시지 없음'
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateMessage = async () => {
    try {
      await axiosInstance.patch('/api/user/status', { statusMessage });
      setIsEditing(false);
    } catch (error) {
      console.error('상태 메시지 업데이트 실패:', error);
    }
  };

  return (
    <ProfileContainer>
      <ProfilePicture>
        {profileData.profileImageUrl ? (
          <UploadIcon src={profileData.profileImageUrl} alt="프로필 사진" />
        ) : (
          <UploadText>프로필 사진 없음</UploadText>
        )}
      </ProfilePicture>

      <InfoBox>
        <Nickname>{profileData.nickname || '닉네임 없음'}</Nickname>
        <Message>
          {isEditing ? (
            <input
              type="text"
              value={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              onBlur={handleUpdateMessage}
              onKeyDown={(e) => e.key === 'Enter' && handleUpdateMessage()}
              autoFocus
            />
          ) : (
            <>
              {statusMessage}
              <ModifyMessage
                src="./src/assets/images/Pencil.svg"
                alt="수정"
                onClick={() => setIsEditing(true)}
              />
            </>
          )}
        </Message>

        <InfoText>친구: {profileData.friendCount}</InfoText>
        <InfoText>진행 중인 과제: {profileData.ongoingTasks}</InfoText>
      </InfoBox>
    </ProfileContainer>
  );
};
export default ProfileSection;
