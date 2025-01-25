import React from 'react';
import TaskCard from './TaskCard';

const tasks = [
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '만료',
  },
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '만료',
  },
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '만료',
  },
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '유효',
  },
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '유효',
  },
  {
    date: '11 / 02',
    time: '23:59',
    description: '~~과~~~~~하기 과제',
    delay: '유효',
  },
];

const StoredTaskPage: React.FC = () => {
  return (
    <TaskCard
      imageSrc="src/assets/images/InfoIcons/Task.svg"
      title="보관한 과제"
      tasks={tasks}
    />
  );
};

export default StoredTaskPage;
