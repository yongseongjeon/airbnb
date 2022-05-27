/* eslint-disable operator-linebreak */
import styled from 'styled-components';
import FONT from 'styles/font';
import COLOR from 'styles/colors';
import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';

function Day({ year, month, day }) {
  const calendarDateTime = new Date(year, month - 1, day).getTime();
  const curDateTime = new Date().getTime();
  const isDatePast = curDateTime > calendarDateTime;
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useContext(FilterContext);

  return (
    <StyledDay disabled={isDatePast} isDatePast={isDatePast} onClick={handleClickedDay}>
      {day}
    </StyledDay>
  );

  function handleClickedDay() {
    const curDate = { year, month, day };
    const isEmptyCheckInOut = !checkIn && !checkOut;
    const isEmptyCheckOut = !checkOut;

    if (isEmptyCheckInOut) {
      setCheckIn(curDate);
      return;
    }
    if (isEmptyCheckOut) {
      setCheckOut(curDate);
      return;
    }

    const checkInDate = new Date(checkIn.year, checkIn.month - 1, checkIn.day);
    const checkInDateTime = checkInDate.getTime();
    const isBeforeCheckInSelected = calendarDateTime <= checkInDateTime;
    const isAfterCheckInSelected = calendarDateTime > checkInDateTime;

    if (isBeforeCheckInSelected) {
      setCheckIn(curDate);
      setCheckOut(null);
      return;
    }
    if (isAfterCheckInSelected) {
      setCheckOut(curDate);
    }
  }
}

export default Day;

const StyledDay = styled.button`
  margin: auto auto;
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${({ isDatePast }) => (isDatePast ? COLOR.GREY[300] : COLOR.GREY[600])};
`;
