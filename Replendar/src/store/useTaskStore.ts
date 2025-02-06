import { useEffect } from 'react';
import { create } from 'zustand';

interface Task {
  assignmentId: number;
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
  isBookmarked: boolean;
  memo: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (assignmentId: number) => void;
  toggleBookmark: (assignmentId: number) => void;
  editTask: (assignmentId: number, updatedTask: Partial<Task>) => void;
  updateRemainingTimes: () => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

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

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
        const seconds = Math.floor((diffMs / 1000) % 60);

        return {
          ...task,
          remainingTime: `${days}d ${hours}h ${minutes}m ${seconds}s`,
        };
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
