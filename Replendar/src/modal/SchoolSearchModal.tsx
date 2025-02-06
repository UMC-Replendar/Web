import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useModalStore from '../store/modalStore';
import { axiosInstance } from '../apis/axios-instance';
import useSchoolStore from '../store/schoolStore';
import SchoolRegisterModal from './SchoolRegisterModal';

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

const SchoolSearchModal: React.FC<{ onSelect: (school: string) => void }> = ({
  onSelect,
}) => {
  const { openModal, closeModal } = useModalStore();
  const { schools, setSchools, setSelectedSchool } = useSchoolStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get<{
          isSuccess: boolean;
          code: string;
          message: string;
          result: { id: number; schoolName: string }[];
        }>('/api/schools');
        console.log('📡 API 응답 데이터:', response.data.result); // ✅ 디버깅 로그 추가

        const formattedSchools = response.data.result.map((school) => ({
          id: school.id,
          name: school.schoolName,
        }));

        setSchools(formattedSchools);
      } catch (error) {
        console.error('학교 목록 불러오기 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, [setSchools]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get<{
        isSuccess: boolean;
        code: string;
        message: string;
        result: { id: number; schoolName: string }[];
      }>(`/api/schools?keyword=${searchTerm}`);

      const formattedSchools = response.data.result.map((school) => ({
        id: school.id,
        name: school.schoolName,
      }));

      setSchools(formattedSchools);
    } catch (error) {
      console.error('학교 검색 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSchool = (school: { id: number; name: string }) => {
    alert(`${school.name} 를 선택하였습니다.`);
    setSelectedSchool(school); // ✅ Zustand 상태 업데이트
    console.log(
      '🛠 Zustand에 저장된 selectedSchool:',
      useSchoolStore.getState().selectedSchool
    ); // ✅ 상태 업데이트 즉시 확인

    onSelect(school.name);
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
      <SearchButton onClick={handleSearch}>검색</SearchButton>
      {loading && <p>검색 중...</p>}
      <SchoolList>
        {schools.map((school) => (
          <SchoolItem key={school.id}>
            {school.name}
            <SelectButton onClick={() => handleSelectSchool(school)}>
              선택하기
            </SelectButton>
          </SchoolItem>
        ))}
      </SchoolList>
      <RegisterOption>
        찾으시는 학교가 없나요?
        <RegisterButton onClick={() => openModal(<SchoolRegisterModal />)}>
          등록하기
        </RegisterButton>
      </RegisterOption>
    </ModalWrapper>
  );
};

export default SchoolSearchModal;
