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

  .react-calendar__tile {
    height: 118px;
    border: 1px solid #ebf4ef;
  }

  .react-calendar__month-view__days {
    border-collapse: collapse;
  }

  .react-calendar__month-view__weekdays {
    border: 1px solid #ebf4ef;
    text-align: left;
    color: #aaaaaa;
  }
`;

function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthYearText = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}년 ${month}월`;
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
  };

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <MonthText>{getMonthYearText(currentDate)}</MonthText>
        <ArrowButton onClick={goToPreviousMonth}>
          <img src={PreviousArrowIcon} alt="이전 달" />
        </ArrowButton>
        <ArrowButton onClick={goToNextMonth}>
          <img src={NextArrowIcon} alt="다음 달" />
        </ArrowButton>
      </CalendarHeader>

      <ScheduleText>달력에 스케쥴표를 확인하세요</ScheduleText>

      <StyledCalendar value={currentDate} locale="ko-KR" />
    </CalendarWrapper>
  );
}

export default CustomCalendar;
