import { FriendRequestResponse } from '../types';
import { axiosInstance } from './axios-instance';

// 친구 요청 보내기
export const sendFriendRequest = async (
  friendId: number
): Promise<FriendRequestResponse> => {
  const response = await axiosInstance.post(`/api/friends/request`, {
    friendId: friendId,
  });
  return response.data;
};

// 친구 요청 응답
export const respondToFriendRequest = async ({
  requestId,
  isAccepted,
}: {
  requestId: number;
  isAccepted: boolean;
}) => {
  const response = await axiosInstance.post(`/api/friends/request/respond`, {
    requestId,
    isAccepted,
  });
  return response.data.result;
};

// 친한 친구 설정
export const setBestFriendStatus = async ({
  friendId,
  buddyStatus,
}: {
  friendId: number; // 친구 ID
  buddyStatus: string; // 설정할 친한 친구 상태 (YES or NO)
}) => {
  const response = await axiosInstance.patch(`/api/friends/best-friend`, {
    friendId,
    buddyStatus,
  });
  return response.data.result;
};

//친구 삭제
export const deleteFriend = async (friendId: number) => {
  const response = await axiosInstance.delete(
    `/api/friends?friendId=${friendId}`
  );
  return response.data;
};
