import { create } from 'zustand';

interface School {
  id: number;
  name: string;
}

interface SchoolState {
  schools: School[];
  selectedSchool: School | null; // 선택된 학교 상태
  setSchools: (schools: School[]) => void;
  addSchool: (school: School) => void;
  setSelectedSchool: (school: School | null) => void; //선택된 학교 설정 함수
}

const useSchoolStore = create<SchoolState>((set) => ({
  schools: [],
  selectedSchool: null, // 초기 상태는 null
  setSchools: (schools) => set({ schools }),
  addSchool: (school) =>
    set((state) => ({ schools: [...state.schools, school] })), // 기존 목록에 새 학교
  setSelectedSchool: (school) => set({ selectedSchool: school }), // 선택된 학교 상태 업데이트
}));

export default useSchoolStore;
