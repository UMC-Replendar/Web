import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../../../apis/axios-instance';
import BlueButton from '../../blueButton';
import Plus from '../../../assets/images/PlusIcon.svg';
import { useThemeStore, themeBackground } from '../../../store/useThemeStore';
import useModalStore from '../../../store/modalStore';
import AddTaskModal from '../../../modal/AddTaskModal';
import Swal from 'sweetalert2';
import { respondToFriendRequest } from '../../../apis/commuApi';

const Title = styled.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  margin-bottom: 17px;
`;

const HistoryContainer = styled.div<{ background: string }>`
  width: 100%;
  height: auto;
  padding: 34.5px 109px 39.5px 37px;
  background: ${({ background }) => background};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HistoryEntryContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryDetails = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const HistoryText = styled.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`;

const More = styled.img`
  margin-top: 8px;
  width: 10px;
  height: 10px;
`;

const MoreText = styled.p`
  font-size: 14px;
  color: gray;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  justify-content: flex-end;
  cursor: pointer;
`;

const HistoryList = () => {
  const navigate = useNavigate();
  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[1];
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['history-preview'],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/activity', {
        params: { page: 1, size: 3, sort: 'CreatedAt' },
      });
      return response.data.content || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const RespondToFriendMutation = useMutation({
    mutationFn: ({
      requestId,
      isAccepted,
    }: {
      requestId: number;
      isAccepted: boolean;
    }) => respondToFriendRequest({ requestId, isAccepted }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`/api/activity/friend`],
      });

      Swal.fire({
        icon: 'success',
        text: '친구 요청을 수락했습니다',
        timer: 2000,
        showConfirmButton: false,
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: 'error',
        text: '친구 수락에 실패했습니다.',
        timer: 2000,
        showConfirmButton: false,
      });
      console.error(error);
    },
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류 발생!</div>;

  return (
    <div>
      <TitleWrapper>
        <Title>히스토리</Title>

        <MoreContainer>
          <MoreText onClick={() => navigate('/info/history')}>더보기</MoreText>
          <More onClick={() => navigate('/info/history')} src={Plus} />
        </MoreContainer>
      </TitleWrapper>

      <HistoryContainer background={backgroundColor}>
        {data.length > 0 ? (
          data.map((entry: any, index: number) => (
            <HistoryEntryContainer key={index}>
              <HistoryDetails>
                <HistoryText>{entry.date}</HistoryText>
                <HistoryText>{entry.time}</HistoryText>
                <HistoryText>{entry.content}</HistoryText> {/* 3개만 표시 */}
              </HistoryDetails>
              {entry.type === '과제 추가' || entry.type === '과제 공유' ? (
                entry.isRegistered ? (
                  <BlueButton status="등록됨">등록됨</BlueButton>
                ) : (
                  <BlueButton
                    onClick={() =>
                      openModal(
                        <AddTaskModal
                          assId={entry.assId}
                          onTaskAdded={() =>
                            console.log('과제가 추가되었습니다.')
                          }
                        />
                      )
                    }
                  >
                    내 일정에 등록
                  </BlueButton>
                )
              ) : entry.type === '친구 요청' ? (
                entry.check === 'CHECK' ? (
                  <BlueButton status="등록됨">수락됨</BlueButton>
                ) : (
                  <BlueButton
                    onClick={() =>
                      RespondToFriendMutation.mutate({
                        requestId: entry.friendRequestId,
                        isAccepted: true,
                      })
                    }
                  >
                    수락
                  </BlueButton>
                )
              ) : null}{' '}
            </HistoryEntryContainer>
          ))
        ) : (
          <div>기록이 없습니다.</div>
        )}
      </HistoryContainer>
    </div>
  );
};

export default HistoryList;
