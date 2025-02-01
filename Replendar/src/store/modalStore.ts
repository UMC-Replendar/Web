import { create } from 'zustand';

// 상태 타입 정의
interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
  selectedSchool: string | null;
  modalContent: React.ReactNode | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  setSelectedSchool: (school: string) => void;
}

// Zustand store 생성
const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  selectedSchool: null,
  modalContent: null, //추가했습니다.
  openModal: (content) => set({ isOpen: true, modalContent: content }),
  closeModal: () => set({ isOpen: false, modalContent: null }),
  setSelectedSchool: (school) => set({ selectedSchool: school }),
}));

export default useModalStore;
