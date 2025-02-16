// 기존 Task 정의 (완료 상태, 시간 포함)
export interface Task {
  date: string;
  time: string;
  description: string;
  delay: string;
  status: string;
  title: string;
  createdAt: string;
  due_time: string;
  due_date: string;
  completionTime: string;
  due_datetime: string;
  dueDate: string;
  completion_time: string;
}

// 기존 StoredTask 정의 (마감일과 유효성만 포함)
export interface StoredTask {
  date: string; // 마감일
  delay: '만료' | '유효' | undefined; // 만료 여부
  description: string; // 과제명
}

export interface IFriendList {
  friendshipId: number;
  friendId: number;
  nickname: string;
  name: string;
  ongoingAssignments: number;
  buddyStatus: 'YES' | 'NO';
  friendNote: string;
  profileImageUrl: string;
}

export interface IGroupList {
  groupId: number; // 그룹 ID
  groupName: string; // 그룹 이름
  friends: IFriendList[]; // 그룹에 속한 친구들의 배열
}

export interface ITaskFriendList {
  friendId: number; // 친구 ID
  nickname: string; // 닉네임
  name: string; // 친구 이름
  friendNote: string; // 메모
}

export interface ILecture {
  lectureName: string;
  professor: string;
  academicYear: string;
  lectureId: number; // ID는 일반적으로 숫자로 사용됨 (필요하면 string으로 변경)
}

export interface IDepartmentNewsContent {
  friendId: number; // 친구 아이디
  assignmentId: number; // 과제 아이디
  lectureAssignmentId: number; // 학과 과제 아이디
  time: string; // 시간 (예: "1시간 전")
  nickname: string; // 닉네임
  title: string; // 과제 제목
  check: 'CHECK' | 'UNCHECK'; // 내일정에 등록 여부
}

export interface IFriendNewsContent {
  friendRequestId: number;
  senderId: number;
  friendId: number;
  assId: number;
  check: 'CHECK'; // "CHECK" 문자열 고정
  date: string;
  time: string;
  content: string;
  createdAt: string; // ISO 날짜 형식
  timeStamp: string;
  type: string;
  isRegistered: boolean;
}

export interface ISort {
  empty: boolean; // 정렬 정보 (비어있는지 여부)
  sorted: boolean; // 정렬 여부
  unsorted: boolean; // 정렬되지 않은 상태
}

export interface IPageable {
  pageNumber: number; // 페이지 번호
  pageSize: number; // 페이지 크기
  sort: ISort; // 정렬 상태
  offset: number; // 오프셋
  paged: boolean; // 페이지가 있는지 여부
  unpaged: boolean; // 페이지가 없는지 여부
}

export interface IPage<T> {
  content: T[]; // 각 페이지의 데이터 항목들을 포함
  pageable: IPageable; // 페이지네이션 정보
  last: boolean; // 마지막 페이지 여부
  totalPages: number; // 총 페이지 수
  totalElements: number; // 총 요소 수
  size: number; // 페이지 크기
  number: number; // 현재 페이지 번호
  sort: ISort; // 정렬 정보
  first: boolean; // 첫 페이지 여부
  numberOfElements: number; // 현재 페이지에 포함된 요소 수
  empty: boolean; // 페이지가 비었는지 여부
}

export interface ITaskList {
  title: string; // 과제명
  professor: string; // 교수명
  lectureName: string; // 강의명
  academicYear: string; // 학년 (예: YEAR_4)
  created_date: string; // 생성일 (ISO 8601 형식)
  due_date: string; // 마감일 (YYYY-MM-DD 형식)
  check: 'UNCHECK' | 'CHECK'; // 체크 상태
  lectureAssignmentId: number; // 과제 ID
}
