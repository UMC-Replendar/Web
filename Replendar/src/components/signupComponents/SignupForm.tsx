import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useModalStore from '../../store/modalStore';
import ProfileUpload from './ProfileUpload';
import SchoolInfoForm from './SchoolInfoForm';
import StatusMessage from './StatusMessage';

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  min-height: 20px;
`;

/**
 * 닉네임 중복확인 로직을 별도의 함수로 추출
 * API 연동 부분은 주석 처리하고, 더미 로직으로 처리합니다.
 */
export const validateNickname = async (
  nickname: string
): Promise<{ available: boolean }> => {
  // 실제 API 연동 시 아래와 같이 사용합니다.
  // const response = await axios.post('/api/check-nickname', { nickname });
  // return response.data;

  // 더미 로직: 닉네임이 'taken'이면 사용 불가능, 그 외에는 사용 가능
  return new Promise((resolve) => {
    setTimeout(() => {
      if (nickname.toLowerCase() === 'taken') {
        resolve({ available: false });
      } else {
        resolve({ available: true });
      }
    }, 1000);
  });
};

const SignupForm: React.FC = () => {
  const { openModal } = useModalStore();
  const navigate = useNavigate();

  // 기존 닉네임 상태
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 추가: 프로필 사진, 상태 메시지, 학교 정보(학교명, 학과, 학년)
  const [profilePhoto, setProfilePhoto] = useState<string>(''); // 예: 이미지 URL 또는 Base64
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [grade, setGrade] = useState<string>('1학년'); // 기본값

  const nicknameRegex = /^[a-zA-Z\uAC00-\uD7A3]+$/;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsNicknameValid(false);
    setErrorMessage('');
  };

  const checkNicknameAvailability = async () => {
    if (!nicknameRegex.test(nickname)) {
      setErrorMessage('영어와 한글만 사용 가능합니다.');
      return;
    }

    setIsChecking(true);
    try {
      const result = await validateNickname(nickname);
      if (result.available) {
        setIsNicknameValid(true);
        setErrorMessage('사용 가능한 닉네임입니다.');
      } else {
        setErrorMessage('이미 사용 중인 닉네임입니다.');
      }
    } catch (error) {
      setErrorMessage('닉네임 확인 중 오류가 발생했습니다.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleSubmit = async () => {
    if (!isNicknameValid) {
      alert('닉네임 중복 확인을 완료해주세요.');
      return;
    }

    // 모든 회원가입 데이터를 객체에 담아서 로컬스토리지에 저장
    const signupData = {
      nickname,
      profilePhoto,
      statusMessage,
      selectedSchool,
      selectedDepartment,
      grade,
    };

    localStorage.setItem('signupData', JSON.stringify(signupData));
    openModal(<p>회원가입이 완료되었습니다.</p>);

    // 리다이렉션: 회원가입 완료 후 메인 페이지로 이동 (예: '/')
    navigate('/');

    // 실제 API 연동 시 아래와 같이 사용합니다.
    // try {
    //   await axios.post('/api/signup', signupData);
    //   openModal(<p>회원가입이 완료되었습니다.</p>);
    //   navigate('/');
    // } catch (error) {
    //   openModal(<p>회원가입 중 오류가 발생했습니다.</p>);
    // }
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
      <ErrorMessage>{errorMessage || ' '}</ErrorMessage>

      {/* 프로필 사진 컴포넌트: 선택한 사진이 변경되면 setProfilePhoto 호출 */}
      <ProfileUpload
        profilePhoto={profilePhoto}
        onPhotoChange={setProfilePhoto}
      />

      {/* 상태 메시지 컴포넌트: 입력된 메시지를 상위 상태로 올림 */}
      <StatusMessage
        message={statusMessage}
        onMessageChange={setStatusMessage}
      />

      {/* 학교 정보 컴포넌트: 학교, 학과, 학년 정보를 상위 상태로 올림 */}
      <SchoolInfoForm
        selectedSchool={selectedSchool}
        selectedDepartment={selectedDepartment}
        grade={grade}
        onSchoolChange={setSelectedSchool}
        onDepartmentChange={setSelectedDepartment}
        onGradeChange={setGrade}
      />

      <SubmitButton onClick={handleSubmit}>회원가입 완료</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
