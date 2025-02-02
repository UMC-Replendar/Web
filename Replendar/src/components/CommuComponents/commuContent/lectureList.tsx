import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';

const LectureList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 10 : 3;
  return (
    <Container>
      <AddButtonDiv>
        <AddButton>
          과제 추가하기
          <img src={PlusIcon} alt="Plus Icon" />
        </AddButton>
      </AddButtonDiv>

      <table>
        <thead>
          <tr>
            <th>학년</th>
            <th>교수</th>
            <th>강좌</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, visibleItems).map((item, index) => (
            <tr key={index}>
              <td>{item.grade}</td>

              <td>{item.professor}</td>
              <td>{item.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default LectureList;
const Container = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;
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
const AddButtonDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`;
// const RadiusDiv = styled.div``;

//임시데이터
const data = [
  { grade: '1학년', professor: '김철수', course: '컴퓨터 과학 기초' },
  { grade: '2학년', professor: '이영희', course: '자료 구조' },
  { grade: '3학년', professor: '박민수', course: '알고리즘' },
  { grade: '4학년', professor: '최유리', course: '운영체제' },
  { grade: '1학년', professor: '한지훈', course: '웹 프로그래밍' },
  { grade: '2학년', professor: '송정민', course: '네트워크 이론' },
  { grade: '3학년', professor: '오세훈', course: '소프트웨어 공학' },
  { grade: '4학년', professor: '김소연', course: '인공지능' },
  { grade: '1학년', professor: '이수진', course: '수학적 사고' },
  { grade: '2학년', professor: '정해진', course: '디지털 회로' },
];
