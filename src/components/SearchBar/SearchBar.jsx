import { useState } from 'react';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import Calendar from 'components/calendar/Calendar';
import SearchButton from './SearchButton';
import Schedule from './Schedule';
import Price from './Price';
import Guest from './Guest';

function SearchBar() {
  const [activeModalName, setActiveModal] = useState('NOTHING');

  return (
    <LargeContainer>
      <Schedule setActiveModal={setActiveModal} />
      <Price setActiveModal={setActiveModal} />
      <Guest setActiveModal={setActiveModal} />
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
  // TODO: PRICE
  // TODO: GUEST
  throw new Error(`해당하는 ${activeModalName}모달창이 존재하지 않습니다.`);
}

const LargeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 916px;
  height: 76px;
  margin: 20px auto 0;
  border-radius: 60px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};
`;
