import styled from 'styled-components';
import { useState, useEffect } from 'react';

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

const Message = styled.p`
  font-size: 18px;
  color: gray;
`;

function ProfileSection() {
  const [image, setImage] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>('닉네임 없음');
  const [statusMessage, setStatusMessage] =
    useState<string>('상태 메시지 없음');
  const [school, setSchool] = useState<string>('학교 정보 없음');
  const [department, setDepartment] = useState<string>('학과 정보 없음');
  const [grade, setGrade] = useState<string>('학년 정보 없음');

  // 🔹 localStorage에서 signupData를 파싱하여 상태 업데이트
  useEffect(() => {
    const storedData = localStorage.getItem('signupData');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setImage(data.profilePhoto || null);
        setNickname(data.nickname || '닉네임 없음');
        setStatusMessage(data.statusMessage || '상태 메시지 없음');
        setSchool(data.selectedSchool || '학교 정보 없음');
        setDepartment(data.selectedDepartment || '학과 정보 없음');
        setGrade(data.grade || '학년 정보 없음');
      } catch (error) {
        console.error('로컬스토리지 데이터 파싱 오류:', error);
      }
    }
  }, []);

  // 🔹 프로필 사진 업로드 시 localStorage에 저장(추가 수정 가능)
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImage(imageData);
        // 기존 signupData에 profilePhoto만 업데이트하는 예시
        const storedData = localStorage.getItem('signupData');
        if (storedData) {
          const data = JSON.parse(storedData);
          data.profilePhoto = imageData;
          localStorage.setItem('signupData', JSON.stringify(data));
        } else {
          localStorage.setItem('profileImage', imageData);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      {/* 🔹 프로필 사진 */}
      <ProfilePicture htmlFor="file-upload">
        {image ? (
          <UploadIcon src={image} alt="프로필 사진" />
        ) : (
          <UploadText>프로필 사진 업로드</UploadText>
        )}
      </ProfilePicture>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />

      {/* 🔹 사용자 정보 */}
      <InfoBox>
        <Nickname>{nickname}</Nickname>
        <Message>{statusMessage}</Message>
        <InfoText>학교: {school}</InfoText>
        <InfoText>학과: {department}</InfoText>
        <InfoText>학년: {grade}</InfoText>
      </InfoBox>
    </ProfileContainer>
  );
}

export default ProfileSection;
