import React from 'react';
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

interface SchoolInfoFormProps {
  selectedSchool: string;
  selectedDepartment: string;
  grade: string;
  onSchoolChange: (school: string) => void;
  onDepartmentChange: (dept: string) => void;
  onGradeChange: (grade: string) => void;
}

const SchoolInfoForm: React.FC<SchoolInfoFormProps> = ({
  selectedSchool,
  selectedDepartment,
  grade,
  onSchoolChange,
  onDepartmentChange,
  onGradeChange,
}) => {
  const { openModal } = useModalStore();

  // 학교 모달 열기 및 선택 처리
  const handleOpenSchoolModal = () => {
    openModal(
      <SchoolSearchModal onSelect={(school) => onSchoolChange(school)} />
    );
  };

  // 학과 모달 열기 및 선택 처리 (선택된 학교가 있어야 함)
  const handleOpenDepartmentModal = () => {
    if (!selectedSchool) {
      alert('먼저 학교를 선택해주세요.');
      return;
    }
    openModal(
      <DepartmentSearchModal
        selectedSchool={selectedSchool}
        onSelect={(dept) => onDepartmentChange(dept)}
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
          <Select value={grade} onChange={(e) => onGradeChange(e.target.value)}>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
            <option value="4학년">4학년</option>
          </Select>
        </RowWrapper>
      </BoxWrapper>
    </div>
  );
};

export default SchoolInfoForm;
