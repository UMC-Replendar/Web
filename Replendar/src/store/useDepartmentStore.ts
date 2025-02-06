import { create } from 'zustand';

interface Department {
  id: number;
  name: string;
}

interface DepartmentStore {
  departments: Department[];
  addDepartment: (department: Department) => void;
  setDepartments: (departments: Department[]) => void;
}

const useDepartmentStore = create<DepartmentStore>((set) => ({
  departments: [],
  addDepartment: (department) =>
    set((state) => ({
      departments: [...state.departments, department],
    })),
  setDepartments: (departments) => set({ departments }),
}));

export default useDepartmentStore;
