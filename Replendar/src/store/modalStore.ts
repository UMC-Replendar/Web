import { create } from 'zustand';

// 상태 타입 정의
interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
  selectedSchool: string | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  setSelectedSchool: (school: string) => void;
}

// Zustand store 생성
const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  selectedSchool: null,
  openModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
  setSelectedSchool: (school) => set({ selectedSchool: school }),
}));

export default useModalStore;
