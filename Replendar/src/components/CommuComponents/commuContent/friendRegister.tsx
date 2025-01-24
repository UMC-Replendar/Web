import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const friendRegister = () => {
  const [searchParams, setSearchParams] = useSearchParams({ mq: '' });

  const navigate = useNavigate();
  const mq = searchParams.get('mq');
  const [nickname, setNickname] = useState('');

  const [searchResult, setSearchResult] = useState<{
    id: number;
    nickname: string;
    profileImage: string;
    name: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    setSearchParams({ mq: '' });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    const trimmedNickname = nickname.trim();
    if (mq === trimmedNickname) return;
    navigate(`/community?mq=${trimmedNickname}`);

    if (trimmedNickname !== '') {
      const result = userData.find((user) => user.nickname === trimmedNickname);
      setSearchResult(result || null);
    } else {
      setSearchResult(null);
    }
  };
  return (
    <>
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
      <EmptyDiv>
        {mq && searchResult === null ? (
          <FlexDiv width="900px">검색 결과 '{nickname}'가 없습니다</FlexDiv>
        ) : searchResult ? (
          <>
            <ProfileContainer>
              <img
                src={searchResult.profileImage}
                alt={`${searchResult.nickname} 프로필`}
              />
              <FlexAlignStart>
                <NoMarginH3>{searchResult.nickname}</NoMarginH3>
                <NoMarginH3>{searchResult.name}</NoMarginH3>
                <NoMarginP>{searchResult.message}</NoMarginP>
              </FlexAlignStart>
            </ProfileContainer>
            <FlexDiv>
              <SearchBtn width={'90px'}>친구요청</SearchBtn>
            </FlexDiv>
          </>
        ) : null}
      </EmptyDiv>
    </>
  );
};

//임시데이터
const userData = [
  {
    id: 1,
    nickname: 'ㅁ',
    profileImage: 'src/assets/images/프로필 사진.png',
    name: '홍길동',
    message: '야호',
  },
  {
    id: 2,
    nickname: 'ㅇ',
    profileImage: 'src/assets/images/프로필 사진2.png',
    name: '김철수',
    message: '졸리다',
  },
];

export default friendRegister;
const FlexAlignStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const NoMarginH3 = styled.h3`
  margin: 0px;
`;
const NoMarginP = styled.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 13px;
`;

const FlexDiv = styled.div<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: ${(props) => props.width || 'auto'};
`;
const ProfileContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 900px;
  margin-left: 20px;
  display: flex;
  gap: 40px;
  padding: 20px;
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1; /* 인풋보다 위에 배치 */
  margin-left: 20px;
`;

const SearchInput = styled.input`
  width: 900px;
  padding-left: 50px; /* 이미지가 겹치지 않도록 왼쪽 패딩 추가 */
  margin-left: 20px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid rgba(232, 232, 232, 1);
  font-size: 12px;
  &:focus {
    outline: none;
  } /* 기본 focus outline을 제거 */
`;
const SearchBtn = styled.button<{ width?: string }>`
  color: rgba(102, 102, 102, 1);
  border-radius: 15px;

  border: 1px solid #ccc;
  margin-left: 40px;
  background-color: white;
  height: 40px;
  width: ${(props) => props.width || '60px'};
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

const EmptyDiv = styled.div`
  width: 100%;
  height: 197px;
  display: flex;
  justify-content: start;
  align-items: start;
`;
