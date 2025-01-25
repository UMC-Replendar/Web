import styled from 'styled-components';
import { useState } from 'react';

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
  font-size: 24px;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 18px;
`;

const Message = styled.p``;

function ProfileSection() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      <ProfilePicture htmlFor="file-upload">
        {image ? (
          <UploadIcon src={image} alt="프로필 사진 미리보기" />
        ) : (
          <UploadText>프로필 사진 업로드 가능 해봐여</UploadText>
        )}
      </ProfilePicture>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
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
