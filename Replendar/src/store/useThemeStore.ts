import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeKeys = keyof typeof themeBackground;

interface ThemeStore {
  selectedTheme: ThemeKeys;
  setTheme: (theme: ThemeKeys) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      selectedTheme: 'DEFAULT',
      setTheme: (theme) => set({ selectedTheme: theme }),
    }),
    {
      name: 'theme-storage', // 로컬 스토리지에서 가져오기 위한 key
    }
  )
);
/*
index 
0번은 사이드바 컨테이너색
1번은 진행중인과제 바탕색
2번은 메인-과제1번색
3번은 메인-과제2번색
4번은 메인-과제3번색
5번은 사이드바 hover시에 색

alert confirmbutton text: 3번
*/
export const themeBackground = {
  DEFAULT: ['#2bae66', '#FCF6F5', '#2BAE66', '#25C26C', '#7AC19A', '#00893D'],
  THEME1: ['#3C6DE0', '#f8fdf4', '#0042C3', '#3C6DE0', '#7796DC', '#2A54B8'], // 파랑
  THEME2: ['#7F30EB', '#ebedfa', '#5209B0', '#7F30EB', '#A465FF', '#5C1DB8'], // 보라
};
