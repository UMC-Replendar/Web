import React from 'react';
import TaskCard from './TaskCard';
import { StoredTask } from '../../../types';

const storedTasks: StoredTask[] = [
  {
    date: '11 / 02',
    delay: '만료',
    description: '~~과~~~~~하기 과제',
  },
  {
    date: '11 / 02',
    delay: '유효',
    description: '~~과~~~~~하기 과제',
  },
];

const mappedTasks = storedTasks.map((task) => ({
  date: task.date,
  time: '',
  description: task.description,
  delay: task.delay as '만료' | '유효',
  status: '미완료' as '미완료',
}));

const StoredTaskPage: React.FC = () => {
  return (
    <TaskCard
      imageSrc="src/assets/images/InfoIcons/Task.svg"
      title="보관한 과제"
      tasks={mappedTasks}
      showDetails={true}
    />
  );
};

export default StoredTaskPage;
