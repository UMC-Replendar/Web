import { useEffect } from 'react';
import { create } from 'zustand';
import axios from 'axios';

interface Task {
  assignmentId: number;
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
  isBookmarked: boolean;
}

interface TaskStore {
  tasks: Task[];
  fetchTasks: (userId: number) => Promise<void>;
  setTasks: (tasks: Task[]) => void;
  addTask: (name: string, deadline: string) => void;
  deleteTask: (assignmentId: number) => void;
  toggleBookmark: (assignmentId: number) => void;
  editTask: (assignmentId: number, updatedTask: Partial<Task>) => void;
  updateRemainingTimes: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  setTasks: (newTasks) => set({ tasks: newTasks }),

  fetchTasks: async (userId: number) => {
    try {
      const response = await axios.get(`/api/assignment?userId=${userId}`);
      if (response.data.isSuccess) {
        const formattedTasks = response.data.result.map((task: any) => ({
          assignmentId: task.assignmentId,
          color: task.visibility === 'ON' ? '#4CAF50' : '#F44336',
          name: task.title,
          deadline: task.due_date,
          remainingTime: task.due_time,
          isToggled: task.notification === 'ON',
          isBookmarked: false,
        }));
        set({ tasks: formattedTasks });
      } else {
        console.error('API Error:', response.data.message);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  },

  addTask: async (name, deadline) => {
    try {
      const response = await axios.post('/api/assignment', {
        title: name,
        due_date: deadline,
      });
      if (response.data.isSuccess) {
        const newTask: Task = {
          assignmentId: response.data.result.assignmentId,
          color: '#7AC19A',
          name,
          deadline,
          remainingTime: '',
          isToggled: false,
          isBookmarked: false,
        };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      }
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  },

  deleteTask: (assignmentId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.assignmentId !== assignmentId),
    })),

  toggleBookmark: (assignmentId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.assignmentId === assignmentId
          ? { ...task, isBookmarked: !task.isBookmarked }
          : task
      ),
    })),

  editTask: (assignmentId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.assignmentId === assignmentId ? { ...task, ...updatedTask } : task
      ),
    })),

  updateRemainingTimes: () =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        const deadlineDate = new Date(task.deadline);
        const now = new Date();
        const diffMs = deadlineDate.getTime() - now.getTime();

        if (diffMs <= 0) {
          return { ...task, remainingTime: '제출 마감' };
        }

        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        return { ...task, remainingTime: `${hours}h ${minutes}m ${seconds}s` };
      });

      return { tasks: [...updatedTasks] }; // 새로운 배열 반환
    }),
}));

export default useTaskStore;

export const useTaskUpdater = () => {
  const updateRemainingTimes = useTaskStore(
    (state) => state.updateRemainingTimes
  );

  useEffect(() => {
    updateRemainingTimes();
    const interval = setInterval(updateRemainingTimes, 1000);
    return () => clearInterval(interval);
  }, [updateRemainingTimes]);
};
