import { useState } from 'react';
import styled from 'styled-components';
import PreviousArrowIcon from '/src/assets/images/PreviousArrowIcon.svg';
import NextArrowIcon from '/src/assets/images/NextArrowIcon.svg';
import { AddButton } from '../../pages/OngoingTasks';
import { PlusIcon } from '../CommuComponents/commuIcons';
import Calendar from 'react-calendar';
import { useThemeStore, themeBackground } from '../../store/useThemeStore';

const CalendarWrapper = styled.div`
  margin-top: 66px;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  margin-left: 22px;
`;

const MonthText = styled.h4`
  color: black;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin: 0;
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const CalendarSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 26px 22px;
  padding-right: 25px;
`;

const ScheduleText = styled.p`
  color: #666666;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: auto;
  border: 1px solid #ebf4ef;

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    text-align: left;
    color: #666666;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    div:nth-child(1) {
      color: #eb8a8a;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-right: 1px solid #ebf4ef;

    &:last-child {
      border-right: none;
    }
  }

  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    flex: 1 0 0;
    align-self: stretch;
    border-top: 1px solid #ebf4ef;
    border-right: 1px solid #ebf4ef;
    color: #666666;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    height: 135px;
  }

  .react-calendar__month-view__days > .react-calendar__tile:nth-child(7n) {
    border-right: none;
  }

  .neighboringMonth {
    color: #aaaaaa;
  }

  .currentMonthSunday {
    color: #eb8a8a;
  }

  .react-calendar__tile--now {
    background-color: transparent;
  }

  .react-calendar__tile--active {
    background-color: transparent;
  }

  .react-calendar__tile:enabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

const TaskMarkerContainer = styled.div`
  display: flex;
  padding-left: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  align-self: stretch;

  span {
    color: #3982e2;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const TaskMarker = styled.div<{ background: string }>`
  display: flex;
  height: 25px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 50px 0px 0px 50px;
  background: ${({ background }) => background};
  color: white;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

interface CustomCalendarProps {
  tasks: { name: string; deadline: string }[];
}

function CustomCalendar({ tasks }: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date()); // 선택한 날짜
  const [viewDate, setViewDate] = useState(new Date()); // 캘린더에 표시되는 월

  const { selectedTheme } = useThemeStore();
  const themeColors = themeBackground[selectedTheme];
  const backgroundColor = themeColors[0];

  const getMonthYearText = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}년 ${month}월`;
  };

  const goToPreviousMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const isSameMonth = (date: Date, baseDate: Date) =>
    date.getMonth() === baseDate.getMonth() &&
    date.getFullYear() === baseDate.getFullYear();

  const isSunday = (date: Date) => date.getDay() === 0;

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthText>{getMonthYearText(viewDate)}</MonthText>
        <ArrowButtonContainer>
          <ArrowButton onClick={goToPreviousMonth}>
            <img src={PreviousArrowIcon} alt="이전 달" />
          </ArrowButton>
          <ArrowButton onClick={goToNextMonth}>
            <img src={NextArrowIcon} alt="다음 달" />
          </ArrowButton>
        </ArrowButtonContainer>
      </CalendarHeader>

      <CalendarSubtitle>
        <ScheduleText>달력에 스케쥴표를 확인하세요</ScheduleText>
        <AddButton>
          방명록 작성하기
          <PlusIcon fill="currentColor" />
        </AddButton>
      </CalendarSubtitle>

      <StyledCalendar
        value={currentDate}
        locale="ko-KR"
        calendarType="gregory"
        activeStartDate={viewDate}
        formatDay={(_locale, date) => date.getDate().toString()}
        tileClassName={({ date }) => {
          if (!isSameMonth(date, viewDate)) return 'neighboringMonth';
          if (isSameMonth(date, viewDate) && isSunday(date))
            return 'currentMonthSunday';
          return null;
        }}
        tileContent={({ date }) => {
          const formattedDate = date
            .toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\\./g, '-');

          const tasksForDate = tasks.filter((task) => {
            const taskDate = new Date(task.deadline);
            const localDate = taskDate
              .toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
              .replace(/\\./g, '-');
            return localDate === formattedDate;
          });

          if (tasksForDate.length > 0) {
            return (
              <TaskMarkerContainer>
                {tasksForDate.slice(0, 2).map((task, index) => (
                  <TaskMarker background={backgroundColor} key={index}>
                    {task.name}
                  </TaskMarker>
                ))}
                {tasksForDate.length > 2 && (
                  <span>총 {tasksForDate.length}개</span>
                )}
              </TaskMarkerContainer>
            );
          }
          return null;
        }}
        onClickDay={(value) => setCurrentDate(value)}
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate) setViewDate(activeStartDate);
        }}
      />
    </CalendarWrapper>
  );
}

export default CustomCalendar;
