import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import { PlusIcon } from '../commuIcons';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';
import { useAcademicYearStore } from '../../../store/profileStore';
import useModalStore from '../../../store/modalStore';
import { LectureListSkeleton } from '../../skeleton';
import { useState } from 'react';
import React from 'react';

const LectureList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const { openModal } = useModalStore();
  const { academicYear, setAcademicYear } = useAcademicYearStore();
  const [lectureId, setLectureId] = useState();

  const queryKey = `/api/major/lectures/list/${academicYear}`;
  const { data, isLoading } = useGetData(queryKey);

  const displayedData = expanded === 'true' ? data : data.slice(0, 3);

  const handleOpenModal = () => {
    openModal(<CommuModalContent queryKey={queryKey} />);
  };

  const [showTasks, setShowTasks] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const toggleGroup = (index: number) => {
    setShowTasks((prev) => {
      const newShowTasks = [...prev];
      newShowTasks[index] = !newShowTasks[index];
      return newShowTasks;
    });
  };

  return (
    <Container>
      <SpaceBtwDiv>
        <AddButtonDiv>
          <AddButton onClick={handleOpenModal}>
            과제 추가하기
            <PlusIcon fill="currentColor" />
          </AddButton>
        </AddButtonDiv>
        <Select
          value={academicYear}
          onChange={(e) => setAcademicYear(Number(e.target.value))}
        >
          <option value={1}>1학년</option>
          <option value={2}>2학년</option>
          <option value={3}>3학년</option>
          <option value={4}>4학년</option>
        </Select>
      </SpaceBtwDiv>

      <table>
        <thead>
          <tr>
            <th>학년</th>
            <th>교수</th>
            <th>강좌</th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <StyledTd
                colSpan={7}
                style={{
                  backgroundColor: 'transparent',
                  padding: 0,

                  width: '100%',
                }}
              >
                <LectureListSkeleton count={3} />
              </StyledTd>
            </tr>
          ) : (
            displayedData.map((item: ILecture, index: number) => (
              <React.Fragment key={index}>
                <tr onClick={() => toggleGroup(index)}>
                  <td>{item.academicYear.replace('YEAR_', '')}</td>
                  <td>{item.professor}</td>
                  <td>{item.lectureName}</td>
                </tr>
                {showTasks[index] && (
                  <tr>
                    <td colSpan={7}></td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default LectureList;

const StyledTd = styled.td`
  background-color: transparent;
  padding: 0;
  width: 100%;
`;

const Select = styled.select`
  margin-left: 130px;
  width: 100px;

  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
`;

const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`;

const Container = styled.div`
  width: 100%;

  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px;
  }
  th {
    color: #666;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
    background-color: white;
  }
  tr {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }

  tr:hover td {
    background-color: rgba(102, 102, 102, 1);
    color: white;
  }

  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
const AddButtonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`;
