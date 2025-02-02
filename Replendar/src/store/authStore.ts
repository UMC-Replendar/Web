import { create } from 'zustand';

// ✅ Zustand를 사용하여 토큰 저장
interface AuthState {
  token: string | null;
  email: string | null;
  id: number | null;
  nickname: string | null;
  setAuth: (token: string, email: string, id: number, nickname: string) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  id: localStorage.getItem('id') ? Number(localStorage.getItem('id')) : null,
  nickname: localStorage.getItem('nickname') || null,

  setAuth: (token, email, id, nickname) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('id', id.toString());
    localStorage.setItem('nickname', nickname);

    set({ token, email, id, nickname });
  },

  clearAuth: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('nickname');

    set({ token: null, email: null, id: null, nickname: null });
  },
}));

export default useAuthStore;
