/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-shadow */
import styled, { css } from 'styled-components';
import FONT from 'styles/font';
import COLOR from 'styles/colors';
import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';

function Day({ year, month, day }) {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useContext(FilterContext);
  const DEFAULT_CHECK_IN = { year: 9999, month: 0, day: 0 };
  const DEFAULT_CHECK_OUT = { year: 0, month: 0, day: 0 };
  const checkInDate = getDate(checkIn || DEFAULT_CHECK_IN);
  const checkOutDate = getDate(checkOut || DEFAULT_CHECK_OUT);
  const calendarDate = new Date(year, month - 1, day);

  const isBetweenCheckInAndCheckOut = checkInDate <= calendarDate && calendarDate <= checkOutDate;
  const isCheckIn = isEqualDate(checkIn, { year, month, day });
  const isCheckOut = isEqualDate(checkOut, { year, month, day });
  const isSelected = isCheckIn || isCheckOut;
  const isPastDate = getCurDate() > calendarDate;

  return (
    <StyledDay
      disabled={isPastDate}
      isSelected={isSelected}
      isPastDate={isPastDate}
      isBetweenCheckInAndCheckOut={isBetweenCheckInAndCheckOut}
      isCheckIn={isCheckIn}
      isCheckOut={isCheckOut}
      day={day}
      onClick={handleClickedDay}
    >
      {day}
    </StyledDay>
  );

  function handleClickedDay() {
    const curDate = { year, month, day };
    const hasCheckIn = checkIn;
    const hasCheckOut = checkOut;
    const isBeforeCheckIn = calendarDate < checkInDate;

    if (!hasCheckIn) {
      setCheckIn(curDate);
      return;
    }
    if (isBeforeCheckIn) {
      setCheckIn(curDate);
      setCheckOut(null);
      return;
    }
    if (!hasCheckOut) {
      setCheckOut(curDate);
      return;
    }
    setCheckOut(curDate);
  }
}

function getCurDate() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDate({ year, month, day }) {
  const dates = Object.entries({ year, month: month - 1, day }).map((x) => x[1]);
  return new Date(...dates);
}

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

export default Day;

const DAY_SIZE_CSS = css`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 100%;
`;

const StyledDay = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  margin: auto auto;
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${({ isPastDate }) => isPastDate && COLOR.GREY[300]};
  color: ${({ isSelected }) => isSelected && COLOR.WHITE};
  background-color: ${({ isBetweenCheckInAndCheckOut }) =>
    isBetweenCheckInAndCheckOut && COLOR.GREY[100]};
  border-radius: ${({ isCheckIn }) => isCheckIn && '100% 0 0 100%'};
  border-radius: ${({ isCheckOut }) => isCheckOut && '0 100% 100% 0'};

  ::after {
    ${DAY_SIZE_CSS}
    content: ${({ day, isSelected }) => isSelected && `"${day}"`};
    background-color: ${({ isSelected }) => isSelected && COLOR.GREY[600]};
  }

  :hover {
    ::before {
      ${DAY_SIZE_CSS}
      content: ${({ isPastDate }) => !isPastDate && '"  "'};
      font-weight: ${FONT.WEIGHT.MEDIUM};
      border: 1px solid ${COLOR.GREY[600]};
    }
  }
`;
