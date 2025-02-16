import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import BlueButton from '../../blueButton';
import { useState } from 'react';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ITaskList } from '../../../types';
import { useAcademicYearStore } from '../../../store/profileStore';
import useModalStore from '../../../store/modalStore';
import AddTaskModal from '../../../modal/AddTaskModal';
import { TaskListSkeleton } from '../../skeleton';

const Container = styled.div`
  width: 100%;
  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px; /* 셀 간격 */
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
  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  /* 각 행(tr)의 마지막 셀을 오른쪽 둥글게 */
  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
const SpaceBtwDiv = styled.div`
  div {
    display: flex;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`;
const AddButtonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
`;

const Sort = styled.label`
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  font-size: 19px;
  align-items: center;
`;

const StyledTd = styled.td`
  background-color: transparent;
  padding: 0;
  width: 100%;
`;

const TaskList: React.FC = () => {
  const { openModal } = useModalStore();

  const { academicYear, setAcademicYear, sortKey, setSortKey } =
    useAcademicYearStore();

  const queryKey = `/api/major/lectures/sort/${sortKey}?sort=asc&academicYear=${academicYear}&majorId=`;
  const { data, isLoading } = useGetData(queryKey);

  const handleOpenModal = () => {
    openModal(<CommuModalContent queryKey={queryKey} />);
  };

  return (
    <Container>
      <SpaceBtwDiv>
        <AddButtonDiv>
          {' '}
          <AddButton onClick={handleOpenModal}>
            과제 추가하기
            <img src={PlusIcon} alt="Plus Icon" />
          </AddButton>
        </AddButtonDiv>

        <div>
          <Select
            value={academicYear}
            onChange={(e) => setAcademicYear(Number(e.target.value))}
          >
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
            <option value="5">5학년</option>
          </Select>
          <Sort>정렬</Sort>

          <Select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <option value="professor">교수명</option>
            <option value="registration">강좌명</option>
            <option value="assignment">과제명</option>
            <option value="due">마감일</option>
          </Select>
        </div>
      </SpaceBtwDiv>

      <table>
        <thead>
          <tr>
            <th>학년</th>
            <th>등록일</th>
            <th>교수</th>
            <th>강좌</th>
            <th>과제명</th>
            <th>마감일</th>
            <th>과제등록</th>
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
                <TaskListSkeleton count={3} />
              </StyledTd>
            </tr>
          ) : (
            data.map((item: ITaskList) => (
              <tr key={item.lectureAssignmentId}>
                <td>{item.academicYear}</td>
                <td>{item.created_date}</td>
                <td>{item.professor}</td>
                <td>{item.lectureName}</td>
                <td>{item.title}</td>
                <td>{item.due_date}</td>
                <td>
                  {item.check === 'CHECK' ? (
                    <BlueButton status="등록됨">등록됨</BlueButton>
                  ) : (
                    <BlueButton
                      onClick={() =>
                        openModal(
                          <AddTaskModal
                            lectureAssignmentId={item.lectureAssignmentId}
                            onTaskAdded={() =>
                              console.log('과제가 추가되었습니다.')
                            }
                          />
                        )
                      }
                    >
                      내 일정에 등록
                    </BlueButton>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default TaskList;
