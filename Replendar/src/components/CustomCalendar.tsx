import { useState } from 'react';
import styled from 'styled-components';
import PreviousArrowIcon from '../assets/images/PreviousArrowIcon.png';
import NextArrowIcon from '../assets/images/NextArrowIcon.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = styled.div`
  margin-top: 21px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
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
  font-size: 18px;
  padding: 0 10px 0 0;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
  }
`;

const ScheduleText = styled.p`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 24px;
  color: #666666;
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

      <Calendar value={currentDate} />
    </CalendarWrapper>
  );
}

export default CustomCalendar;
