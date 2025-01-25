import { Register, Registered } from '../commuIcons';
import styled from 'styled-components';
import { useState } from 'react';

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

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 12px;
`;

const RightAlignedItem = styled.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DepartmentList: React.FC<{ expanded: string }> = ({ expanded }) => {
  const visibleItems = expanded === 'true' ? 10 : 5;
  const [registerStates, setRegisterStates] = useState<boolean[]>(
    Array(data.length).fill(false)
  );
  const toggleRegister = (index: number) => {
    setRegisterStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };
  return (
    <Container>
      {data.slice(0, visibleItems).map((item, index) => (
        <FlexDiv key={index}>
          <CenterDiv>{item.time}</CenterDiv>
          <CenterDiv>{item.message}</CenterDiv>
          <RightAlignedItem>
            {registerStates[index] ? (
              <Registered />
            ) : (
              <Register onClick={() => toggleRegister(index)} />
            )}
          </RightAlignedItem>
        </FlexDiv>
      ))}
    </Container>
  );
};

export default DepartmentList;

//임시데이터
const data = [
  { time: '10분 전', message: '홍길동님이 자바스크립트 과제를 완료하였습니다' },
  { time: '15분 전', message: '이순신님이 CSS 스타일링 과제를 완료하였습니다' },
  {
    time: '20분 전',
    message: '김유신님이 React 프로젝트 과제를 완료하였습니다',
  },
  { time: '25분 전', message: '박문수님이 HTML 마크업 과제를 완료하였습니다' },
  { time: '30분 전', message: '정약용님이 API 호출 과제를 완료하였습니다' },
  { time: '35분 전', message: '강감찬님이 배열 메소드 과제를 완료하였습니다' },
  { time: '40분 전', message: '윤봉길님이 DOM 조작 과제를 완료하였습니다' },
  { time: '45분 전', message: '홍정호님이 웹 접근성 과제를 완료하였습니다' },
  { time: '50분 전', message: '임꺽정님이 CSS Flexbox 과제를 완료하였습니다' },
  { time: '35분 전', message: '강감찬님이 배열 메소드 과제를 완료하였습니다' },
  { time: '40분 전', message: '윤봉길님이 DOM 조작 과제를 완료하였습니다' },
  { time: '45분 전', message: '홍정호님이 웹 접근성 과제를 완료하였습니다' },
  { time: '50분 전', message: '임꺽정님이 CSS Flexbox 과제를 완료하였습니다' },
  { time: '55분 전', message: '유관순님이 비동기 처리 과제를 완료하였습니다' },
  { time: '55분 전', message: '유관순님이 비동기 처리 과제를 완료하였습니다' },
];
