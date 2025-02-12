import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchIcon from '../../../assets/images/search.svg';
import useGetData from '../../../hooks/useGetData';
import { ProfileImage } from '../commuIcons';
import { sendFriendRequest } from '../../../apis/commuApi';
import { useMutation } from '@tanstack/react-query';
import { FriendRegisterSkeleton } from '../../skeleton';
import Swal from 'sweetalert2';
import useAuthStore from '../../../store/authStore';

const friendRegister = () => {
  const [mq, setMq] = useState('');
  const { nickname } = useAuthStore();
  const [searchNickname, setSearchNickname] = useState('');

  //친구등록검색api호출
  const { data, isLoading } = useGetData(
    mq ? `/api/friends/search?nickname=${mq}` : ''
  );

  const hasData = Array.isArray(data) && data.length > 0;
  const friendData = hasData ? data[0] : null;

  //친구요청api호출
  const sendFriendRequestMutation = useMutation({
    mutationFn: (friendId: number) => sendFriendRequest(friendId),
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        text: `'${mq}' 님에게 친구 요청을 보냈습니다.`,
        timer: 2000,
        showConfirmButton: false,
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'success',
        title: '친구 요청을 보내는 데 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

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

    if (!trimmedNickname || mq === trimmedNickname) return;
    setMq(searchNickname);
  };

  return (
    <Container>
      <InputContainer>
        <CustomSearchIcon src={SearchIcon} alt="searchIcon" />
        <SearchInput
          value={searchNickname}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder="등록할 친구의 이름을 입력해주세요"
        ></SearchInput>
        <SearchBtn id="searchBtn" onClick={handleSearch}>
          검색
        </SearchBtn>
      </InputContainer>
      <EmptyDiv>
        {!hasData && !!mq && !isLoading && (
          <FlexDiv width="900px">존재하지 않는 사용자입니다.</FlexDiv>
        )}
        {!!mq && isLoading && <FriendRegisterSkeleton />}

        {hasData ? (
          <>
            <ProfileContainer>
              <ProfileImage />
              <FlexAlignStart>
                <NoMarginH3>{friendData.nickname}</NoMarginH3>
                <NoMarginH3>{friendData.name}</NoMarginH3>
                <NoMarginP>{friendData.statusMessage}</NoMarginP>
              </FlexAlignStart>
            </ProfileContainer>
            <FlexDiv>
              <SearchBtn
                width={'134px'}
                onClick={() =>
                  sendFriendRequestMutation.mutate(friendData.friendId)
                }
              >
                친구요청
              </SearchBtn>
            </FlexDiv>
          </>
        ) : null}
      </EmptyDiv>
    </Container>
  );
};

export default friendRegister;

const Container = styled.div`
  width: 100%;
  padding: 20px;
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
  font-size: 20px;
  color: red;
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
const CustomSearchIcon = styled.img`
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
    &:focus {
    outline: none;  
    
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
