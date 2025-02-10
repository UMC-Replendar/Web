// import { create } from 'zustand';

// // ✅ Zustand를 사용하여 토큰 저장
// interface AuthState {
//   token: string | null;
//   email: string | null;
//   id: number | null;
//   nickname: string | null;
//   setAuth: (token: string, email: string, id: number, nickname: string) => void;
//   clearAuth: () => void;
// }

// const useAuthStore = create<AuthState>((set) => ({
//   token: localStorage.getItem('token') || null,
//   email: localStorage.getItem('email') || null,
//   id: localStorage.getItem('id') ? Number(localStorage.getItem('id')) : null,
//   nickname: localStorage.getItem('nickname') || null,

//   setAuth: (token, email, id, nickname) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('email', email);
//     localStorage.setItem('id', id.toString());
//     localStorage.setItem('nickname', nickname);

//     set({ token, email, id, nickname });
//   },

//   clearAuth: () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('email');
//     localStorage.removeItem('id');
//     localStorage.removeItem('nickname');

//     set({ token: null, email: null, id: null, nickname: null });
//   },
// }));

// export default useAuthStore;
import axios from 'axios';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useThemeStore } from './useThemeStore';

interface AuthState {
  token: string | null;
  email: string | null;
  id: number | null;
  nickname: string | null;
  theme: 'DEFAULT' | 'THEME1' | 'THEME2';
  setAuth: (
    token: string,
    email: string,
    id: number,
    nickname: string,
    theme: 'DEFAULT' | 'THEME1' | 'THEME2'
  ) => void;
  clearAuth: () => void;
  setTheme: (theme: 'DEFAULT' | 'THEME1' | 'THEME2') => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      email: null,
      id: null,
      nickname: null,
      theme: 'DEFAULT',

      setAuth: (token, email, id, nickname, theme) => {
        set({ token, email, id, nickname, theme });
        useThemeStore.getState().setTheme(theme);
      },
      setTheme: async (theme) => {
        try {
          const { token } = useAuthStore.getState();
          if (!token) return;

          await axios.patch(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/user/theme?theme=${theme}`,
            {},
            {
              headers: { Authorization: `${token}` },
            }
          );

          set({ theme });
          useThemeStore.getState().setTheme(theme); // ✅ useThemeStore에도 반영
        } catch (error) {
          console.error('테마 변경 실패:', error);
        }
      },

      clearAuth: () => {
        set({ token: null, email: null, id: null, nickname: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage), // localStorage 사용
    }
  )
);

useAuthStore.subscribe((state) => {
  useThemeStore.getState().setTheme(state.theme);
});

export default useAuthStore;
