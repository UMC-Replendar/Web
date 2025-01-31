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
export interface RegisterResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: <Register>
}
export interface Register {
  friendId: string;
  nickname: string;
  name: string;
  statusMessage: string;
}
