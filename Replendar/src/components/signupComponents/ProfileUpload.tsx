import React, { useRef } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../apis/axios-instance';
import useAuthStore from '../../store/authStore';
import { useProfileStore } from '../../store/profileStore';
import CameraIcon from '../../assets/images/Camera.svg';
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

const UploadWrapper = styled.label<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
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
  font-weight: 500;
  color: #7e7f7f;
  text-align: center;
`;

interface ProfileUploadProps {
  profilePhoto: File | string | null;
  onPhotoChange: (photo: File | string | null) => void;
  size?: number;
  title?: string;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({
  profilePhoto,
  onPhotoChange,
  size = 250, // 기본값 250px
  title = '프로필 사진 설정',
}) => {
  const { id } = useAuthStore();
  const isUploading = useRef(false);
  const { updateProfileImage } = useProfileStore();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];

    // 미리보기 적용
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
    formData.append('profileImage', file);

    try {
      const response = await axiosInstance.post(
        '/api/s3/update-profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.result) {
        const newImageUrl = `${response.data.result}?t=${new Date().getTime()}`; //캐싱 방지

        //상태 업데이트
        updateProfileImage(newImageUrl);

        //UI 즉시 반영
        onPhotoChange(newImageUrl);
      }
    } catch (error) {
      console.error('업로드 실패', error);
    } finally {
      isUploading.current = false;
    }
  };

  return (
    <UploadContainer>
      <Title>{title}</Title>
      <UploadWrapper htmlFor="file-upload" size={size}>
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
            <img src={CameraIcon} alt="사진 업로드 아이콘" />
            <UploadText>사진 업로드하기</UploadText>
          </>
        )}
      </UploadWrapper>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </UploadContainer>
  );
};

export default ProfileUpload;
