import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../apis/axios-instance';
import useAuthStore from '../../store/authStore';

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

const UploadWrapper = styled.label`
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
interface ProfileUploadProps {
  profilePhoto: File | string | null;
  onPhotoChange: (photo: File | null) => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({
  profilePhoto,
  onPhotoChange,
}) => {
  const { id } = useAuthStore();
  const isUploading = useRef(false); // 중복 요청 방지용 ref 추가

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];

    // 미리보기 이미지 생성

    onPhotoChange(file);

    await handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    if (!id) {
      alert('유저 ID를 가져오지 못했습니다.');
      return;
    }
    if (isUploading.current) return;

    isUploading.current = true;
    const formData = new FormData();
    formData.append('files', file);

    try {
      const response = await axiosInstance.post(
        `/api/s3/upload/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('파일 업로드 성공', response.data);

      if (response.data?.url) {
        onPhotoChange(response.data.url);
      }
    } catch (error) {
      console.error('업로드 실패', error);
    } finally {
      isUploading.current = false;
    }
  };

  return (
    <UploadContainer>
      <Title>프로필 사진 설정</Title>
      <UploadWrapper htmlFor="file-upload">
        {profilePhoto ? (
          <UploadIcon
            src={
              typeof profilePhoto === 'string'
                ? profilePhoto
                : URL.createObjectURL(profilePhoto)
            }
            alt="프로필 사진 미리보기"
          />
        ) : (
          <>
            <img
              src="./src/assets/images/Camera.svg"
              alt="사진 업로드 아이콘"
            />
            <UploadText>사진 업로드하기</UploadText>
          </>
        )}
      </UploadWrapper>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange} // ✅ 파일 선택 시 자동 업로드
      />
    </UploadContainer>
  );
};

export default ProfileUpload;
