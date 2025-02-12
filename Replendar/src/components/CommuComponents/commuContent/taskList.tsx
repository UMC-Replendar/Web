import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import BlueButton from '../../blueButton';
import { useState, useEffect } from 'react';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ILectureList } from '../../../types';

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

const Modal = styled.div`
  position: absolute;
  /*top: 830px;
  left: 430px;*/
  top: 400px;
  left: 430px;
  width: 600px;
  height: 650px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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

const TaskList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 10 : 3;
  const [isOpen, setIsOpen] = useState(false);
  const [academicYear, setacademicYear] = useState(1);
  const [sortKey, setSortKey] = useState('professor');

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const queryKey = `/api/major/lectures/sort/${sortKey}?sort=asc&academicYear=${academicYear}&majorId=`;
  const { data } = useGetData(queryKey);

  useEffect(() => {
    console.log(queryKey);
  }, [queryKey]);
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
            onChange={(e) => setacademicYear(Number(e.target.value))}
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
          {data.slice(0, visibleItems).map((item: ILectureList) => (
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
                  <BlueButton>내 일정에 등록</BlueButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpen && (
        <Overlay onClick={() => setIsOpen(!isOpen)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CommuModalContent queryKey={queryKey}></CommuModalContent>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
};

export default TaskList;
