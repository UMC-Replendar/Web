import React from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

const UploadWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin-top: 10px;
  background: #e8e8e8;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadText = styled.div`
  font-size: 17px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  color: #7e7f7f;
  text-align: center;
  user-select: none;
`;

// ProfileUpload 컴포넌트가 받을 prop의 타입 정의
interface ProfileUploadProps {
  profilePhoto: string;
  onPhotoChange: (photo: string) => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({
  profilePhoto,
  onPhotoChange,
}) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 파일을 Base64 문자열로 변환하여 onPhotoChange를 호출
      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UploadContainer>
      <Title>프로필 사진 설정</Title>
      <label htmlFor="file-upload">
        <UploadWrapper>
          {profilePhoto ? (
            <UploadIcon src={profilePhoto} alt="프로필 사진 미리보기" />
          ) : (
            <>
              <img
                src="src/assets/images/Camera.svg"
                alt="사진 업로드 아이콘"
              />
              <UploadText>사진 업로드하기</UploadText>
            </>
          )}
        </UploadWrapper>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </UploadContainer>
  );
};

export default ProfileUpload;
