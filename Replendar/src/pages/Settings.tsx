import styled from 'styled-components';
import Setting from '../assets/images/Setting.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import axios from 'axios';
import { useProfileStore } from '../store/profileStore';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useThemeStore, themeBackground } from '../store/useThemeStore';

function Settings() {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  const { token } = useAuthStore();
  const { profile, fetchProfile } = useProfileStore();

  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];

  useEffect(() => {
    // profile이 없을 때만 API 호출
    if (!profile) {
      console.log('프로필 데이터가 없음, fetchProfile 실행');
      fetchProfile(navigate);
    } else {
      console.log('기존 프로필 데이터 사용');
    }
  }, [profile]);

  const LogoutClicked = async () => {
    const result = await Swal.fire({
      icon: 'warning',
      title: '정말로 로그아웃 하시겠습니까?',
      confirmButtonColor: '#25C26C',
      showCancelButton: true,
      confirmButtonText: '네, 로그아웃 합니다.',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      // ✅ 2초 대기
      Swal.fire({
        title: '잠시만 기다려 주세요...',
        text: '로그아웃을 처리 중입니다.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(async () => {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/user/logout`,
            {},
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          if (response.data.isSuccess) {
            Swal.fire({
              icon: 'success',
              title: '로그아웃 되었습니다!',
              text: '잠시 후 로그인 화면으로 이동합니다.',
              timer: 2000,
              showConfirmButton: false,
            });

            // ✅ 2초 후 로그인 페이지로 이동
            setTimeout(() => {
              clearAuth();
              navigate('/login');
            }, 2000);
          } else {
            throw new Error(response.data.message || '로그아웃 실패');
          }
        } catch (error) {
          console.error('로그아웃 실패:', error);
          Swal.fire({
            icon: 'error',
            title: '로그아웃 실패',
            text: '잠시 후 다시 시도해 주세요.',
          });
        }
      }, 2000);
    }
  };

  const handleWithdraw = async () => {
    const result = await Swal.fire({
      icon: 'warning',
      title: '정말로 회원 탈퇴를 진행하시겠습니까?',
      confirmButtonColor: '#25C26C',

      text: '이 작업은 되돌릴 수 없습니다.',
      showCancelButton: true,
      confirmButtonText: '네, 탈퇴합니다',
      cancelButtonText: '취소',
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: '처리 중...',
        text: '회원 탈퇴를 진행하고 있습니다.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(async () => {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/user/withdraw`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          if (response.data.isSuccess) {
            Swal.fire({
              icon: 'success',
              title: '회원탈퇴가 완료되었습니다.',
              text: '잠시 후 로그인 화면으로 이동합니다.',
              timer: 2000,
              showConfirmButton: false,
            });

            setTimeout(() => {
              clearAuth();
              navigate('/login');
            }, 2000);
          } else {
            throw new Error(response.data.message || '회원 탈퇴 실패');
          }
        } catch (error) {
          console.error('회원 탈퇴 실패:', error);
          Swal.fire({
            icon: 'error',
            title: '회원 탈퇴 실패',
            text: '잠시 후 다시 시도해주세요.',
          });
        }
      }, 2000);
    }
  };

  return (
    <SettingsWrapper>
      <TitleContainer>
        <SettingsIcon src={Setting} />
        <SettingsTitle>환경설정</SettingsTitle>
      </TitleContainer>
      <ComponentContainer background={backgroundColor}>
        <SectionContainer>
          <SectionTitle>계정</SectionTitle>
          <FirstSectionLink>
            <IdContainer>아이디</IdContainer>
            <NicknameContainer>
              {profile?.nickname || '리플레닝'}
            </NicknameContainer>
          </FirstSectionLink>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>앱 설정</SectionTitle>
          <SectionLink>
            <Link to={'/settings/theme'}>테마 설정</Link>
          </SectionLink>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>이용 안내</SectionTitle>
          <Link to={'/settings/ask'}>
            <SectionLink>문의하기</SectionLink>
          </Link>
          <Link to={'/settings/notify'}>
            <SectionLink>공지사항</SectionLink>
          </Link>
          <Link to={'/settings/detail'}>
            <SectionLink>서비스 이용약관</SectionLink>
          </Link>
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>기타</SectionTitle>
          <SectionLink onClick={handleWithdraw}>회원 탈퇴</SectionLink>
          <SectionLink onClick={LogoutClicked}>로그아웃</SectionLink>
        </SectionContainer>
      </ComponentContainer>
    </SettingsWrapper>
  );
}

export default Settings;

const SettingsWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 100px;
  margin-top: 70px;
  /* width: 100%; */
  gap: 50px;
`;

const ComponentContainer = styled.div<{ background: string }>`
  display: flex;
  width: 431px;
  height: 755px;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  flex-shrink: 0;
  padding: 65px 30px 0px 30px;
  border-radius: 20px;
  background: ${({ background }) => background};

  /* bg 1 */
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
`;

const SettingsIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const SettingsTitle = styled.span`
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 100%;
  }
`;

const SectionTitle = styled.div`
  color: var(--, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const FirstSectionLink = styled.div`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const SectionLink = styled.span`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;

const NicknameContainer = styled.div`
  color: rgba(102, 102, 102, 0.7);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const IdContainer = styled.div`
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;
