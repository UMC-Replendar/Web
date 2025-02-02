import { create } from 'zustand';

// ✅ Zustand를 사용하여 토큰 저장
interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null, // 초기 상태를 localStorage에서 가져오기
  setToken: (token) => {
    localStorage.setItem('token', token); // ✅ 토큰 저장
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem('token'); // ✅ 로그아웃 시 토큰 삭제
    set({ token: null });
  },
}));

export default useAuthStore;
