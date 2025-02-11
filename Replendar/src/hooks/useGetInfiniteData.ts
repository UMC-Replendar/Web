import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';

function useGetInfiniteData(url: string, size: number = 10) {
  const getData = async ({ pageParam = 1 }: { pageParam: number }) => {
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
