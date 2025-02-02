import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
//import useGetData from '../../../hooks/useGetData';
//import axios from 'axios';

const friendRegister = () => {
  const [searchParams, setSearchParams] = useSearchParams({ nickname: '' });

  const navigate = useNavigate();
  const nickname = searchParams.get('nickname');
  const [searchNickname, setSearchNickname] = useState('');

  const [searchResult, setSearchResult] = useState<{
    id: number;
    nickname: string;
    profileImage: string;
    name: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    setSearchParams({ nickname: '' });
  }, []);

  //로그인토큰얻기
  /*const getToken = async () => {
    try {
      const response = await axios.post(
        'https://api.replendar.site/api/user/login',
        {
          email: '1',
        }
      );
      localStorage.setItem('token', response.data.result.accessToken);
      console.log(
        '로그인 성공! 얻은 JWT토큰: ',
        response.data.result.accessToken
      );
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };*/

  //검색api호출
  /*
  const register = async () => {
    const token = localStorage.getItem('token');
    console.log('보내는 token: ', token);
    try {
      const response = await axios.post(
        'https://api.replendar.site/api/user/login',
        {
          email: '1',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('검색api: ', response.data.result);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };*/
  /*const {
    data: data1,
    isLoading,
    isError,
  } = useGetData(
    `https://api.replendar.site/api/friends/search?nickname=${debouncedNickname}`
  );
  console.log(movies);
  if (isLoading) {
    return <div>스켈레톤 이미지</div>;
  }

  if (isError) {
    return <h1>에러</h1>;
  }*/

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchNickname(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    const trimmedNickname = searchNickname.trim();
    if (nickname === trimmedNickname) return;

    navigate(`/community?nickname=${trimmedNickname}`);

    if (trimmedNickname !== '') {
      const result = userData.find((user) => user.nickname === trimmedNickname);
      setSearchResult(result || null);
    } else {
      setSearchResult(null);
    }
  };

  return (
    <Container>
      <InputContainer>
        <SearchIcon src="src/assets/images/search.svg" alt="Search Icon" />
        <SearchInput
          value={searchNickname}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="등록할 친구의 이름을 입력해주세요"
        ></SearchInput>
        <SearchBtn onClick={handleSearch}>검색</SearchBtn>
      </InputContainer>
      <EmptyDiv>
        {searchResult === null && nickname && (
          <FlexDiv width="900px">
            검색 결과 '{searchNickname}'가 없습니다
          </FlexDiv>
        )}

        {searchResult ? (
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
              <SearchBtn width={'134px'}>친구요청</SearchBtn>
            </FlexDiv>
          </>
        ) : null}
      </EmptyDiv>
    </Container>
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

const Container = styled.div`
  width: 100%;

  height: 380px;
`;

const FlexAlignStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const NoMarginH3 = styled.h3`
  margin: 0px;
  font-size: 19px;
`;
const NoMarginP = styled.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 16px;
`;

const FlexDiv = styled.div<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: ${(props) => props.width || 'auto'};
`;
const ProfileContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 75%;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  margin-left: 40px;
`;

const SearchInput = styled.input`
  width: 75%;
  padding-left: 50px;
  margin-left: 40px;
  height: 100%;
  border-radius: 50px;
  border: 1px solid rgba(232, 232, 232, 1);
  font-size: 19px;
  &:focus {
    outline: none;
  }
`;
const SearchBtn = styled.button<{ width?: string }>`
  color: rgba(102, 102, 102, 1);
  border-radius: 20px;

  border: 1px solid #e8e8e8;
  margin-left: 40px;
  background-color: white;
  height: 60px;
  width: ${(props) => props.width || '97px'};
  font-size: 19px;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 30px 0px;

  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`;

const EmptyDiv = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 10px;
`;
