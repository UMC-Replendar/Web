import React from 'react';

import TaskCard from './TaskCard';
import { Task } from '../../../types';
const CompletedTasksPage: React.FC = () => {
  const tasks: Task[] = [
    {
      date: '11 / 02',
      time: '23:55',
      description: '000님이 ~~~~~~~하기 과제',
      delay: '과제 제출이 3h 느렸습니다.',
      status: '완료', // 정확한 리터럴 값 사용
    },
    {
      date: '11 / 03',
      time: '22:30',
      description: '000님이 ~~~~~~~하기 과제',
      delay: '과제 제출이 30m 빨랐습니다.',
      status: '미완료', // 정확한 리터럴 값 사용
    },
  ];

  return (
    <TaskCard
      imageSrc="src/assets/images/Worked.svg"
      title="완료한 과제"
      tasks={tasks}
      showDetails={false} //  false로 보이지 않음
    />
  );
};

export default CompletedTasksPage;
