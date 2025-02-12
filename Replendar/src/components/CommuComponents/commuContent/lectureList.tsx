import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';
import { useAcademicYearStore } from '../../../store/profileStore';
import useModalStore from '../../../store/modalStore';

const LectureList = () => {
  const { openModal } = useModalStore();
  const { academicYear, setAcademicYear } = useAcademicYearStore();

  const queryKey = `/api/major/lectures/list/${academicYear}`;
  const { data } = useGetData(queryKey);

  const handleOpenModal = () => {
    openModal(<CommuModalContent queryKey={queryKey} />);
  };

  return (
    <Container>
      <SpaceBtwDiv>
        <AddButtonDiv>
          <AddButton onClick={handleOpenModal}>
            과제 추가하기
            <img src={PlusIcon} alt="Plus Icon" />
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
          {data.map((item: ILecture) => (
            <tr key={item.lectureName}>
              <td>{item.academicYear}</td>

              <td>{item.professor}</td>
              <td>{item.lectureName}</td>
            </tr>
          ))}
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
