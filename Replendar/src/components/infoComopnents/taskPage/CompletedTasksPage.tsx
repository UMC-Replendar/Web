import React, { useEffect, useState } from 'react';
import useAuthStore from '../../../store/authStore'; // ✅ Zustand에서 토큰 가져오기

const CompletedTasksPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuthStore(); // ✅ Zustand에서 토큰 가져오기

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      if (!token) {
        alert('로그인이 필요합니다.');
        window.location.href = '/login';
        return;
      }

      // ✅ 쿼리 스트링을 URL에 포함하여 요청
      const queryParams = new URLSearchParams({
        page: '0',
        size: '1',
        sort: 'string', // 📌 정렬 기준 확인 필요
      }).toString();

      try {
        const response = await fetch(
          `https://api.replendar.site/api/assignment/complete?${queryParams}`,
          {
            method: 'GET',
            headers: {
              Accept: '*/*',
              Authorization: `Bearer ${token}`, // ✅ 인증이 필요할 경우 추가
            },
          }
        );

        if (!response.ok) {
          console.log('응 ㄴㅇㅁ');
        }

        const data = await response.json();
        console.log('API 응답:', data);
      } catch (error) {
        console.error('API 요청 오류:', error);
      }
    };

    fetchCompletedTasks();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return <p>API 응답을 콘솔에서 확인하세요.</p>;
};

export default CompletedTasksPage;
