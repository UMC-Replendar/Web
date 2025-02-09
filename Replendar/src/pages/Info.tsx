import React, { useEffect } from 'react';
import styled from 'styled-components';
import HistoryList from '../components/infoComopnents/HistoryList';
import ProfileSection from '../components/infoComopnents/ProfileSection';
import TaskSummary from '../components/infoComopnents/TaskSummary';
import { useProfileStore } from '../store/profileStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
`;

const Info: React.FC = () => {
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    // profile이 없을 때만 API 호출
    if (!profile) {
      console.log('프로필 데이터가 없음, fetchProfile 실행');
      fetchProfile();
    } else {
      console.log('기존 프로필 데이터 사용');
    }
  }, [profile]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <ProfileSection profileData={profile} />
      <TaskSummary taskData={profile} />
      <HistoryList />
    </Container>
  );
};

export default Info;
