import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';
import Swal from 'sweetalert2';

//isPending: 데이터를 불러오는 중입니다 데이터가 로딩중일 때 isPending true
//isLoading: 데이터를 불러오는 중이거나 재시도 중 일 때 ture가 됩니다

const useGetData = (url: string, options?: object) => {
  const getData = async () => {
    try {
      const response = await axiosInstance.get(url, options);

      // API 응답 구조 확인
      console.log('API Response:', response.data);

      if (response.data?.isSuccess) {
        return Array.isArray(response.data.result)
          ? response.data.result
          : [response.data.result];
      } else {
        const errorMessage = response.data?.message || 'API 호출 실패';
        console.error('API 실패 메시지:', errorMessage);
        Swal.fire({
          icon: 'info',
          text: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
        return [];
      }
    } catch (error: any) {
      if (error.response) {
        // API 호출 오류 (response가 있는 경우, 예: 404, 500)
        const errorMessage =
          error.response?.data?.result || `API 오류: ${error.response.status}`;
        console.error('API 오류 메시지:', error.response);

        Swal.fire({
          icon: 'warning',

          text: errorMessage,
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (error instanceof Error) {
        // 일반적인 JavaScript 오류 (네트워크, 클라이언트 오류)
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
      return []; // 오류 발생 시 빈 배열 반환
    }
  };
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [url, options],
    queryFn: getData,
    enabled: !!url,
  });
  return { data, isLoading, isError, error };
};
export default useGetData;
