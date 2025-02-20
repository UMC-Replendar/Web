import { create } from 'zustand';
import { fetchTasks, fetchImportantTasks } from '../apis/taskApi';
import useAuthStore from './authStore';

export interface Task {
  assId: number;
  assignmentId: number;
  title: string;
  visibility: 'ON' | 'OFF';
  notification: 'ON' | 'OFF';
  due_time: string;
  due_date: string;
  endDate: string;
  memo?: string;
  completion_time: string;
  due_datetime: string;
  shareIds?: number[];
  notifyCycle?: string[];
  favorite?: 'ACTIVE' | 'INACTIVE';

  /*  originAssId: number | null;
    lectureAssignmentId: number | null;
    */
}

interface TaskStore {
  tasks: Task[];
  importantTasks: Task[]; // 중요한 과제 추가
  setTasks: (tasks: Task[]) => void;
  setImportantTasks: (importantTasks: Task[]) => void; // 중요한 과제 목록 업데이트
  fetchTasks: () => Promise<void>;
  fetchImportantTasks: () => Promise<void>; // 중요 과제 가져오기
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  importantTasks: [],

  setTasks: (tasks) => set({ tasks }),
  setImportantTasks: (importantTasks) => set({ importantTasks }),

  fetchTasks: async () => {
    try {
      const { id: userId } = useAuthStore.getState();
      if (!userId) return;

      const result = await fetchTasks(userId);
      set({ tasks: result || [] });
    } catch (error) {
      console.error('Task fetching error:', error);
      set({ tasks: [] });
    }
  },

  fetchImportantTasks: async () => {
    try {
      const result = await fetchImportantTasks(); // API 호출
      set({ importantTasks: result || [] }); // 상태 업데이트
    } catch (error) {
      console.error('Important task fetching error:', error);
      set({ importantTasks: [] });
    }
  },
}));

export default useTaskStore;
