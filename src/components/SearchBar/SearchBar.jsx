import styled from 'styled-components';
import COLOR from 'styles/colors';
import FilterResetButton from './FilterResetButton';
import FilterBox from './FilterBox';
import FilterContainer from './FilterContainer';
import SearchButton from './SearchButton';

function SearchBar() {
  return (
    <LargeContainer>
      <Schedule />
      <Price />
      <Guest />
      <SearchButton />
    </LargeContainer>
  );
}

export default SearchBar;

function Schedule() {
  return (
    <FilterContainer type="Schedule">
      <FilterBox title="체크인" placeholder="날짜입력" value="" />
      <FilterBox title="체크아웃" placeholder="날짜입력" value="" />
      <FilterResetButton />
    </FilterContainer>
  );
}

function Price() {
  return (
    <FilterContainer type="Price">
      <FilterBox title="요금" placeholder="금액대 설정" value="" />
      <FilterResetButton />
    </FilterContainer>
  );
}
function Guest() {
  return (
    <FilterContainer type="Guest">
      <FilterBox title="인원" placeholder="게스트 추가" value="" />
      <FilterResetButton />
    </FilterContainer>
  );
}

const LargeContainer = styled.div`
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
