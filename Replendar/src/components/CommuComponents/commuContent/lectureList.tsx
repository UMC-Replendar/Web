import styled from 'styled-components';
import { AddButton } from '../../../pages/OngoingTasks';
import PlusIcon from '../../../assets/images/PlusIcon.svg';
import { useState } from 'react';
import CommuModalContent from '../modalContents/commuModalContent';
import useGetData from '../../../hooks/useGetData';
import { ILecture } from '../../../types';

const LectureList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [academicYear, setacademicYear] = useState(1);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const { data } = useGetData(`/api/major/lectures/list/${academicYear}`);

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
          onChange={(e) => setacademicYear(Number(e.target.value))}
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
  z-index:;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
