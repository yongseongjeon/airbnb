import { useState, useContext } from 'react';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import Calendar from 'components/calendar/Calendar';
import { FilterContext } from 'store/FilterContext';
import FilterResetButton from './FilterResetButton';
import FilterBox from './FilterBox';
import FilterContainer from './FilterContainer';
import SearchButton from './SearchButton';

function SearchBar() {
  const [activeModalName, setActiveModal] = useState('NOTHING');

  return (
    <LargeContainer>
      <Schedule setActiveModal={setActiveModal} />
      <Price />
      <Guest />
      <SearchButton />
      <ActiveModal activeModalName={activeModalName} />
    </LargeContainer>
  );
}

export default SearchBar;

function ActiveModal({ activeModalName }) {
  if (activeModalName === 'NOTHING') {
    return null;
  }
  if (activeModalName === 'CALENDAR') {
    return <Calendar />;
  }
  throw new Error(`해당하는 ${activeModalName}모달창이 존재하지 않습니다.`);
}

function Schedule({ setActiveModal }) {
  const { checkIn, checkOut } = useContext(FilterContext);

  return (
    <FilterContainer type="Schedule">
      <Button type="button" onClick={() => setActiveModal('CALENDAR')}>
        <FilterBox
          title="체크인"
          placeholder="날짜입력"
          value={checkIn && `${checkIn.month}월 ${checkIn.day}일`}
        />
        <FilterBox
          title="체크아웃"
          placeholder="날짜입력"
          value={checkOut && `${checkOut.month}월 ${checkOut.day}일`}
        />
      </Button>
      <FilterResetButton />
    </FilterContainer>
  );
}

function Price() {
  return (
    <FilterContainer type="Price">
      <Button type="button">
        <FilterBox title="요금" placeholder="금액대 설정" value="" />
      </Button>
      <FilterResetButton />
    </FilterContainer>
  );
}

function Guest() {
  return (
    <FilterContainer type="Guest">
      <Button type="button">
        <FilterBox title="인원" placeholder="게스트 추가" value="" />
      </Button>
      <FilterResetButton />
    </FilterContainer>
  );
}

const LargeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 916px;
  height: 76px;
  margin: 20px auto 0;
  padding: 16px;
  border-radius: 60px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
`;
