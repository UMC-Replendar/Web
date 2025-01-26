import styled from 'styled-components';
import ThemeSettingIcon from '../../assets/images/SettingsPageIcons/ThemeSettingIcon.png';
import { useThemeStore, themeColors } from '../../store/ThemeStore';

export default function ThemeSettingPage() {
  const { selectedTheme, setTheme } = useThemeStore();

  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={ThemeSettingIcon} />
        <TitleSpan>테마설정</TitleSpan>
      </TitleContainer>

      {Object.keys(themeColors).map((theme) => (
        <OptionContainer key={theme}>
          <SelectButton
            selected={selectedTheme === theme}
            onClick={() => setTheme(theme)}
          />
          <ThemeOption
            selected={selectedTheme === theme}
            style={{ backgroundColor: themeColors[theme].main }}
          >
            <ThemeText>{theme}</ThemeText>
          </ThemeOption>
        </OptionContainer>
      ))}
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  padding: 20px;
  margin-top: 50px;
  margin-left: 79px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TitleIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const TitleSpan = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;
`;

const SelectButton = styled.div<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.selected ? '#2BAE66' : '#E8E8E8')};
  background-color: ${(props) => (props.selected ? '#2BAE66' : '#E8E8E8')};
  cursor: pointer;
`;

const ThemeOption = styled.div<{ selected: boolean }>`
  padding: 20px;
  width: 355px;
  height: 199px;
  border-radius: 10px;
  background: #fcf6f5;
  box-shadow: ${(props) =>
    props.selected
      ? '0px 4px 15px rgba(0, 0, 0, 0.2)'
      : '0px 4px 10px rgba(0, 0, 0, 0.05)'};
`;

const ThemeText = styled.span`
  font-size: 18px;
  color: #333;
  text-align: center;
  display: block;
`;
