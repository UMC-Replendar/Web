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

const SchoolList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

const SchoolItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const SelectButton = styled.button`
  background: #25c26c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterOption = styled.p`
  margin-top: 20px;
  font-size: 14px;
`;

const RegisterButton = styled.button`
  background: #e8e8e8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

interface SchoolSearchModalProps {
  onSelect: (school: string) => void;
}

const SchoolSearchModal: React.FC<SchoolSearchModalProps> = ({ onSelect }) => {
  const { closeModal } = useModalStore();
  const [searchTerm, setSearchTerm] = useState('');
  const schools = ['룡산머학교', '서울대학교', '부산대학교'];

  // 학교 선택 시 동작하는 함수
  const handleSelectSchool = (school: string) => {
    alert(`${school}를 선택하였습니다.`);
    onSelect(school); // 부모 컴포넌트로 선택된 학교 전달
    closeModal();
  };

  return (
    <ModalWrapper>
      <Title>학교 검색하기</Title>
      <SearchInput
        type="text"
        placeholder="학교 이름 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton>검색</SearchButton>
      <SchoolList>
        {schools
          .filter((school) => school.includes(searchTerm))
          .map((school, index) => (
            <SchoolItem key={index}>
              {school}
              <SelectButton onClick={() => handleSelectSchool(school)}>
                선택하기
              </SelectButton>
            </SchoolItem>
          ))}
      </SchoolList>
      <RegisterOption>
        찾으시는 학교가 없나요?
        <RegisterButton>등록하기</RegisterButton>
      </RegisterOption>
    </ModalWrapper>
  );
};

export default SchoolSearchModal;
