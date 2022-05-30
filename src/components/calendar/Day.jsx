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
  const isSelected =
    isEqualDate(checkIn, { year, month, day }) || isEqualDate(checkOut, { year, month, day });

  function isEqualDate(date1, date2) {
    if (date1?.year !== date2.year) {
      return false;
    }
    if (date1?.month !== date2.month) {
      return false;
    }
    if (date1?.day !== date2.day) {
      return false;
    }
    return true;
  }

  return (
    <StyledDay
      disabled={isDatePast}
      isSelected={isSelected}
      isDatePast={isDatePast}
      onClick={handleClickedDay}
    >
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
  width: 48px;
  height: 48px;
  margin: auto auto;
  font-weight: ${FONT.WEIGHT.MEDIUM};
  border-radius: 30px;
  color: ${({ isDatePast }) => isDatePast && COLOR.GREY[300]};
  color: ${({ isSelected }) => isSelected && COLOR.WHITE};
  background-color: ${({ isSelected }) => isSelected && COLOR.GREY[600]};
  :hover {
    border: ${({ isDatePast }) => !isDatePast && `1px solid ${COLOR.GREY[600]}`};
  }
`;
