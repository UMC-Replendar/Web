import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';

//isPending: 데이터를 불러오는 중입니다 데이터가 로딩중일 때 isPending true
//isLoading: 데이터를 불러오는 중이거나 재시도 중 일 때 ture가 됩니다

const useGetData = (url: string) => {
  const getData = async () => {
    const response = await axiosInstance.get(url);

    return response.data.result;
  };
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [url],
    queryFn: getData,
  });
  return { data, isLoading, isError };
};
export default useGetData;
