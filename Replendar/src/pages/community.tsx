import styled from 'styled-components';
import MoreIcon from '../components/CommuComponents/MoreIcon';
import { useState } from 'react';
import CloseIcon from '../components/CommuComponents/CloseIcon';

const StyledDiv = styled.div<{ expanded: boolean }>`
  background: rgba(252, 246, 245, 1);
  width: 100%;
  height: ${(props) => (props.expanded ? '500px' : '250px')};
  border-radius: 20px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    width: 100%; /* 화면이 작아지면 100%로 변경 */
  }
  @media (max-width: 1200px) {
    width: 100%; /* 개별 요소가 화면 크기에 따라 변화 */
  }

  @media (max-width: 480px) {
    width: 80%; /* 모바일에서는 80% */
  }
`;

const CustomBtn = styled.button`
  background: rgba(243, 243, 243, 1);
  width: 100px;
  height: 30px;
  border-radius: 50px;\
border:none;
font-size:10px;
padding:0px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

const Gaph2 = styled.h2`
  padding: 10px 0px;
  margin: 0px;
`;
const SpaceBtwDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Community = () => {
  const [menuState, setMenuState] = useState({
    activeMenu: '친구등록',
    expanded: false,
  });

  const handleMenuClick = (menu: string) => {
    setMenuState({ activeMenu: menu, expanded: false });
  };

  const handleExpandClick = () => {
    setMenuState((prevState) => ({
      ...prevState,
      expanded: !prevState.expanded,
    }));
    console.log(menuState);
  };

  //임시데이터
  const data1 = [
    '친구 등록 내용 1',
    '친구 등록 내용 2',
    '친구 등록 내용 3',
    '친구 등록 내용 4',
    '친구 등록 내용 5',
    '친구 등록 내용 6',
    '친구 등록 내용 7',
    '친구 등록 내용 8',
    '친구 등록 내용 9',
    '친구 등록 내용 10',
  ];
  const data2 = [
    '친구 목록 내용 1',
    '친구 목록 내용 2',
    '친구 목록 내용 3',
    '친구 목록 내용 4',
    '친구 목록 내용 5',
    '친구 목록 내용 6',
    '친구 등록 내용 7',
    '친구 등록 내용 8',
    '친구 등록 내용 9',
    '친구 등록 내용 10',
  ];
  const data3 = [
    '친data3 1',
    '친구 목록 내용 2',
    '친구 목록 내용 3',
    '친구 목록 내용 4',
    '친구 목록 내용 5',
    '친구 목록 내용 6',
    '친구 등록 내용 7',
    '친구 등록 내용 8',
    '친구 등록 내용 9',
    '친구 등록 내용 10',
  ];
  const data4 = [
    ' ㅇㅁㅅㅁ ㅇㅁdaata3 1',
    '친구 목록 내용 2',
    '친구 목록 내용 3',
    '친구 목록 내용 4',
    '친구 목록 내용 5',
    '친구 목록 내용 6',
    '친구 등록 내용 7',
    '친구 등록 내용 8',
    '친구 등록 내용 9',
    '친구 등록 내용 10',
  ];

  interface MenuContentProps {
    expanded: boolean;
    data: string[];
  }

  const MenuContent: React.FC<MenuContentProps> = ({ expanded, data }) => {
    return expanded
      ? data.map((item, index) => <div key={index}>{item}</div>)
      : data.slice(0, 3).map((item, index) => <div key={index}>{item}</div>);
  };
  let dataToShow;
  switch (menuState.activeMenu) {
    case '친구등록':
      dataToShow = data1;
      break;
    case '친구목록':
      dataToShow = data2;
      break;
    case '친구소식':
      dataToShow = data3;
      break;
    case '친구관리':
      dataToShow = data4;
      break;
    default:
      dataToShow = data1;
  }
  return (
    <Container>
      <Gaph2>친구</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          <CustomBtn onClick={() => handleMenuClick('친구등록')}>
            친구 등록
          </CustomBtn>
          <CustomBtn onClick={() => handleMenuClick('친구목록')}>
            친구 목록
          </CustomBtn>
          <CustomBtn onClick={() => handleMenuClick('친구소식')}>
            친구 소식
          </CustomBtn>
          <CustomBtn onClick={() => handleMenuClick('친구관리')}>
            친구 관리
          </CustomBtn>
        </BtnContainer>

        {menuState.expanded ? (
          <CloseIcon onClick={handleExpandClick} />
        ) : (
          <MoreIcon onClick={handleExpandClick} />
        )}
      </SpaceBtwDiv>
      <StyledDiv expanded={menuState.expanded}>
        <MenuContent expanded={menuState.expanded} data={dataToShow} />
      </StyledDiv>
      <Gaph2>학과</Gaph2>
      <SpaceBtwDiv>
        <BtnContainer>
          <CustomBtn>학과 소식</CustomBtn>
          <CustomBtn>친구 목록</CustomBtn>
          <CustomBtn>친구 소식</CustomBtn>
          <CustomBtn>친구 관리</CustomBtn>
        </BtnContainer>
        <MoreIcon></MoreIcon>
      </SpaceBtwDiv>
      <StyledDiv expanded={menuState.expanded}></StyledDiv>
    </Container>
  );
};

export default Community;
