import axios from 'axios';
import useAuthStore from '../store/authStore';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

// 요청 인터셉터 추가 (매 요청마다 토큰을 최신 상태로 설정)
axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState(); // Zustand에서 직접 가져오기-> 토큰 동적으로 최신화
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) //인터셉터에서 에러 발생 시 그대로 반환 catch(error)에서 에러 핸들링
);

export { axiosInstance };
