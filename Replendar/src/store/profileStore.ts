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
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: true,
  fetchProfile: async (navigate) => {
    try {
      const response = await axiosInstance.get('/api/user/mypage');
      console.log('API 응답 데이터:', response.data);
      console.log('API 응답 result:', response.data.result);

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
}));
