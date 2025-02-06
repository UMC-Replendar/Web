import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';

//isPending: 데이터를 불러오는 중입니다 데이터가 로딩중일 때 isPending true
//isLoading: 데이터를 불러오는 중이거나 재시도 중 일 때 ture가 됩니다

const useGetData = (url: string) => {
  const getData = async () => {
    try {
      const response = await axiosInstance.get(url);

      // API 응답 구조 확인
      console.log('API Response:', response.data);

      if (response.data?.isSuccess) {
        // 빈 배열이더라도 반환
        return Array.isArray(response.data.result) ? response.data.result : [];
      } else {
        const errorMessage =
          response.data?.message || 'Unexpected API response format';
        console.error('API Error:', errorMessage);
        return []; // 에러 시 빈 배열 반환
      }
    } catch (error: any) {
      console.error('Network/API Error:', error.message || error);
      return []; // 네트워크 오류 시에도 빈 배열 반환
    }
  };
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [url],
    queryFn: getData,
    enabled: !!url,
  });
  return { data, isLoading, isError, error };
};
export default useGetData;
