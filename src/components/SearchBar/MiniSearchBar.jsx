import { convertPriceToLocaleString } from 'components/PriceModal/calculate';
import PRICE_RANGE from 'constants/priceRange';
import { useContext, useEffect } from 'react';
import { FilterContext } from 'store/FilterContext';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import SearchButton from './SearchButton';

function MiniSearchBar({ setSpreadSearchBar }) {
  const { modalDispatch, schedule, scheduleDispatch, priceSlider, guest, guestDispatch } =
    useContext(FilterContext);
  const { checkIn, checkOut } = schedule;
  const { low, high } = priceSlider.price;
  const { adult, child, infant } = guest;
  const checkInText = checkIn ? `${checkIn.month}월 ${checkIn.day}일` : '';
  const checkOutText = checkOut ? `- ${checkOut.month}월 ${checkOut.day}일` : '- 일정입력';
  const convertLowPrice = convertPriceToLocaleString(low);
  const convertHighPrice = convertPriceToLocaleString(high);
  const priceText = `₩ ${convertLowPrice} - ₩${convertHighPrice}`;
  const peopleCnt = adult + child;
  const peopleValue = peopleCnt ? `게스트 ${peopleCnt}명 ` : '';
  const infantValue = infant ? `유아 ${infant}명` : '';

  useEffect(function setDefaultFilter() {
    setDefaultSchedule();
    setDefaultGuest();
  }, []);

  return (
    <Container
      onClick={() => {
        setSpreadSearchBar(true);
      }}
    >
      <FilterValue
        filter="schedule"
        value={checkIn && checkOut}
        onClick={() => modalDispatch({ type: 'OPEN_CALENDAR' })}
      >
        {checkIn && checkOut ? `${checkInText} ${checkOutText}` : '일정 입력'}
      </FilterValue>
      <FilterValue filter="price" value onClick={() => modalDispatch({ type: 'OPEN_PRICE' })}>
        {high === PRICE_RANGE.MAX ? `${priceText}+` : priceText}
      </FilterValue>
      <FilterValue
        filter="guest"
        value={peopleValue + infantValue}
        onClick={() => modalDispatch({ type: 'OPEN_PRICE' })}
      >
        {peopleValue + infantValue || '인원 입력'}
      </FilterValue>
      <SearchButton searchBarType="mini" />
    </Container>
  );

  function setDefaultSchedule() {
    if (checkIn && checkOut) return;
    const TODAY_YEAR = new Date().getFullYear();
    const TODAY_MONTH = new Date().getMonth() + 1;
    const TODAY_DATE = new Date().getDate();

    scheduleDispatch({
      type: 'SET_CHECK_IN',
      date: { year: TODAY_YEAR, month: TODAY_MONTH, day: TODAY_DATE },
    });
    scheduleDispatch({
      type: 'SET_CHECK_OUT',
      date: { year: TODAY_YEAR, month: TODAY_MONTH, day: TODAY_DATE + 7 },
    });
  }

  function setDefaultGuest() {
    if (peopleCnt) return;
    guestDispatch({ type: 'INCREASE_adult' });
  }
}

export default MiniSearchBar;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 48px;
  border-radius: 30px;
  margin: 0 auto;
  padding-right: 40px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};

  > button + button::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: ${COLOR.GREY[200]};
  }
`;

const FilterValue = styled.button`
  position: relative;
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  font-size: ${FONT.SIZE.SMALL};
  color: ${({ value }) => (value ? COLOR.BLACK : COLOR.GREY[400])};
`;
