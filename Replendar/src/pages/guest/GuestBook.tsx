import { useState } from 'react';
import { styled } from 'styled-components';
import Characters from '../../assets/images/SideBarIcons/Characters.svg';
import { axiosInstance } from '../../apis/axios-instance';
import { useNavigate } from 'react-router-dom';
const GuestBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: '',
    name: '',
    teamName: '',
    teamPart: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    navigate('/guestlist');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.nickname ||
      !formData.name ||
      !formData.teamName ||
      !formData.teamPart ||
      !formData.content
    ) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/guestbook', formData);
      alert('제출이 완료되었습니다! 캐릭터 누르면 조회가 가능해요');
      setFormData({
        nickname: '',
        name: '',
        teamName: '',
        teamPart: '',
        content: '',
      }); // 폼 초기화
    } catch (error) {
      console.error('제출 실패:', error);
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <CharacterImg2
        onClick={handleNavigate}
        src={Characters}
        alt="캐릭터 이미지"
      />
      <Form onSubmit={handleSubmit}>
        <Title>데모데이 과제</Title>

        <Field>
          <Label>닉네임 *</Label>
          <Input
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label>이름 *</Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label>소속 팀명 *</Label>
          <Input
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label>소속 파트 *</Label>
          <Input
            name="teamPart"
            value={formData.teamPart}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label>방명록 작성 *</Label>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </Field>
        <ButtonWrapper>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? '제출 중...' : '과제 완료'}
          </SubmitButton>
        </ButtonWrapper>
      </Form>

      <CharacterImg
        onClick={handleNavigate}
        src={Characters}
        alt="캐릭터 이미지"
      />
    </Container>
  );
};

export default GuestBook;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 73px;
  width: 1100px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  font-family: Pretendard;
  line-height: 170%;
  color: black;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 33px;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 140%;
  color: black;
`;

const Input = styled.input`
  border-radius: 10px;
  background: #e8e8e8;
  padding: 10px;
  font-size: 18px;
  border: none;
  width: 100%;
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  background: #e8e8e8;
  padding: 10px;
  font-size: 18px;
  border: none;
  width: 100%;
  height: 120px;
  resize: none;
`;

const SubmitButton = styled.button`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;

  gap: 8px;
  background: white;
  color: black;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 150px;
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const CharacterImg = styled.img`
  width: 300px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  cursor: pointer;
`;

const CharacterImg2 = styled.img`
  width: 300px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: scaleX(-1);
  cursor: pointer;
`;
