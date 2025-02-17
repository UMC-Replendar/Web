import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import { PlusIcon } from '../commuIcons';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';
import { useAcademicYearStore } from '../../../store/profileStore';
import useModalStore from '../../../store/modalStore';
import { LectureListSkeleton } from '../../skeleton';
import { useEffect, useState } from 'react';
import React from 'react';
import { ITaskList } from '../../../types';
import BlueButton from '../../blueButton';
import AddTaskModal from '../../../modal/AddTaskModal';

const LectureList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const { openModal } = useModalStore();
  const { academicYear, setAcademicYear } = useAcademicYearStore();
  const [lectureId, setLectureId] = useState<number | null>(null);

  const queryKey = `/api/major/lectures/list/${academicYear}`;
  const { data, isLoading } = useGetData(queryKey);

  const displayedData = expanded === 'true' ? data : data.slice(0, 3);

  const handleOpenModal = () => {
    openModal(<CommuModalContent queryKey={queryKey} />);
  };

  const [showTasks, setShowTasks] = useState<Record<number, boolean>>({});

  const toggleGroup = (id: number) => {
    // 하나만 true로 유지하고 나머지는 false
    setLectureId((prevId) => (prevId === id ? null : id)); // 같은 걸 클릭하면 닫기

    setShowTasks((prev) => {
      const newState = { ...prev };

      // 이미 클릭한 항목이면 true에서 false로 변경
      if (prev[id]) {
        newState[id] = false;
      } else {
        // 클릭한 항목만 true로 설정, 나머지는 false
        Object.keys(prev).forEach((key) => {
          newState[Number(key)] = false;
        });
        newState[id] = true;
      }

      return newState;
    });
  };

  const { data: task } = useGetData(
    lectureId ? `/api/lecture-assignments/${lectureId}` : ''
  );

  useEffect(() => {
    console.log('showTasks', showTasks);
  }, [showTasks]);
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
              <td
                colSpan={7}
                style={{
                  backgroundColor: 'transparent',
                  padding: 0,
                  width: '100%',
                }}
              >
                <LectureListSkeleton count={3} />
              </td>
            </tr>
          ) : (
            displayedData.map((item: ILecture, index: number) => (
              <React.Fragment key={index}>
                <tr
                  className="hover"
                  onClick={() => toggleGroup(item.lectureId)}
                  style={{
                    backgroundColor: showTasks[item.lectureId]
                      ? 'rgba(102, 102, 102, 1)'
                      : 'white',
                    color: showTasks[item.lectureId] ? 'white' : 'black',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  <td>{item.academicYear.replace('YEAR_', '')}</td>
                  <td>{item.professor}</td>
                  <td>{item.lectureName}</td>
                </tr>

                {showTasks[item.lectureId] && ( // 여기가 중요한 부분입니다.
                  <tr style={{ boxShadow: 'none' }}>
                    <td colSpan={3} style={{ padding: '0 15px' }}>
                      <table style={{ width: '100%' }}>
                        <thead>
                          <tr>
                            <th>학년</th>
                            <th>과제 추가일</th>
                            <th>교수</th>
                            <th>강좌명</th>
                            <th>과제 제목</th>
                            <th>마감일</th>
                            <th>체크</th>
                          </tr>
                        </thead>
                        <tbody>
                          {task.map(
                            (taskItem: ITaskList, taskIndex: number) => (
                              <tr
                                key={taskIndex}
                                style={{ backgroundColor: 'white' }}
                              >
                                <td>
                                  {taskItem.academicYear.replace('YEAR_', '')}
                                </td>
                                <td>{taskItem.created_date}</td>
                                <td>{taskItem.professor}</td>
                                <td>{taskItem.lectureName}</td>
                                <td>{taskItem.title}</td>
                                <td>{taskItem.due_date}</td>
                                <td>
                                  {taskItem.check === 'CHECK' ? (
                                    <BlueButton status="등록됨">
                                      등록됨
                                    </BlueButton>
                                  ) : (
                                    <BlueButton
                                      onClick={() =>
                                        openModal(
                                          <AddTaskModal
                                            lectureAssignmentId={
                                              taskItem.lectureAssignmentId
                                            }
                                            onTaskAdded={() =>
                                              console.log(
                                                '과제가 추가되었습니다.'
                                              )
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
                            )
                          )}
                        </tbody>
                      </table>
                    </td>
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

  tr.hover:hover {
    background-color: rgba(102, 102, 102, 1) !important;
    color: white !important;
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }
  th {
    color: #666;
    background-color: white;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
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
