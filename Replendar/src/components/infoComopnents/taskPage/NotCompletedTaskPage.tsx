import React from 'react';
import TaskCard from './TaskCard';
import { StoredTask } from '../../../types';

const storedTasks: StoredTask[] = [
  {
    date: '11 / 02',
    delay: '',
    description: '~~과~~~~~하기 과제',
  },
  {
    date: '11 / 02',
    delay: '',
    description: '~~과~~~~~하기 과제',
  },
];

const mappedTasks = storedTasks.map((task) => ({
  date: task.date,
  time: '',
  description: task.description,
  delay: task.delay as '',
  status: '미완료' as '미완료',
}));

const NotCompletedTaskPage: React.FC = () => {
  return (
    <>
      <TaskCard
        imageSrc="src/assets/images/InfoIcons/Task.svg"
        title="미완료 과제"
        tasks={mappedTasks}
        showDetails={false}
      />
    </>
  );
};

export default NotCompletedTaskPage;
