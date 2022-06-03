/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import Z_INDEX from 'styles/zIndex';
import FilterBox from './FilterBox';
import FilterResetButton from './FilterResetButton';

interface FilterProps {
  type: string;
  filterContents: {
    title: string;
    value: string;
    placeholder: string;
  }[];
  modalName: string;
}

function Filter({ type, filterContents, modalName }: FilterProps) {
  const {
    guest,
    guestDispatch,
    schedule,
    scheduleDispatch,
    activeModalName,
    modalDispatch,
    priceSlider,
    priceSliderDispatch,
  } = useContext(FilterContext);
  const { adult, child, infant } = guest;
  const { checkIn, checkOut } = schedule;
  const { low, high } = priceSlider.price;

  return (
    <Container type={type}>
      <Button type="button" onClick={handleClickedBtn}>
        {filterContents.map(({ title, value, placeholder }) => (
          <FilterBox key={title} title={title} value={value} placeholder={placeholder} />
        ))}
      </Button>
      <ResetBtn />
    </Container>
  );

  function ResetBtn() {
    const hasCheckInAndCheckOut = checkIn && checkOut;
    const hasGuest = adult + child + infant;
    const hasPrice = low && high;
    if (modalName === 'CALENDAR' && hasCheckInAndCheckOut) {
      return <FilterResetButton clickHandler={handleResetBtn} />;
    }
    if (modalName === 'GUEST' && hasGuest) {
      return <FilterResetButton clickHandler={handleResetBtn} />;
    }
    if (modalName === 'PRICE' && hasPrice) {
      return <FilterResetButton clickHandler={handleResetBtn} />;
    }
    // TODO: Price, Guest 분기 처리
    return null;
  }

  function handleClickedBtn() {
    if (modalName === activeModalName) {
      modalDispatch({ type: 'CLOSE' });
      return;
    }
    modalDispatch({ type: `OPEN_${modalName}` });
  }

  function handleResetBtn() {
    if (modalName === 'CALENDAR') {
      scheduleDispatch({ type: 'RESET' });
      return;
    }
    if (modalName === 'PRICE') {
      priceSliderDispatch({ type: 'RESET' });
      return;
    }
    if (modalName === 'GUEST') {
      guestDispatch({ type: 'RESET' });
    }
  }
}

export default Filter;

const Container = styled.div`
  z-index: ${Z_INDEX.FILTER_CONTAINER};
  position: relative;
  flex: ${(props: { type: string }) => (props.type === 'Schedule' ? 2 : 1.5)};
  width: 100%;
  height: 100%;
  border-radius: 60px;
  &:hover {
    background: ${COLOR.GREY[100]};
  }
  cursor: pointer;

  &:not(:first-child)::before {
    position: absolute;
    left: 0;
    top: 16px;
    bottom: 16px;
    content: '';
    width: 1px;
    background: ${COLOR.GREY[200]};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  text-align: left;
`;
