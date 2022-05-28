import styled from 'styled-components';
import Day from 'components/calendar/Day';
import COLOR from 'styles/colors';
import FONT from 'styles/font';

function DaysWrap({ year, month, lastDay }) {
  const FIRST_DAY = 1;
  const dayOfFirstDay = new Date(year, month - 1, FIRST_DAY).getDay();

  return (
    <>
      <DayOfWeek />
      <Blank num={dayOfFirstDay} />
      <Days />
    </>
  );

  function DayOfWeek() {
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    return DAYS.map((day) => <StyledDayOfWeek key={day}>{day}</StyledDayOfWeek>);
  }
  function Blank({ num }) {
    return Array.from({ length: num }).map((_, i) => <div key={`blank-${i}`} />);
  }
  function Days() {
    return Array.from({ length: lastDay }).map((_, i) => (
      <Day year={year} month={month} day={i + 1} key={i} />
    ));
  }
}

export default DaysWrap;

const StyledDayOfWeek = styled.span`
  margin: auto auto;
  font-size: ${FONT.SIZE.X_SMALL};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${COLOR.GREY[400]};
`;
