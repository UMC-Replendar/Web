import styled, { keyframes } from 'styled-components';

// 셔머 애니메이션 정의 (로딩 효과)
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

// 공통 스켈레톤 스타일 (배경 및 애니메이션)
const SkeletonItem = styled.div`
  background: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f0f0f0 40px,
    #e0e0e0 80px
  );
  background-size: 600px;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 4px;
`;

// 페이지 전체
const SkeletonPageWrapper = styled.div`
  margin-top: 79px;
  margin-left: 66px;
  margin-right: 163px;
  display: flex;
  flex-direction: column;
`;

// 상단 제목 부분 (진행 중인 과제 / 중요한 과제)
const SkeletonMainTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SkeletonLeftTitles = styled.div`
  display: flex;
  gap: 10px;
`;

const SkeletonTitleBox = styled(SkeletonItem)`
  width: 200px;
  height: 50px;
  border-radius: 20px 20px 0 0;
`;

// 오른쪽 추가 버튼
const SkeletonAddButton = styled(SkeletonItem)`
  width: 140px;
  height: 40px;
  border-radius: 50px;
`;

// 과제 리스트 박스
const SkeletonTaskBox = styled(SkeletonItem)`
  padding: 40px 64px;
  border-radius: 0 20px 20px 20px;
  margin-bottom: 20px;
`;

// 개별 과제 아이템
const SkeletonTaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

const SkeletonTaskItem = styled(SkeletonItem)`
  flex: 1;
  height: 50px;
  border-radius: 50px;
`;

const SkeletonTaskButton = styled(SkeletonItem)`
  width: 80px;
  height: 40px;
  border-radius: 20px;
`;

// 캘린더 영역
const SkeletonCalendarWrapper = styled.div`
  margin-top: 66px;
`;

const SkeletonCalendarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 4px;
  margin-left: 22px;
`;

const SkeletonMonthText = styled(SkeletonItem)`
  width: 120px;
  height: 28px;
  border-radius: 4px;
`;

const SkeletonArrowButton = styled(SkeletonItem)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const SkeletonScheduleText = styled(SkeletonItem)`
  width: 200px;
  height: 20px;
  margin-left: 22px;
  margin-bottom: 26px;
`;

const SkeletonCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  border: 1px solid #ebf4ef;
  border-radius: 10px;
  padding: 10px;
`;

// 요일 헤더
const SkeletonWeekday = styled(SkeletonItem)`
  height: 20px;
  width: 100%;
  border-radius: 4px;
`;

// 날짜 박스
const SkeletonCalendarDay = styled(SkeletonItem)`
  height: 80px;
  width: 100%;
  border-radius: 4px;
`;

// 과제 마커
const SkeletonTaskMarker = styled(SkeletonItem)`
  width: 50px;
  height: 15px;
  border-radius: 4px;
  margin-top: 5px;
`;

function SkeletonOngoingTasks() {
  return (
    <SkeletonPageWrapper>
      {/* 상단 제목 */}
      <SkeletonMainTitleWrapper>
        <SkeletonLeftTitles>
          <SkeletonTitleBox />
          <SkeletonTitleBox />
        </SkeletonLeftTitles>
        <SkeletonAddButton />
      </SkeletonMainTitleWrapper>

      {/* 과제 목록 */}
      <SkeletonTaskBox>
        {Array.from({ length: 3 }).map((_, idx) => (
          <SkeletonTaskItemContainer key={idx}>
            <SkeletonTaskItem />
            <SkeletonTaskButton />
          </SkeletonTaskItemContainer>
        ))}
      </SkeletonTaskBox>

      {/* 캘린더 수정중중*/}
      <SkeletonCalendarWrapper>
        {/* 캘린더 헤더 */}
        <SkeletonCalendarHeader>
          <SkeletonMonthText />
          <SkeletonArrowButton />
          <SkeletonArrowButton />
        </SkeletonCalendarHeader>

        <SkeletonScheduleText />

        {/* 캘린더 요일 */}
        <SkeletonCalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map((_, idx) => (
            <SkeletonWeekday key={idx} />
          ))}
          {Array.from({ length: 35 }).map((_, idx) => (
            <SkeletonCalendarDay key={idx}>
              {/* 30% 확률로 과제 마커 표시 */}
              {Math.random() > 0 && <SkeletonTaskMarker />}
            </SkeletonCalendarDay>
          ))}
        </SkeletonCalendarGrid>
      </SkeletonCalendarWrapper>
    </SkeletonPageWrapper>
  );
}

export default SkeletonOngoingTasks;
