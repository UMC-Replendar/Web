import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';
import { axiosInstance } from '../apis/axios-instance';
import useSchoolStore from '../store/schoolStore';
import DepartmentRegisterModal from './DepartmentRegisterModal';
import useDepartmentStore from '../store/useDepartmentStore';

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
  cursor: pointer;
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

interface Department {
  id: number;
  name: string;
}

const DepartmentSearchModal: React.FC = ({}) => {
  const { openModal, closeModal } = useModalStore();
  const { selectedSchool } = useSchoolStore();
  const selectedSchoolId = selectedSchool?.id ?? null;
  const { setSelectedDepartment } = useDepartmentStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('선택된 학교 id', selectedSchoolId);

    if (!selectedSchoolId) {
      console.warn('학교 ID가 없습니다. API 요청을 중단합니다.');
      return;
    }

    const fetchDepartments = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get<{
          isSuccess: boolean;
          code: string;
          message: string;
          result: { id: number; majorName: string }[];
        }>(`/api/majors?schoolId=${selectedSchoolId}`);

        const formattedDepartments = response.data.result.map((dept) => ({
          id: dept.id,
          name: dept.majorName,
        }));

        setDepartments(formattedDepartments);
      } catch (error) {
        console.error('학과 목록 불러오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [selectedSchoolId]);

  const handleSearch = async () => {
    if (!searchTerm.trim() || !selectedSchoolId) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get<{
        isSuccess: boolean;
        code: string;
        message: string;
        result: { id: number; majorName: string }[];
      }>(`/api/majors?schoolId=${selectedSchoolId}&keyword=${searchTerm}`);

      const formattedDepartments = response.data.result.map((dept) => ({
        id: dept.id,
        name: dept.majorName,
      }));

      setDepartments(formattedDepartments);
    } catch (error) {
      console.error('학과 검색 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectDepartment = (dept: { id: number; name: string }) => {
    alert(`${dept.name}를 선택하였습니다.`);

    setSelectedDepartment(dept);
    closeModal();
  };

  return (
    <ModalWrapper>
      <Title>학과 검색하기</Title>
      <SearchInput
        type="text"
        placeholder="학과 이름 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>검색</SearchButton>
      {loading && <p>검색 중...</p>}
      <DepartmentList>
        {departments.map((dept) => (
          <DepartmentItem key={dept.id}>
            {dept.name}
            <SelectButton onClick={() => handleSelectDepartment(dept)}>
              선택하기
            </SelectButton>
          </DepartmentItem>
        ))}
      </DepartmentList>
      <RegisterOption>
        찾으시는 학과가 없나요?
        <RegisterButton onClick={() => openModal(<DepartmentRegisterModal />)}>
          등록하기
        </RegisterButton>
      </RegisterOption>
    </ModalWrapper>
  );
};

export default DepartmentSearchModal;
