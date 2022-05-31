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
  activeModalName: string;
  modalName: string;
  setActiveModal: (modalName: string) => void;
}

function Filter({ type, filterContents, modalName, activeModalName, setActiveModal }: FilterProps) {
  const { setCheckIn, setCheckOut } = useContext(FilterContext);
  return (
    <Container type={type}>
      <Button type="button" onClick={handleClickedBtn}>
        {filterContents.map(({ title, value, placeholder }) => (
          <FilterBox key={title} title={title} value={value} placeholder={placeholder} />
        ))}
      </Button>
      <FilterResetButton clickHandler={handleResetBtn} />
    </Container>
  );

  function handleClickedBtn() {
    if (modalName === activeModalName) {
      setActiveModal('NOTHING');
      return;
    }
    setActiveModal(modalName);
  }

  function handleResetBtn() {
    if (modalName === 'CALENDAR') {
      setCheckIn(null);
      setCheckOut(null);
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
  padding: 16px 24px;
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
  text-align: left;
`;
