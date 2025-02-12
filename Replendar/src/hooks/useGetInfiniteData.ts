import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

function useGetInfiniteData(url: string, size: number = 10) {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  const getData = async ({ pageParam = 1 }: { pageParam: number }) => {
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/');
      return;
    }
    const { data } = await axiosInstance.get(
      `${url}?page=${pageParam}&size=${size}`
    );
    console.log(`현재 요청한 페이지: ${pageParam}`);
    console.log(data.result);

    return data.result;
  };

  return useInfiniteQuery({
    queryFn: getData,
    queryKey: [url, size],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.pageable.pageNumber + 2;
    },
  });
}

export { useGetInfiniteData };
