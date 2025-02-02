import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const UploadContainer = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  font-size: 23px;
  margin-bottom: 10px;
`;

const FileInput = styled.input`
  margin: 10px 0;
`;

interface ProfileUploadProps {
  profilePhoto: string;
  onPhotoChange: (photo: string) => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({
  profilePhoto,
  onPhotoChange,
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 예시: 파일을 Base64로 변환하여 상태 업데이트 (실제 프로젝트에서는 업로드 API를 사용할 수 있음)
      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UploadContainer>
      <Label>프로필 사진 업로드</Label>
      <FileInput type="file" accept="image/*" onChange={handleFileChange} />
      {profilePhoto && (
        <img
          src={profilePhoto}
          alt="프로필"
          style={{ width: '150px', marginTop: '10px' }}
        />
      )}
    </UploadContainer>
  );
};

export default ProfileUpload;
