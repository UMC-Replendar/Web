import styled from 'styled-components';
import { useState } from 'react';

const Friend1 = () => {
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(); // 엔터 키를 누르면 검색 함수 실행
    }
  };

  const handleSearch = () => {
    if (nickname.trim() === '') {
      alert('친구 이름을 입력해주세요!');
    } else {
      alert(`"${nickname}" 친구를 검색합니다!`);
      // 여기에 검색 로직 추가
    }
  };
  return (
    <InputContainer>
      <SearchIcon src="src/assets/images/search.svg" alt="Search Icon" />
      <SearchInput
        value={nickname}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="등록할 친구의 이름을 입력해주세요"
      />
      <SearchBtn onClick={handleSearch}>검색</SearchBtn>
    </InputContainer>
  );
};

export default Friend1;
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1; /* 인풋보다 위에 배치 */
`;

const SearchInput = styled.input`
  width: 900px;
  padding-left: 50px; /* 이미지가 겹치지 않도록 왼쪽 패딩 추가 */
  height: 40px;
  border-radius: 50px;
  border: 1px solid rgba(232, 232, 232, 1);
  font-size: 12px;
  &:focus {
    outline: none; /* 기본 focus outline을 제거 */
`;
const SearchBtn = styled.button`
  color: rgba(102, 102, 102, 1);
  border-radius: 15px;

  border: 1px solid #ccc;
  margin-left: 40px;
  background-color: white;
  height: 40px;
  width: 60px;
  font-size: 12px;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 20px;
  align-items: center;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;
