import styled from 'styled-components';
type BlueBtnProps = {
  children: React.ReactNode;
  bgColor?: string; // children을 받을 수 있도록 ReactNode 사용
  onClick?: () => void;
};
const BlueButton: React.FC<BlueBtnProps> = ({ children, bgColor, onClick }) => {
  return (
    <BlueBtn bgColor={bgColor} onClick={onClick}>
      {children}
    </BlueBtn>
  );
};

export default BlueButton;

const BlueBtn = styled.button<{ bgColor?: string }>`
  border-radius: 50px;
  background-color: ${({ bgColor }) => bgColor || '#73d5ff'};
  color: white;
  border: none;
  width: 106px;
  height: 27px;
  font-size: 12px;
`;
