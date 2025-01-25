import styled from 'styled-components';

interface BlueBtnProps {
  status?: '등록됨' | '내 일정에 등록' | '완료' | '미완료';
  onClick?: () => void;
  children: React.ReactNode;
}

const BlueButton: React.FC<BlueBtnProps> = ({
  children,
  status = '내 일정에 등록',
  onClick,
}) => {
  return (
    <BlueBtn status={status} onClick={onClick}>
      {children}
    </BlueBtn>
  );
};

export default BlueButton;

const BlueBtn = styled.button<{
  status: '등록됨' | '내 일정에 등록' | '완료' | '미완료';
}>`
  border-radius: 50px;
  background-color: ${({ status }) => {
    switch (status) {
      case '등록됨':
        return '#BABABA';
      case '내 일정에 등록':
        return '#73D5FF';
      case '완료':
        return '#73D5FF';
      case '미완료':
        return '#BABABA';
      default:
        return '#BABABA';
    }
  }};
  color: white;
  border: none;
  width: 106px;
  height: 27px;
  font-size: 12px;
  cursor: pointer;
`;
