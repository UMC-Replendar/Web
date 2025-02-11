import { create } from 'zustand';

interface AcademicYearState {
  academicYear: number;
  setAcademicYear: (year: number) => void;
}

const useAcademicYearStore = create<AcademicYearState>((set) => ({
  academicYear: 1, // 기본값 (1학년)
  setAcademicYear: (year) => set({ academicYear: year }),
}));

export default useAcademicYearStore;
