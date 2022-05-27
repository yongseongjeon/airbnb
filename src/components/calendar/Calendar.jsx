/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import SearchBarModal from 'components/modal/SearchBarModal';
import Month from 'components/calendar/Month';
import IconButton from 'components/IconButton';
import COLOR from 'styles/colors';

function Calendar() {
  const [date, setDate] = useState(getYearMonthLastDay(new Date()));
  const [curYear, curMonth, curLastDay] = date;
  const [nextYear, nextMonth, nextLastDay] = getYearMonthLastDay(
    getNextMonthDate(curYear, curMonth),
  );
  const isDisplayedCurMonth = curMonth === new Date().getMonth() + 1;

  return (
    <SearchBarModal padding="64px 88px" borderRadius="40px">
      <Header>
        <IconButton
          icon="prev"
          width="24"
          height="24"
          fill="none"
          stroke={COLOR.BLACK}
          disabled={isDisplayedCurMonth}
          clickHandler={() => setDate(getYearMonthLastDay(new Date(curYear, curMonth - 3)))}
        />
        <IconButton
          icon="next"
          width="24"
          height="24"
          fill="none"
          stroke={COLOR.BLACK}
          clickHandler={() => setDate(getYearMonthLastDay(new Date(curYear, curMonth + 1)))}
        />
      </Header>
      <Months>
        <Month year={curYear} month={curMonth} lastDay={curLastDay} />
        <Month year={nextYear} month={nextMonth} lastDay={nextLastDay} />
      </Months>
    </SearchBarModal>
  );
}

function getNextMonthDate(year, month) {
  return new Date(year, month);
}

function getYearMonthLastDay(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();
  return [year, month, lastDay];
}

const Header = styled.div`
  display: flex;
  width: 740px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Months = styled.div`
  display: flex;
  gap: 68px;
`;

export default Calendar;
