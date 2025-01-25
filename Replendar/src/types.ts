export interface Task {
  date: string;
  time: string;
  description: string;
  delay: string;
  status: '완료' | '미완료';
}

export interface StoredTask {
  date: string; // 마감일
  delay: '만료' | '유효'; // 만료 여부
  description: string; // 과제명
}
