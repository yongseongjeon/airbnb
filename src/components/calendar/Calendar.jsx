import styled from 'styled-components';
import SearchBarModal from 'components/modal/SearchBarModal';
import Month from 'components/calendar/Month';
import IconButton from 'components/IconButton';

function Calendar() {
  const [curYear, curMonth, curLastDay] = getYearMonthLastDay(new Date());
  const [nextYear, nextMonth, nextLastDay] = getYearMonthLastDay(getNextMonthDate());
  const isDisplayedCurMonth = curMonth === new Date().getMonth() + 1;

  return (
    <SearchBarModal padding="64px 88px" borderRadius="40px">
      <Header>
        <IconButton icon="prev" fill="none" stroke="red" disabled={isDisplayedCurMonth} />
        <IconButton icon="next" fill="none" />
      </Header>
      <Months>
        <Month year={curYear} month={curMonth} lastDay={curLastDay} />
        <Month year={nextYear} month={nextMonth} lastDay={nextLastDay} />
      </Months>
    </SearchBarModal>
  );
}

function getNextMonthDate() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
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
