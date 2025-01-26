import { create } from 'zustand';

interface ThemeState {
  selectedTheme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  selectedTheme: '기본테마',
  setTheme: (theme) => set({ selectedTheme: theme }),
}));

// 테마 색상 정의
export const themeColors = {
  기본테마: {
    sidebar: '#4CAF50',
    navbar: '#4CAF50',
    main: '#DFFFD6',
  },
  '테마 1': {
    sidebar: '#1E90FF',
    navbar: '#1E90FF',
    main: '#B0E0E6',
  },
  '테마 2': {
    sidebar: '#8A2BE2',
    navbar: '#8A2BE2',
    main: '#E6E6FA',
  },
};
