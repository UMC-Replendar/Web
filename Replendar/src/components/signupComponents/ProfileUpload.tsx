import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
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

const ProfileUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // 미리보기용 Base64 저장
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UploadContainer>
      <Title>프로필 사진 설정</Title>
      <label htmlFor="file-upload">
        <UploadWrapper>
          {image ? (
            <UploadIcon src={image} alt="프로필 사진 미리보기" />
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
