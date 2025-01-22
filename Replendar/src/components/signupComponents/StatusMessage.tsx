import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
  font-size: 23px;
`;

const MessageInput = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 18px;
  outline: none;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #25c26c;
  }

  &::placeholder {
    color: #ccc;
    font-style: italic;
  }
`;

interface CharCounterProps {
  $color: string;
}

const CharCounter = styled.p<CharCounterProps>`
  font-size: 12px;
  text-align: right;
  color: ${(props) => props.$color};
  margin-top: 5px;
`;

const StatusMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const maxLength: number = 40;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setMessage(e.target.value);
    }
  };

  return (
    <Container>
      <Label>상태 메시지 설정</Label>
      <MessageInput
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="상태 메시지를 입력하세요."
      />
      <CharCounter $color={message.length === maxLength ? 'red' : '#25C26C'}>
        ({message.length}/{maxLength}자)
      </CharCounter>
    </Container>
  );
};

export default StatusMessage;
