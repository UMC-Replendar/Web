//import { useEffect, useState } from "react";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

//isPending: 데이터를 불러오는 중입니다 데이터가 로딩중일 때 isPending true
//isLoading: 데이터를 불러오는 중이거나 재시도 중 일 때 ture가 됩니다

const useGetData = (url: string) => {
  const getToken = async () => {
    try {
      const response = await axios.post(
        'https://api.replendar.site/api/user/login',
        {
          email: '1',
        }
      );
      localStorage.setItem('token', response.data.result.accessToken);
      console.log('로그인 성공! JWT토큰: ', response.data.result.accessToken);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  getToken;
  const getData = async () => {
    const token = localStorage.getItem('token');

    const response = await axios.get(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    return response.data;
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
