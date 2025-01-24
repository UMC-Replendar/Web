import { useState } from 'react';
import styled from 'styled-components';
import ThemeSettingIcon from '../../assets/images/SettingsPageIcons/ThemeSettingIcon.png';

export default function ThemeSettingPage() {
  const [selectedTheme, setSelectedTheme] = useState('기본테마');

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={ThemeSettingIcon} />
        <TitleSpan>테마설정</TitleSpan>
      </TitleContainer>
      <OptionContainer>
        <SelectButton
          selected={selectedTheme === '기본테마'}
          onClick={() => handleThemeSelect('기본테마')}
        />
        <ThemeOption selected={selectedTheme === '기본테마'}>
          <ThemeText>기본테마</ThemeText>
        </ThemeOption>
      </OptionContainer>

      <OptionContainer>
        <SelectButton
          selected={selectedTheme === '테마 1'}
          onClick={() => handleThemeSelect('테마 1')}
        />
        <ThemeOption selected={selectedTheme === '테마 1'}>
          <ThemeText>테마 1</ThemeText>
        </ThemeOption>
      </OptionContainer>

      <OptionContainer>
        <SelectButton
          selected={selectedTheme === '테마2'}
          onClick={() => handleThemeSelect('테마2')}
        />
        <ThemeOption selected={selectedTheme === '테마2'}>
          <ThemeText>테마2</ThemeText>
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
  line-height: 140%; /* 39.2px */
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

const ThemeOption = styled.div<{ selected: boolean }>`
  padding: 20px;
  width: 355px;
  height: 199.476px;
  border-radius: 10px;
  background: #fcf6f5;
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
