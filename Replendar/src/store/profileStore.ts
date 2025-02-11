import { create } from 'zustand';
import { axiosInstance } from '../apis/axios-instance';
import { NavigateFunction } from 'react-router-dom';

interface ProfileData {
  nickname: string | null;
  statusMessage: string | null;
  profileImageUrl: string | null;
  friendCount: number;
  ongoingTasks: number;
  completed_TasksCount: number;
  store_TasksCount: number;
  not_completedTasksCount: number;
  important_taskCount: number;
}
interface ProfileStore {
  profile: ProfileData | null;
  loading: boolean;
  fetchProfile: (navigate: NavigateFunction) => Promise<void>;
  updateProfileImage: (newImageUrl: string) => void; // 업데이트 최신 반영
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: true,

  fetchProfile: async (navigate) => {
    try {
      const response = await axiosInstance.get('/api/user/mypage');

      if (response.data && response.data.result) {
        set({ profile: response.data.result, loading: false });
      } else {
        set({ loading: false });
        alert('로그인이 필요합니다.');
        navigate('/login');
      }
    } catch (error) {
      set({ loading: false });
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  },

  // 프로필 사진 변경 시 상태를 직접 업데이트
  updateProfileImage: (newImageUrl) => {
    set((state) => ({
      profile: state.profile
        ? { ...state.profile, profileImageUrl: newImageUrl }
        : null,
    }));
  },
}));
