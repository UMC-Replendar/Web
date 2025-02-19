import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function useGetInfiniteDataRaw(url: string, size: number = 10) {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const getData = async ({ pageParam = 1 }: { pageParam: number }) => {
    if (!token) {
      Swal.fire({
        icon: 'info',
        text: '로그인이 필요합니다',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate('/');
      });

      return;
    }
    try {
      const { data } = await axiosInstance.get(
        `${url}?page=${pageParam}&size=${size}`
      );
      return data; // 정상적으로 응답을 받으면 데이터를 반환
    } catch (error: any) {
      if (error.response) {
        // API 호출 에러 (예: 서버가 500 에러를 반환)
        const errorMessage =
          error.response.data?.error || `API 오류: ${error.response.status}`;
        console.error('API 실패 메시지:', errorMessage);
        Swal.fire({
          icon: 'error',

          text: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (error instanceof Error) {
        // 일반적인 네트워크 오류 또는 기타 오류 (예: 인터넷 연결 문제)
        const errorMessage = error.message || 'Network/API Error';
        console.error('네트워크 오류:', errorMessage);
        Swal.fire({
          icon: 'error',
          title: '네트워크 오류',
          text: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        // 예상치 못한 오류
        console.error('예상치 못한 오류:', error);
        Swal.fire({
          icon: 'error',
          title: '오류',
          text: '예상치 못한 오류가 발생했습니다.',
          showConfirmButton: false,
          timer: 2000,
        });
      }

      return []; // 에러 발생 시 빈 배열 반환
    }
  };

  return useInfiniteQuery({
    queryFn: getData,
    queryKey: [url, size],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.last) return undefined; // ✅ lastPage가 없거나 마지막 페이지면 undefined 반환
      return (lastPage.pageable?.pageNumber ?? 0) + 2; // ✅ lastPage.pageable이 undefined일 경우 기본값 0 설정
    },
  });
}

export { useGetInfiniteDataRaw };
