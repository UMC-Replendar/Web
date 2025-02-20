import React, { useState } from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';
import { axiosInstance } from '../apis/axios-instance';
import useDepartmentStore from '../store/useDepartmentStore';
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

const DepartmentRegisterModal: React.FC = () => {
  const { closeModal } = useModalStore();
  const [majorName, setMajorName] = useState('');
  const [error, setError] = useState('');
  const { addDepartment } = useDepartmentStore();
  const { selectedSchool } = useSchoolStore();

  const handleRegisterDepartment = async () => {
    if (!majorName.trim()) {
      setError('학과 이름을 입력해주세요.');
      return;
    }

    if (!selectedSchool) {
      setError('학교를 먼저 선택해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.post('api/major', {
        schoolId: selectedSchool.id,
        majorName,
      });

      if (response.data?.isSuccess) {
        addDepartment({
          id: response.data.result.id,
          name: response.data.result.majorName,
        });
        closeModal();
      } else {
        setError(response.data?.message || '학과 등록 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setError('학과 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <ModalWrapper>
      <Title>학과 등록하기</Title>
      {error && <ErrorText>{error}</ErrorText>}
      <Input
        type="text"
        placeholder="학과 이름 입력"
        value={majorName}
        onChange={(e) => setMajorName(e.target.value)}
      />
      <SubmitButton onClick={handleRegisterDepartment}>등록하기</SubmitButton>
      <CloseButton onClick={closeModal}>취소</CloseButton>
    </ModalWrapper>
  );
};

export default DepartmentRegisterModal;
