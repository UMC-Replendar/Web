import { useProfileStore } from '../store/profileStore';
import { axiosInstance } from './axios-instance';

// 친구 요청 보내기
export const sendFriendRequest = async (friendId: number) => {
  const response = await axiosInstance.post(`/api/friends/request`, {
    friendId: friendId,
  });
  return response.data.result;
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
  useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용
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
  useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용
  return response.data.result;
};

//메모 수정
export const patchNote = async ({
  friendId,
  note,
}: {
  friendId: number;
  note: string;
}) => {
  const response = await axiosInstance.patch('/api/friends/note', {
    friendId,
    note,
  });
  return response.data.result;
};

//그룹 생성
export const createGroup = async (groupName: string) => {
  const response = await axiosInstance.post(`/api/friend-groups`, {
    groupName,
  });
  return response.data.result;
};

//그룹 삭제
export const deleteGroup = async (groupId: number) => {
  const response = await axiosInstance.delete(`/api/friend-groups/${groupId}`);
  return response.data.result;
};

//그룹에 친구 추가
export const groupAddFriend = async ({
  groupId,
  friendshipIds,
}: {
  groupId: number;
  friendshipIds: number[];
}) => {
  const response = await axiosInstance.post(
    `/api/friend-groups/${groupId}/add-multiple`,
    {
      friendshipIds,
    }
  );
  return response.data.result;
};

//그룹에 친구 삭제
export const groupDeleteFriend = async ({
  groupId,
  friendshipId,
}: {
  groupId: number;
  friendshipId: number;
}) => {
  const response = await axiosInstance.delete(
    `/api/friend-groups/${groupId}/remove/${friendshipId}`
  );
  return response.data.result;
};

//학과 과제 생성
export const AddDepartmentAssignment = async ({
  lectureId,
  title,
  content,
  endDate,
}: {
  lectureId: number;
  title: string;
  content: string;
  endDate: string;
}) => {
  const response = await axiosInstance.post(`/api/major/lectures`, {
    lectureId,
    title,
    content,
    endDate,
  });
  return response.data.result;
};

//과제공유
export const ShareAss = async ({
  friendId,
  assignmentIds,
}: {
  friendId: number;
  assignmentIds: number[];
}) => {
  const response = await axiosInstance.post(`/api/friends/share/assignment`, {
    friendId,
    assignmentIds,
  });
  return response.data.result;
};
