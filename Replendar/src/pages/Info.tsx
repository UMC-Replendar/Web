import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HistoryList from '../components/infoComopnents/history/HistoryList';
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

// ProfileSection에 사용할 기본값 설정
const defaultProfile = {
  profileImageUrl: undefined,
  nickname: '닉네임 없음',
  statusMessage: '상태 메시지 없음',
  friendCount: 0,
  ongoingTasks: 0,
};

const Info: React.FC = () => {
  const navigate = useNavigate();
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    if (!profile) {
      console.log('프로필 데이터가 없음, fetchProfile 실행');
      fetchProfile(navigate);
    } else {
      console.log('기존 프로필 데이터 사용');
    }
  }, [profile, fetchProfile, navigate]);

  if (loading) return <div>Loading...</div>;

  // ProfileSection에는 `null`을 기본값으로 변환한 데이터 전달
  const profileDataForProfileSection = profile
    ? {
        profileImageUrl: profile.profileImageUrl ?? undefined,
        nickname: profile.nickname ?? '닉네임 없음',
        statusMessage: profile.statusMessage ?? '상태 메시지 없음',
        friendCount: profile.friendCount ?? 0,
        ongoingTasks: profile.ongoingTasks ?? 0,
      }
    : defaultProfile;

  // TaskSummary에는 원본 데이터를 그대로 전달
  const profileDataForTaskSummary = profile ?? {};

  return (
    <Container>
      <ProfileSection profileData={profileDataForProfileSection} />
      <TaskSummary taskData={profileDataForTaskSummary} />
      <HistoryList />
    </Container>
  );
};

export default Info;
