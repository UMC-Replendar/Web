import styled from 'styled-components';
import ThemeSettingIcon from '../../assets/images/SettingsPageIcons/ThemeSettingIcon.png';
import useAuthStore from '../../store/authStore'; // ✅ useAuthStore 사용
import GreenTheme from '../../assets/images/SettingsPageIcons/GreenTheme.svg';
import BlueTheme from '../../assets/images/SettingsPageIcons/BlueTheme.svg';
import PurpleTheme from '../../assets/images/SettingsPageIcons/PurpleTheme.svg';

export default function ThemeSettingPage() {
  const { theme, setTheme } = useAuthStore(); // ✅ useAuthStore에서 theme 가져오기

  console.log(theme);

  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={ThemeSettingIcon} />
        <TitleSpan>테마설정</TitleSpan>
      </TitleContainer>

      <OptionContainer>
        <SelectButton
          selected={theme === 'DEFAULT'}
          onClick={() => setTheme('DEFAULT')} // ✅ 서버에 반영되도록 수정
        />
        <ThemeOption src={GreenTheme} selected={theme === 'DEFAULT'}>
          <ThemeText>기본 테마</ThemeText>
        </ThemeOption>
      </OptionContainer>

      <OptionContainer>
        <SelectButton
          selected={theme === 'THEME1'}
          onClick={() => setTheme('THEME1')} // ✅ 서버에 반영되도록 수정
        />
        <ThemeOption src={BlueTheme} selected={theme === 'THEME1'}>
          <ThemeText>파랑 테마</ThemeText>
        </ThemeOption>
      </OptionContainer>

      <OptionContainer>
        <SelectButton
          selected={theme === 'THEME2'}
          onClick={() => setTheme('THEME2')} // ✅ 서버에 반영되도록 수정
        />
        <ThemeOption src={PurpleTheme} selected={theme === 'THEME2'}>
          <ThemeText>보라 테마</ThemeText>
        </ThemeOption>
      </OptionContainer>
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
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
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
  border: 2px solid ${(props) => (props.selected ? '#2bae66' : '#E8E8E8')};
  background-color: ${(props) => (props.selected ? '#2bae66' : '#E8E8E8')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #2bae66;
  }
`;

const ThemeOption = styled.div<{ selected: boolean; src: string }>`
  padding: 20px;
  width: 355px;
  height: 199.476px;
  border-radius: 10px;
  background: #fcf6f5;
  background-image: url(${(props) => props.src});
  background-position: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.selected ? 'box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2)' : null}
`;

const ThemeText = styled.span`
  font-size: 18px;
  color: #333;
  text-align: center;
  display: block;
`;
