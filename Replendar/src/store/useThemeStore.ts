import { create } from 'zustand';

type ThemeKeys = keyof typeof themeBackground;

interface ThemeStore {
  selectedTheme: ThemeKeys;
  setTheme: (theme: ThemeKeys) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  selectedTheme: 'DEFAULT',
  setTheme: (theme) => set({ selectedTheme: theme }),
}));
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
  DEFAULT: ['#2bae66', '#D9D9D9', '#2BAE66', '#25C26C', '#7AC19A', '#00893D'],
  THEME1: ['#3C6DE0', '#D9D9D9', '#0042C3', '#3C6DE0', '#7796DC', '#2A54B8'], // 파랑
  THEME2: ['#7F30EB', '#D9D9D9', '#5209B0', '#7F30EB', '#A465FF', '#5C1DB8'], // 보라
};
