import React, { useState } from 'react';
import styled from 'styled-components';
import useModalStore from '../../store/modalStore';
import ProfileUpload from './ProfileUpload';
import SchoolInfoForm from './SchoolInfoForm';
import StatusMessage from './StatusMessage';
import axios from 'axios';

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

const SignupForm: React.FC = () => {
  const { openModal } = useModalStore();
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const nicknameRegex = /^[a-zA-Z\uAC00-\uD7A3]+$/;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsNicknameValid(false);
    setErrorMessage('');
  };

  const checkNicknameAvailability = async () => {
    if (!nicknameRegex.test(nickname)) {
      setErrorMessage('중복 닉네임은 불가,영어 & 한글 조합');
      return;
    }

    setIsChecking(true);
    try {
      const response = await axios.post('/api/check-nickname', { nickname });
      if (response.data.available) {
        setIsNicknameValid(true);
        setErrorMessage('사용 가능한 닉네임입니다.');
      } else {
        setErrorMessage('이미 사용 중인 닉네임입니다.');
      }
    } catch (error) {
      setErrorMessage('api연동 전입니다.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleSubmit = async () => {
    if (!isNicknameValid) {
      alert('닉네임 중복 확인을 완료해주세요');
      return;
    }

    try {
      await axios.post('/api/signup', { nickname });
      openModal(<p>회원가입이 완료되었습니다.</p>);
    } catch (error) {
      openModal(<p>회원가입 중 오류가 발생했습니다.</p>);
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
      <ErrorMessage>{errorMessage || ' '}</ErrorMessage>

      <ProfileUpload />
      <StatusMessage />
      <SchoolInfoForm />

      <SubmitButton onClick={handleSubmit}>회원가입 완료</SubmitButton>
    </FormContainer>
  );
};

export default SignupForm;
