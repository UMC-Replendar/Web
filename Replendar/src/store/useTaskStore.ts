// import { useProfileStore } from './profileStore';

// export interface Task {
//   assignmentId: number;
//   title: string;
//   endDate: string;
//   notification: 'ON' | 'OFF';
//   visibility: 'ON' | 'OFF';
//   notifyCycle: string[];
//   shareIds: number[];
//   memo: string;
//   favorite: 'ACTIVE' | 'INACTIVE';
//   originAssId: number | null;
//   lectureAssignmentId: number | null;
// }

// interface TaskStore {
//   tasks: Task[];
//   setTasks: (tasks: Task[]) => void; // 전체 과제 목록 업데이트
//   addTask: (taskData: Omit<Task, 'assignmentId'>) => Promise<Task>; // 새로운 과제 추가
//   editTask: (assId: number, updatedTask: Partial<Task>) => void; // 특정 과제 수정
//   deleteTask: (assId: number) => void; // 특정 과제 삭제
//   completeTask: (assId: number) => Promise<void>; // 특정 과제 완료 처리
//   fetchTasks: (userId: number) => Promise<void>; // 로그인, 강제 새로고침 할 때 실행
// }

// const useTaskStore = create<TaskStore>((set) => ({
//   tasks: [],

//   setTasks: (tasks) => set({ tasks }),

//   addTask: async (taskData) => {
//     const { token } = useAuthStore.getState();

//     try {
//       const { data: newTask } = await axios.post(
//         `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment`,
//         taskData,
//         {
//           headers: { Authorization: `${token}` },
//         }
//       );

//       set((state) => ({
//         tasks: [...state.tasks, newTask],
//       }));
//       useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용

//       return newTask;
//     } catch (error) {
//       console.error('과제 추가 중 오류 발생:', error);
//       alert('과제 추가 처리 중 문제가 발생했습니다.');
//       throw error;
//     }
//   },

//   editTask: (assignmentId: number, updatedTask: Partial<Task>) =>
//     set((state) => ({
//       tasks: state.tasks.map((task) =>
//         task.assignmentId === assignmentId ? { ...task, ...updatedTask } : task
//       ),
//     })),

//   deleteTask: async (assId) => {
//     const { token } = useAuthStore.getState();
//     try {
//       await axios.delete(
//         `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?assId=${assId}`,
//         {
//           headers: { Authorization: `${token}` },
//         }
//       );

//       set((state) => ({
//         tasks: state.tasks.filter((task) => task.assignmentId !== assId),
//       }));
//       useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용
//     } catch (error) {
//       console.error('과제 삭제 중 오류 발생:', error);
//       alert('과제 삭제 처리 중 문제가 발생했습니다.');
//     }
//   },

//   completeTask: async (assId) => {
//     const { token } = useAuthStore.getState();
//     try {
//       await axios.patch(
//         `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/complete/${assId}?assId=${assId}`,
//         {},
//         {
//           headers: { Authorization: `${token}` },
//         }
//       );

//       set((state) => ({
//         tasks: state.tasks.filter((task) => task.assignmentId !== assId),
//       }));
//       useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용

//       console.log(`과제 완료 처리 성공: ${assId}`);
//     } catch (error) {
//       console.error('과제 완료 처리 중 오류 발생:', error);
//       alert('과제 완료 처리 중 문제가 발생했습니다.');
//     }
//   },

// export default useTaskStore;

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
  importantTasks: [], // ✅ 중요 과제 상태 추가

  setTasks: (tasks) => set({ tasks }),
  setImportantTasks: (importantTasks) => set({ importantTasks }), // ✅ 중요 과제 업데이트 함수 추가

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
