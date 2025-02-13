import Swal from 'sweetalert2';
import { create } from 'zustand';
import { axiosInstance } from '../apis/axios-instance';
import { NavigateFunction } from 'react-router-dom';

// 프로필 데이터 타입 정의
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

// 프로필 관련 상태 관리
interface ProfileStore {
  profile: ProfileData | null;
  loading: boolean;
  fetchProfile: (navigate: NavigateFunction) => Promise<void>;
  updateProfileImage: (newImageUrl: string) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: true,

  // 프로필 정보 가져오기
  fetchProfile: async (navigate) => {
    try {
      const response = await axiosInstance.get('/api/user/mypage');

      if (response.data && response.data.result) {
        set({ profile: response.data.result, loading: false });
      } else {
        set({ loading: false });
        Swal.fire({
          icon: 'warning',
          title: '로그인 해주세요',
          text: '로그인이 필요한 서비스입니다.',
          confirmButtonColor: '#7AC19A',
        }).then(() => {
          navigate('/login');
        });
      }
    } catch (error) {
      set({ loading: false });
      Swal.fire({
        icon: 'error',
        title: `로그인 해주세요`,
        text: `로그인이 필요한 서비스입니다. (${error})`,
        confirmButtonColor: '#7AC19A',
      }).then(() => {
        navigate('/login');
      });
    }
  },

  // 프로필 사진 변경 시 상태 업데이트
  updateProfileImage: (newImageUrl) => {
    set((state) => ({
      profile: state.profile
        ? { ...state.profile, profileImageUrl: newImageUrl }
        : null,
    }));
  },
}));

// 학년 관련 상태 관리
interface AcademicYearState {
  academicYear: number;
  setAcademicYear: (year: number) => void;
}

export const useAcademicYearStore = create<AcademicYearState>((set) => ({
  academicYear: 2, // 기본값 (1학년)
  setAcademicYear: (year) => set({ academicYear: year }),
}));
