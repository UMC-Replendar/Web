import styled from 'styled-components';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 60px;
  cursor: pointer;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background: linear-gradient(270deg, #1cb6d9 0%, #7cd7eb 100%);
  }

  &:checked + span:before {
    transform: translateX(60px);
  }
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #868686;
  transition: 0.4s;
  border-radius: 50px;

  &:before {
    position: absolute;
    content: '';
    height: 50px;
    width: 50px;
    left: 5px;
    top: 5px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

function ToggleSwitch({
  isOn,
  onToggle,
}: ToggleSwitchProps): React.ReactElement {
  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleInput type="checkbox" checked={isOn} onChange={onToggle} />
        <Slider />
      </ToggleLabel>
    </ToggleContainer>
  );
}

export default ToggleSwitch;
