import styled from 'styled-components';
import AskIcon from '../../assets/images/SettingsPageIcons/AskIcon.svg';
import PencilIcon from '../../assets/images/SettingsPageIcons/PencilIcon.svg';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useProfileStore } from '../../store/profileStore';
import useDebounce from '../../hooks/useDebounce';
import Swal from 'sweetalert2';

export default function AskPage() {
  const form = useRef<HTMLFormElement>(null);
  const { profile } = useProfileStore();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    `닉네임: ${profile?.nickname || '리플레넝'} \n문의내용: `
  );

  const debouncedMessage = useDebounce(message, 500);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !debouncedMessage) {
      alert('이메일과 문의 내용을 입력해주세요.');
      return;
    }

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: '문의 접수 완료',
          text: '문의가 성공적으로 접수되었습니다.',
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          setEmail('');
          setMessage(`닉네임: ${profile?.nickname || '리플레넝'} \n문의내용: `);
        });
      }
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      alert('이메일 전송 중 오류가 발생했습니다.');
      Swal.fire({
        icon: 'error',
        title: '이메일 전송에 실패했습니다',
        text: `이메일 전송 중 오류가 발생했습니다. ${error}`,
        timer: 2000,
        confirmButtonColor: '#25C26C',
      });
    }
  };

  return (
    <Container>
      <TitleContainer>
        <TitleIcon src={AskIcon} alt="문의하기 아이콘" />
        <TitleSpan>문의하기</TitleSpan>
      </TitleContainer>

      <FormContainer ref={form} onSubmit={handleSubmit}>
        <Label>
          서비스 이용 중 불편한 사항이 있으셨다면 문의사항을 남겨주세요
          <EditIcon src={PencilIcon} />
        </Label>
        <Textarea
          name="message"
          placeholder="문의사항을 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Label>
          답변 받을 이메일
          <EditIcon src={PencilIcon} />
        </Label>
        <Input
          type="email"
          name="from_name"
          placeholder="이메일을 입력하세요..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SubmitButton type="submit">문의하기</SubmitButton>
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

const FormContainer = styled.form`
  background: #fcf6f5;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
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
