//import { useEffect, useState } from "react";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Register, RegisterResponse } from '../types';

//isPending: 데이터를 불러오는 중입니다 데이터가 로딩중일 때 isPending true
//isLoading: 데이터를 불러오는 중이거나 재시도 중 일 때 ture가 됩니다
const useGetData = (url: string) => {
  const getData = async (): Promise<RegisterResponse> => {
    return await axios.get(url);
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
