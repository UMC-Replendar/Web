import React, { useState } from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';
import { axiosInstance } from '../apis/axios-instance';
import useSchoolStore from '../store/schoolStore';

const ModalWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #25c26c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const SchoolRegisterModal: React.FC = () => {
  const { closeModal } = useModalStore();
  const [schoolName, setSchoolName] = useState('');
  const [error, setError] = useState('');
  const { addSchool } = useSchoolStore();

  const handleRegisterSchool = async () => {
    if (!schoolName.trim()) {
      setError('학교 이름을 입력해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.post('api/schools', { schoolName });

      if (response.data?.isSuccess) {
        addSchool({
          id: response.data.result.id,
          name: response.data.result.schoolName,
        });
        closeModal();
      } else {
        setError(response.data?.message || '학교 등록 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setError('학교 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <ModalWrapper>
      <Title>학교 등록하기</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Input
        type="text"
        placeholder="학교 이름 입력"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />
      <SubmitButton onClick={handleRegisterSchool}>등록하기</SubmitButton>
      <CloseButton onClick={closeModal}>취소</CloseButton>
    </ModalWrapper>
  );
};

export default SchoolRegisterModal;
