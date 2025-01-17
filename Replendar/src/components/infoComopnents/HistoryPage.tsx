import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
`;

const Box = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Menu = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#3b8746' : '#f0f0f0')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.active ? '#3b8746' : '#e0e0e0')};
  }
`;

const HistoryPage: React.FC = () => {
  //React.FC는 해당 컴포넌트가 React 함수형 컴포넌트임을 나타냄
  const [activeMenu, setActiveMenu] = useState<string>('전체');

  const contentMap: Record<string, string> = {
    //Record<string, string>은 키(string)와 값(string)으로 구성된 객체임을 나타냄
    전체: '전체 소식',
    친구소식: '친구 소식',
    과제알림: '과제 알림',
    기타: '기타 내용',
  };

  return (
    <Container>
      <Wrapper>
        <Image src="src/assets/images/Pencil.svg" alt="X" />
        <Text>히스토리</Text>
      </Wrapper>
      <Menu>
        {['전체', '친구소식', '과제알림', '기타'].map((menu) => (
          <Button
            key={menu}
            active={activeMenu === menu}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </Button>
        ))}
      </Menu>
      <Box>{contentMap[activeMenu]}</Box>
    </Container>
  );
};

export default HistoryPage;
