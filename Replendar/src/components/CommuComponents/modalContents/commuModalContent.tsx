import styled from 'styled-components';
import { PlusFriendsButton } from '../../../modal/AddTaskModal';
import GrayPlusIcon from '../../../assets/images/GrayPlusIcon.svg';
import { useState, useEffect } from 'react';

const CommuModalContent: React.FC = () => {
  const [placeholderDate, setPlaceholderDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setPlaceholderDate(`${year}-${month}-${day}`);
  }, []);

  return (
    <>
      {' '}
      <TitleH1>학과 과제 추가하기</TitleH1>
      <FlexGroup>
        <Label>과제명</Label>
        <TransparentInput placeholder="과제 이름을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>강좌명</Label>
        <TransparentInput placeholder="강좌 이름을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        {' '}
        <Label>교수명</Label>
        <TransparentInput placeholder="교수님 성함을 입력하세요"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>학년</Label>
        <TransparentInput placeholder="2학년"></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        <Label>과제마감일</Label>
        <TransparentInput
          width="100px"
          type="date"
          placeholder={placeholderDate}
        ></TransparentInput>{' '}
        <TransparentInput
          width="100px"
          type="time"
          placeholder="23:55"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></TransparentInput>
      </FlexGroup>
      <FlexGroup>
        {' '}
        <Label>공유할 친구</Label>{' '}
        <PlusFriendsButton>
          <img src={GrayPlusIcon} alt="Gray Plus Icon" />
          추가
        </PlusFriendsButton>
      </FlexGroup>
      <FlexGroup>
        <Label>메모</Label>
        <Memo></Memo>
      </FlexGroup>
      <FlexEndGroup>
        {' '}
        <PlusFriendsButton>일정 추가하기</PlusFriendsButton>
      </FlexEndGroup>
    </>
  );
};

export default CommuModalContent;

const Memo = styled.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`;
const TitleH1 = styled.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const TransparentInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: ${(props) => props.width || '300px'}
  color: rgba(102, 102, 102, 1);

  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  line-height: 26.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Label = styled.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
const FlexGroup = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`;
const FlexEndGroup = styled.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`;
