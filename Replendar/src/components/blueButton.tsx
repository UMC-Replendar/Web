import styled from 'styled-components';

interface BlueBtnProps {
  status?: '등록됨' | '내 일정에 등록';
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

const BlueBtn = styled.button<{ status: '등록됨' | '내 일정에 등록' }>`
  border-radius: 50px;
  background-color: ${({ status }) =>
    status === '등록됨' ? '#BABABA' : '#73D5FF'};
  color: white;
  border: none;
  width: 106px;
  height: 27px;
  font-size: 12px;
`;
