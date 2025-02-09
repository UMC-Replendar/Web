import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import BlueButton from '../../blueButton';
import DownArrow from '../../../assets/images/downArrow.svg';
import { useState } from 'react';
// import useModalStore from '../../../store/modalStore';
import CommuModalContent from '../modalContents/commuModalContent';

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
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 50px;
`;

const TaskList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 10 : 3;
  const [isOpen, setIsOpen] = useState(false);
  const [academicYear, setAcademicYear] = useState('');
  const [professor, setProfessor] = useState('');
  const [sortKey, setSortKey] = useState('');

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  //데이터 보낼 때 학년 숫자형식으로 바꿔서 보내기
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
            onChange={(e) => setAcademicYear(e.target.value)}
          >
            <option value="" hidden>
              학년
            </option>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
            <option value="5">5학년</option>
          </Select>

          <Select
            onChange={(e) => setProfessor(e.target.value)}
            value={professor}
          >
            <option value="" hidden>
              교수명
            </option>
            <option value="김교수">김교수</option>
            <option value="이교수">이교수</option>
            <option value="박교수">박교수</option>
          </Select>
          <Select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
            <option value="" hidden>
              정렬
            </option>
            <option value="등록일">등록일</option>
            <option value="교수명">교수명</option>
            <option value="강좌명">강좌명</option>
            <option value="과제명">과제명</option>
            <option value="마감일">마감일</option>
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
          {data.slice(0, visibleItems).map((item, index) => (
            <tr key={index}>
              <td>{item.grade}</td>
              <td>{item.registrationDate}</td>
              <td>{item.professor}</td>
              <td>{item.course}</td>
              <td>{item.assignment}</td>
              <td>{item.deadline}</td>

              <td>
                {item.isRegistered ? (
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
            <CommuModalContent></CommuModalContent>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
};

export default TaskList;

//임시데이터
const data = [
  {
    grade: '1',
    registrationDate: '1/10',
    professor: '김영희',
    course: '컴퓨터공학',
    assignment: '자료구조 과제',
    deadline: '2/1',
    isRegistered: true,
  },
  {
    grade: '2',
    registrationDate: '1/15',
    professor: '이철수',
    course: '수학',
    assignment: '미적분학 2-1',
    deadline: '2/5',
    isRegistered: true,
  },
  {
    grade: '3',
    registrationDate: '1/20',
    professor: '박민정',
    course: '물리학',
    assignment: '고급 물리학',
    deadline: '2/10',
    isRegistered: false,
  },
  {
    grade: '1',
    registrationDate: '1/12',
    professor: '김영희',
    course: '영어',
    assignment: '영어회화 과제',
    deadline: '2/3',
    isRegistered: true,
  },
  {
    grade: '2',
    registrationDate: '1/17',
    professor: '이철수',
    course: '역사',
    assignment: '한국사 과제',
    deadline: '2/7',
    isRegistered: false,
  },
  {
    grade: '3',
    registrationDate: '1/22',
    professor: '박민정',
    course: '화학',
    assignment: '화학 실험 보고서',
    deadline: '2/12',
    isRegistered: true,
  },
  {
    grade: '1',
    registrationDate: '1/11',
    professor: '김영희',
    course: '프로그래밍',
    assignment: '파이썬 기초',
    deadline: '2/2',
    isRegistered: true,
  },
  {
    grade: '2',
    registrationDate: '1/16',
    professor: '이철수',
    course: '통계학',
    assignment: '기초 통계학 과제',
    deadline: '2/6',
    isRegistered: false,
  },
  {
    grade: '3',
    registrationDate: '1/21',
    professor: '박민정',
    course: '경제학',
    assignment: '미시경제학 과제',
    deadline: '2/11',
    isRegistered: true,
  },
  {
    grade: '1',
    registrationDate: '1/13',
    professor: '김영희',
    course: '생물학',
    assignment: '생물학 실험',
    deadline: '2/4',
    isRegistered: true,
  },
  {
    grade: '2',
    registrationDate: '1/18',
    professor: '이철수',
    course: '컴퓨터공학',
    assignment: '알고리즘 과제',
    deadline: '2/8',
    isRegistered: false,
  },
  {
    grade: '3',
    registrationDate: '1/23',
    professor: '박민정',
    course: '심리학',
    assignment: '심리학 연구 보고서',
    deadline: '2/13',
    isRegistered: true,
  },
];
