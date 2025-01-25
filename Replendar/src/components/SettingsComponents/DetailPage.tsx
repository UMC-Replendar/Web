import { Container, TitleContainer, TitleIcon, TitleSpan } from './AskPage';
import DetailIcon from '../../assets/images/SettingsPageIcons/DetailIcon.svg';
import styled from 'styled-components';

export default function DetailPage() {
  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={DetailIcon} />
        <TitleSpan>이용약관</TitleSpan>
      </TitleContainer>
      <DetailContainer></DetailContainer>
    </Container>
  );
}

const DetailContainer = styled.div`
  background: #fdf9f7;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1562px;
  height: 771px;
  background-color: #fcf6f5;
`;
