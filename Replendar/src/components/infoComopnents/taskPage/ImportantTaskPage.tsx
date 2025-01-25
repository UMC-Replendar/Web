import React from 'react';
import TaskCard from './TaskCard';
import { StoredTask } from '../../../types';

// 저장된 과제 데이터
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

const ImportantTaskPage: React.FC = () => {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>짬뽕 페이지</h1>
      <TaskCard
        imageSrc="src/assets/images/InfoIcons/Task.svg"
        title="미완료 과제"
        tasks={mappedTasks}
        showDetails={false}
      />
    </>
  );
};

export default ImportantTaskPage;
