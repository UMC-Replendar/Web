import { create } from 'zustand';
import useAuthStore from './authStore';
import axios from 'axios';
<<<<<<< HEAD
import Swal from 'sweetalert2';
=======
import { useProfileStore } from './profileStore';
>>>>>>> 709b6f54035e6d089f5c6b78c19a68e63bef5d56

export interface Task {
  assignmentId: number;
  title: string;
  endDate: string;
  notification: 'ON' | 'OFF';
  visibility: 'ON' | 'OFF';
  notifyCycle: string[];
  shareIds: number[];
  memo: string;
  favorite: 'ACTIVE' | 'INACTIVE';
  originAssId: number | null;
  lectureAssignmentId: number | null;
}

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void; // 전체 과제 목록 업데이트
  addTask: (taskData: Omit<Task, 'assignmentId'>) => Promise<Task>; // 새로운 과제 추가
  editTask: (assId: number, updatedTask: Partial<Task>) => void; // 특정 과제 수정
  deleteTask: (assId: number) => void; // 특정 과제 삭제
  completeTask: (assId: number) => Promise<void>; // 특정 과제 완료 처리
  fetchTasks: (userId: number) => Promise<void>; // 로그인, 강제 새로고침 할 때 실행
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  setTasks: (tasks) => set({ tasks }),

  addTask: async (taskData) => {
    const { token } = useAuthStore.getState();

    try {
      const { data: newTask } = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment`,
        taskData,
        {
          headers: { Authorization: `${token}` },
        }
      );

      set((state) => ({
        tasks: [...state.tasks, newTask],
      }));
      useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용

      return newTask;
    } catch (error) {
      console.error('과제 추가 중 오류 발생:', error);
      Swal.fire({
        icon: 'error',
        text: `과제 추가 처리 중 문제가 발생했습니다`,
        timer: 2000,
        showConfirmButton: false,
      });

      throw error;
    }
  },

  editTask: (assignmentId: number, updatedTask: Partial<Task>) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.assignmentId === assignmentId ? { ...task, ...updatedTask } : task
      ),
    })),

  deleteTask: async (assId) => {
    const { token } = useAuthStore.getState();
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?assId=${assId}`,
        {
          headers: { Authorization: `${token}` },
        }
      );

      set((state) => ({
        tasks: state.tasks.filter((task) => task.assignmentId !== assId),
      }));
    } catch (error) {
      console.error('과제 삭제 중 오류 발생:', error);
      alert('과제 삭제 처리 중 문제가 발생했습니다.');
    }
  },

  completeTask: async (assId) => {
    const { token } = useAuthStore.getState();
    try {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment/complete/${assId}?assId=${assId}`,
        {},
        {
          headers: { Authorization: `${token}` },
        }
      );

      set((state) => ({
        tasks: state.tasks.filter((task) => task.assignmentId !== assId),
      }));
      useProfileStore.getState().refreshProfile(); // 자동 프로필 갱신 추가 -> 내정보 업데이트용

      console.log(`과제 완료 처리 성공: ${assId}`);
    } catch (error) {
      console.error('과제 완료 처리 중 오류 발생:', error);
      Swal.fire({
        icon: 'error',
        text: `과제 완료 처리 중 문제가 발생했습니다`,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  },

  fetchTasks: async (userId) => {
    const { token } = useAuthStore.getState();

    if (!userId) {
      console.error('userId가 존재하지 않습니다. 로그인 여부를 확인해주세요.');

      Swal.fire({
        icon: 'warning',
        text: `로그인이 필요합니다`,
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/assignment?userId=${userId}`,
        {
          headers: { Authorization: `${token}` },
        }
      );

      if (data?.isSuccess && Array.isArray(data.result)) {
        set({ tasks: data.result });
        console.log('과제 목록 불러오기 성공:', data.result);
      } else {
        console.error('API 응답 오류:', data);
        alert('과제 목록을 불러오는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('과제 목록을 불러오는 중 오류 발생:', error);
<<<<<<< HEAD

      Swal.fire({
        icon: 'error',
        text: `과제 목록을 불러오는 중 문제가 발생했습니다`,
        timer: 2000,
        showConfirmButton: false,
      });
=======
      alert('과제 목록을 불러오는 중 문제가 발생했습니다.');
>>>>>>> 709b6f54035e6d089f5c6b78c19a68e63bef5d56
    }
  },
}));

export default useTaskStore;
