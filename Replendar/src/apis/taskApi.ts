import { axiosInstance } from './axios-instance';
import { Task } from '../store/useTaskStore';

// 과제 목록 가져오기
export const fetchTasks = async (userId: number) => {
  const response = await axiosInstance.get(`/api/assignment?userId=${userId}`);
  return response.data.result;
};

// 과제 상세 조회
export const fetchTaskDetail = async (assId: number) => {
  const response = await axiosInstance.get(`/api/assignment/${assId}`);
  return response.data.result;
};

// 특정 강의 과제 상세 정보 가져오기
export const fetchLectureAssignment = async (lectureAssignmentId: number) => {
  const response = await axiosInstance.get(
    `/api/major/lectures/get/${lectureAssignmentId}`
  );
  return response.data.result;
};

// 과제 추가하기
export const addTask = async (taskData: {
  title: string;
  endDate: string; // ISO 8601 형식
  notification: string;
  visibility: string;
  notifyCycle?: string[];
  shareIds?: number[];
  memo?: string;
  favorite?: 'ACTIVE' | 'INACTIVE';
  originAssId?: number;
  lectureAssignmentId?: number;
}) => {
  const response = await axiosInstance.post(`/api/assignment`, taskData);
  return response.data.result;
};

// 과제 삭제하기
export const deleteTask = async (assId: number) => {
  const response = await axiosInstance.delete(`/api/assignment?assId=${assId}`);
  return response.data.result;
};

// 과제 수정하기
export const editTask = async (updatedTask: Partial<Task>) => {
  const response = await axiosInstance.patch(`/api/assignment`, updatedTask);
  return response.data.result;
};

// 과제 완료 처리
export const completeTask = async (assignmentId: number) => {
  const response = await axiosInstance.patch(
    `/api/assignment/complete/${assignmentId}?assId=${assignmentId}`
  );
  return response.data.result;
};
