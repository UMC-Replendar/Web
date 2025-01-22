import React, { useState } from 'react';
import styled from 'styled-components';
import useModalStore from '../../store/modalStore';
import SchoolSearchModal from '../../modal/SchoolSearchModal';
import DepartmentSearchModal from '../../modal/DepartmentSearchModal';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 65px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  font-size: 23px;
  margin-bottom: 10px;
`;

const Title = styled.label`
  font-weight: bold;
  font-size: 23px;
  padding-top: 8px;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
  cursor: not-allowed;
`;

const Button = styled.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
`;

const Select = styled.select`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  margin-left: 30px;
`;

const SchoolInfoForm: React.FC = () => {
  const { openModal } = useModalStore();
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // 학교 모달 열기 및 선택 처리
  const handleOpenSchoolModal = () => {
    openModal(
      <SchoolSearchModal onSelect={(school) => setSelectedSchool(school)} />
    );
  };

  // 학과 모달 열기 및 선택 처리, 선택된 학교 전달
  const handleOpenDepartmentModal = () => {
    if (!selectedSchool) {
      alert('먼저 학교를 선택해주세요.');
      return;
    }

    openModal(
      <DepartmentSearchModal
        selectedSchool={selectedSchool}
        onSelect={(dept) => setSelectedDepartment(dept)}
      />
    );
  };

  return (
    <div>
      <Label>학교 정보 설정*</Label>

      <BoxWrapper>
        <RowWrapper>
          <Title>학교 명 *</Title>
          <Input
            type="text"
            placeholder="학교 검색은 버튼을 클릭하세요."
            value={selectedSchool}
            disabled
          />
          <Button onClick={handleOpenSchoolModal}>검색하기</Button>
        </RowWrapper>

        <RowWrapper>
          <Title>학과 명 *</Title>
          <Input
            type="text"
            placeholder="학과 검색은 버튼을 클릭하세요."
            value={selectedDepartment}
            disabled
          />
          <Button onClick={handleOpenDepartmentModal}>검색하기</Button>
        </RowWrapper>

        <RowWrapper>
          <Title>학년 *</Title>
          <Select>
            <option>1학년</option>
            <option>2학년</option>
            <option>3학년</option>
            <option>4학년</option>
          </Select>
        </RowWrapper>
      </BoxWrapper>
    </div>
  );
};

export default SchoolInfoForm;
