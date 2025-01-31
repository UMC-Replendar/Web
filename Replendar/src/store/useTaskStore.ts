import { create } from 'zustand';

interface Task {
  color: string;
  name: string;
  deadline: string;
  remainingTime: string;
  isToggled: boolean;
  isBookmarked: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (name: string, deadline: string) => void;
  deleteTask: (name: string) => void;
  toggleBookmark: (name: string) => void;
  editTask: (name: string, updatedTask: Partial<Task>) => void;
  updateRemainingTimes: () => void;
}

const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [
    {
      color: '#2BAE66',
      name: '과제 1',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#2BAE66',
      name: '과제 2',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#25C26C',
      name: '과제 3',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#7AC19A',
      name: '과제 4',
      deadline: '2025-01-28T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#7AC19A',
      name: '과제 5',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#7AC19A',
      name: '과제 6',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
    {
      color: '#7AC19A',
      name: '과제 7',
      deadline: '2025-01-30T23:59:59',
      remainingTime: '',
      isToggled: false,
      isBookmarked: false,
    },
  ],
  addTask: (name, deadline) =>
    set((state) => {
      const newTask: Task = {
        color: '#7AC19A',
        name,
        deadline,
        remainingTime: '',
        isToggled: false,
        isBookmarked: false,
      };

      const updatedTasks = [...state.tasks, newTask];

      console.log(' Adding task:', newTask);
      console.log(' Before update:', get().tasks);
      console.log(' After update:', updatedTasks);

      return { tasks: updatedTasks };
    }),
  deleteTask: (name) =>
    set((state) => {
      const taskIndex = state.tasks.findIndex((task) => task.name === name);
      if (taskIndex === -1) return state; // 존재하지 않는 경우 그대로 반환

      return {
        tasks: state.tasks.filter((_, index) => index !== taskIndex),
      };
    }),

  toggleBookmark: (name) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.name === name
          ? { ...task, isBookmarked: !task.isBookmarked }
          : task
      ),
    })),
  editTask: (name, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.name === name ? { ...task, ...updatedTask } : task
      ),
    })),
  updateRemainingTimes: () =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        const deadlineDate = new Date(task.deadline);
        const now = new Date();
        const diffMs = deadlineDate.getTime() - now.getTime();
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        return { ...task, remainingTime: `${hours}h ${minutes}m ${seconds}s` };
      });

      return { tasks: [...updatedTasks] }; // 새로운 배열 반환
    }),
}));

export default useTaskStore;
