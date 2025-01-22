import React, { useState } from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';

const ModalWrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
`;

const DepartmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

const DepartmentItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const SelectButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const DepartmentSearchModal: React.FC<{
  selectedSchool: string;
  onSelect: (dept: string) => void;
}> = ({ selectedSchool, onSelect }) => {
  const { closeModal } = useModalStore();
  const [searchTerm, setSearchTerm] = useState('');

  // 선택한 학교에 따른 학과 리스트
  const departments: Record<string, string[]> = {
    룡산머학교: ['IT융합학과', '전자공학과', '경영학과'],
    서울대학교: ['컴퓨터공학과', '화학공학과', '법학과'],
    부산대학교: ['의과대학', '기계공학과', '국어국문학과'],
  };

  const availableDepartments = departments[selectedSchool] || [];

  // 학과 선택 시 동작하는 함수
  const handleSelectDepartment = (dept: string) => {
    alert(`${dept}를 선택하였습니다.`);
    onSelect(dept);
    closeModal();
  };

  return (
    <ModalWrapper>
      <Title>{selectedSchool} 학과 검색하기</Title>
      <SearchInput
        type="text"
        placeholder="학과 이름 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton>검색</SearchButton>
      <DepartmentList>
        {availableDepartments
          .filter((dept) => dept.includes(searchTerm))
          .map((dept, index) => (
            <DepartmentItem key={index}>
              {dept}
              <SelectButton onClick={() => handleSelectDepartment(dept)}>
                선택하기
              </SelectButton>
            </DepartmentItem>
          ))}
      </DepartmentList>
    </ModalWrapper>
  );
};

export default DepartmentSearchModal;
