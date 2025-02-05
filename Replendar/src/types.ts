// 기존 Task 정의 (완료 상태, 시간 포함)
export interface Task {
  date: string;
  time: string;
  description: string;
  delay: string;
  status: '완료' | '미완료' | undefined;
  StoredTaskdelay: '만료' | '유효' | undefined; // 만료 여부
}
