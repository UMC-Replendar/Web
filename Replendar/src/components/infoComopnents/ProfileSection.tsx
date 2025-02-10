import { useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../apis/axios-instance';
import ProfileUpload from '../signupComponents/ProfileUpload';

const ProfileContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
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
  margin-top: 10px;
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
`;
const EnterIcon = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;

  input {
    border: none;
    outline: none;
    font-size: 17px;
    flex: 1;
  }
`;

interface ProfileProps {
  profileData: any;
}

const ProfileSection: React.FC<ProfileProps> = ({ profileData }) => {
  const [statusMessage, setStatusMessage] = useState(
    profileData.statusMessage || '상태 메시지 없음'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(profileData.profileImageUrl);

  const handleUpdateMessage = async () => {
    try {
      await axiosInstance.patch(
        `/api/user/status?statusMessage=${statusMessage}`
      );
      setIsEditing(false);
    } catch (error) {
      console.error('상태 메시지 업데이트 실패:', error);
    }
  };

  return (
    <ProfileContainer>
      {/* ProfileUpload 컴포넌트 사용*/}
      <ProfileUpload
        profilePhoto={profileImage}
        onPhotoChange={setProfileImage}
        size={300}
        title="프로필 사진 변경"
      />

      <InfoBox>
        <Nickname>{profileData.nickname || '닉네임 없음'}</Nickname>
        <Message>
          {isEditing ? (
            <InputBox>
              <input
                type="text"
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                onBlur={handleUpdateMessage}
                onKeyDown={(e) => e.key === 'Enter' && handleUpdateMessage()}
                autoFocus
              />
              <EnterIcon
                src="./src/assets/images/check.svg"
                alt="입력 완료"
                onClick={handleUpdateMessage}
              />
            </InputBox>
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
