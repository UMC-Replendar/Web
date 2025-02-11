import { create } from 'zustand';
//Department -> major 수정 필요
interface Department {
  id: number;
  name: string;
}

interface DepartmentStore {
  departments: Department[];
  selectedDepartment: Department | null;
  addDepartment: (department: Department) => void;
  setDepartments: (departments: Department[]) => void;
  setSelectedDepartment: (department: Department | null) => void;
}

const useDepartmentStore = create<DepartmentStore>((set) => ({
  departments: [],
  selectedDepartment: null,
  addDepartment: (department) =>
    set((state) => ({
      departments: [...state.departments, department],
    })),
  setDepartments: (departments) => set({ departments }),
  setSelectedDepartment: (department) =>
    set({ selectedDepartment: department }),
}));

export default useDepartmentStore;
