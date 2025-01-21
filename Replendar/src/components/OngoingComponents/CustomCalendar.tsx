import { useState } from 'react';
import styled from 'styled-components';
import PreviousArrowIcon from '/src/assets/images/PreviousArrowIcon.png';
import NextArrowIcon from '/src/assets/images/NextArrowIcon.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = styled.div`
  margin-top: 30px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
  margin-left: 9px;
`;

const MonthText = styled.h4`
  font-size: 28px;
  align-items: center;
  margin: 0;
  padding-right: 15px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  padding-right: 10px;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
  }
`;

const ScheduleText = styled.p`
  font-size: 16px;
  margin: 0 0 26px 9px;
  color: #666666;
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
    color: #aaaaaa;

    div:nth-child(1) {
      color: #eb8a8a;
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 7px 8px;
    border-right: 1px solid #ebf4ef;
    &:last-child {
      border-right: none;
    }
  }

  .react-calendar__tile {
    height: 118px;
    border-top: 1px solid #ebf4ef;
    border-right: 1px solid #ebf4ef;
    color: #666666;
    display: flex;
    align-items: flex-start;
    padding: 8px;
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

function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date()); // 선택한 날짜
  const [viewDate, setViewDate] = useState(new Date()); // 캘린더에 표시되는 월

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
        <ArrowButton onClick={goToPreviousMonth}>
          <img src={PreviousArrowIcon} alt="이전 달" />
        </ArrowButton>
        <ArrowButton onClick={goToNextMonth}>
          <img src={NextArrowIcon} alt="다음 달" />
        </ArrowButton>
      </CalendarHeader>

      <ScheduleText>달력에 스케쥴표를 확인하세요</ScheduleText>

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
        onClickDay={(value) => setCurrentDate(value)}
        onActiveStartDateChange={({ activeStartDate }) => {
          if (activeStartDate) setViewDate(activeStartDate);
        }}
      />
    </CalendarWrapper>
  );
}

export default CustomCalendar;
