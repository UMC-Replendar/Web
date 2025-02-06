import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis/axios-instance';
import ProfileUpload from './ProfileUpload';
import SchoolInfoForm from './SchoolInfoForm';
import StatusMessage from './StatusMessage';

// 닉네임 유효성 검사 정규식 (한글, 영어만 허용)
const nicknameRegex = /^[a-zA-Z\uAC00-\uD7A3]+$/;

// 스타일 정의
const FormContainer = styled.div`
  background: #fff;
  padding: 40px;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 40px;
  display: block;
  font-size: 23px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
`;

const ConformButton = styled.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const SubmitButton = styled.button`
  background: white;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  margin-right: 55px;
  align-self: flex-end;
`;

interface ErrorMessageProps {
  isValid?: boolean;
}

const ErrorMessage = styled.p<ErrorMessageProps>`
  color: ${(props) => (props.isValid ? 'green' : 'red')};
  font-size: 14px;
  margin-top: 5px;
  min-height: 20px;
`;

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  // 닉네임 상태
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 기타 회원가입 정보 상태
  const [profilePhoto, setProfilePhoto] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [grade, setGrade] = useState<string>('1학년');

  // 닉네임 입력 변경 시 처리
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameValid(false); // 변경 시 중복 확인 초기화
    setErrorMessage('');
  };

  // 닉네임 중복 확인 API 연동
  const validateNickname = async (
    nickname: string
  ): Promise<{ isSuccess: boolean; result: string }> => {
    try {
      const response = await axiosInstance.get(`/api/user/check-nickname`, {
        params: { nickname }, // GET 요청에서 query parameter로 전달
      });

      console.log('API 응답:', response.data);

      return response.data;
    } catch (error: any) {
      console.error('닉네임 중복 확인 중 오류 발생:', error);

      return {
        isSuccess: false,
        result:
          error.response?.data?.message ||
          '닉네임 확인 중 오류가 발생했습니다.',
      };
    }
  };

  // 닉네임 중복 확인
  const checkNicknameAvailability = async () => {
    if (!nicknameRegex.test(nickname)) {
      setErrorMessage('영어와 한글만 사용 가능합니다.');
      return;
    }

    setIsChecking(true);
    try {
      const result = await validateNickname(nickname);

      setIsNicknameValid(result.isSuccess);
      setErrorMessage(result.result);
    } finally {
      setIsChecking(false);
    }
  };

  const handleSubmit = async () => {
    if (!isNicknameValid) {
      alert('닉네임 중복 확인을 완료해주세요.');
      return;
    }

    if (!selectedSchool || !selectedDepartment) {
      alert('학교와 학과를 선택해주세요.');
      return;
    }

    const academicYear = parseInt(grade.replace('학년', ''), 10);

    try {
      const formData = new FormData();

      // ✅ JSON 데이터를 Blob 객체로 변환하여 'userInfo'로 추가
      const userInfo = {
        nickname,
        statusMessage: statusMessage || '',
        schoolId: selectedSchool.id, // ✅ ID 값을 정확하게 사용
        majorId: selectedDepartment.id, // ✅ ID 값을 정확하게 사용
        academicYear,
      };

      formData.append(
        'userInfo',
        new Blob([JSON.stringify(userInfo)], { type: 'application/json' }) // JSON을 Blob으로 변환
      );

      // ✅ 프로필 이미지가 있으면 추가
      if (profilePhoto) {
        formData.append('profileImage', profilePhoto);
      }

      console.log('📝 FormData 확인:');
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      // ✅ axios 요청 (Content-Type 자동 설정됨)
      const response = await axiosInstance.post('/api/user/signup', formData);

      console.log('✅ 회원가입 성공:', response.data);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error: any) {
      console.error('❌ 회원가입 실패:', error);
      alert(
        `회원가입 중 오류가 발생했습니다: ${
          error.response?.data?.message || '서버 오류'
        }`
      );
    }
  };

  return (
    <FormContainer>
      <h1>회원가입</h1>
      <Label>닉네임 설정 *</Label>
      <BoxWrapper>
        <Input
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <ConformButton
          onClick={checkNicknameAvailability}
          disabled={isChecking}
        >
          {isChecking ? '확인 중...' : '중복확인'}
        </ConformButton>
      </BoxWrapper>
      <ErrorMessage isValid={isNicknameValid}>
        {errorMessage || ' '}
      </ErrorMessage>

      {/* 프로필, 상태 메시지, 학교 정보 컴포넌트 */}
      <ProfileUpload
        profilePhoto={profilePhoto}
        onPhotoChange={setProfilePhoto}
      />
      <StatusMessage
        message={statusMessage}
        onMessageChange={setStatusMessage}
      />
      <SchoolInfoForm
        selectedSchool={selectedSchool}
        selectedDepartment={selectedDepartment}
        grade={grade}
        onSchoolChange={(school) => {
          setSelectedSchool(school); // ✅ 객체 형태 { id, name }로 저장
          setSelectedDepartment(null); // ✅ 학교 선택 시 학과 초기화
        }}
        onDepartmentChange={setSelectedDepartment}
        onGradeChange={setGrade}
      />

      <SubmitButton onClick={handleSubmit}>회원가입 완료</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
