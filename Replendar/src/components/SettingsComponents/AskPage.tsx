import styled from 'styled-components';
import AskIcon from '../../assets/images/SettingsPageIcons/AskIcon.svg';
import PencilIcon from '../../assets/images/SettingsPageIcons/PencilIcon.svg';

export default function AskPage() {
  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={AskIcon} alt="문의하기 아이콘" />
        <TitleSpan>문의하기</TitleSpan>
      </TitleContainer>

      <FormContainer>
        <Label>
          서비스 이용 중 불편한 사항이 있으셨다면 문의사항을 남겨주세요
          <EditIcon src={PencilIcon} />
        </Label>
        <Textarea placeholder="문의사항을 입력하세요..." />

        <ButtonContainer>
          <Button>수정</Button>
          <Button>완료</Button>
        </ButtonContainer>

        <Label>
          답변 받을 이메일
          <EditIcon src={PencilIcon} />
        </Label>
        <Input type="email" placeholder="이메일을 입력하세요..." />

        <SubmitButton>문의하기</SubmitButton>
      </FormContainer>
    </Container>
  );
}

// 스타일 정의

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  margin-top: 30px;
  margin-left: 79px;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TitleIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const TitleSpan = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
`;

const FormContainer = styled.div`
  background: #fcf6f5;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  max-width: 1562px;
  height: 771px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EditIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 295px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #2bae66;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #2bae66;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background: #f0f0f0;
  }
`;
