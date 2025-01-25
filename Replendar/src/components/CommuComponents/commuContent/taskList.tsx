import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import BlueButton from '../../blueButton';

const Container = styled.div`
  width: 95%;
  background-color: white;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: spae-around;
  padding: 10px 20px 10px 20px;
  gap: 15px;
  box-sizing: border-box;
`;

const TaskList: React.FC<{ expanded: string }> = ({ expanded }) => {
  return (
    <>
      <AddButton>
        과제 추가하기
        <img src={PlusIcon} alt="Plus Icon" />
      </AddButton>
      <Container>
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
          {data.map((item, index) => (
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
      </Container>
    </>
  );
};

export default TaskList;

//임시데이터
const data = [
  {
    grade: '1학년',
    registrationDate: '1/10',
    professor: '김영희',
    course: '컴퓨터공학',
    assignment: '자료구조 과제',
    deadline: '2/1',
    isRegistered: true,
  },
  {
    grade: '2학년',
    registrationDate: '1/15',
    professor: '이철수',
    course: '수학',
    assignment: '미적분학 2-1',
    deadline: '2/5',
    isRegistered: true,
  },
  {
    grade: '3학년',
    registrationDate: '1/20',
    professor: '박민정',
    course: '물리학',
    assignment: '고급 물리학',
    deadline: '2/10',
    isRegistered: false,
  },
  {
    grade: '1학년',
    registrationDate: '1/12',
    professor: '김영희',
    course: '영어',
    assignment: '영어회화 과제',
    deadline: '2/3',
    isRegistered: true,
  },
  {
    grade: '2학년',
    registrationDate: '1/17',
    professor: '이철수',
    course: '역사',
    assignment: '한국사 과제',
    deadline: '2/7',
    isRegistered: false,
  },
  {
    grade: '3학년',
    registrationDate: '1/22',
    professor: '박민정',
    course: '화학',
    assignment: '화학 실험 보고서',
    deadline: '2/12',
    isRegistered: true,
  },
  {
    grade: '1학년',
    registrationDate: '1/11',
    professor: '김영희',
    course: '프로그래밍',
    assignment: '파이썬 기초',
    deadline: '2/2',
    isRegistered: true,
  },
  {
    grade: '2학년',
    registrationDate: '1/16',
    professor: '이철수',
    course: '통계학',
    assignment: '기초 통계학 과제',
    deadline: '2/6',
    isRegistered: false,
  },
  {
    grade: '3학년',
    registrationDate: '1/21',
    professor: '박민정',
    course: '경제학',
    assignment: '미시경제학 과제',
    deadline: '2/11',
    isRegistered: true,
  },
  {
    grade: '1학년',
    registrationDate: '1/13',
    professor: '김영희',
    course: '생물학',
    assignment: '생물학 실험',
    deadline: '2/4',
    isRegistered: true,
  },
  {
    grade: '2학년',
    registrationDate: '1/18',
    professor: '이철수',
    course: '컴퓨터공학',
    assignment: '알고리즘 과제',
    deadline: '2/8',
    isRegistered: false,
  },
  {
    grade: '3학년',
    registrationDate: '1/23',
    professor: '박민정',
    course: '심리학',
    assignment: '심리학 연구 보고서',
    deadline: '2/13',
    isRegistered: true,
  },
];
