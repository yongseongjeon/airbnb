import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import SearchButton from './SearchButton';

function MiniSearchBar({ schedule, price, guest }) {
  return (
    <Container>
      <FilterValue value={schedule}>{schedule || '일정 입력'}</FilterValue>
      <FilterValue value={price}>{price || '금액대 입력'}</FilterValue>
      <FilterValue value={guest}>{guest || '인원 입력'}</FilterValue>
      <SearchButton searchBarType="mini" />
    </Container>
  );
}

export default MiniSearchBar;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 410px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${FONT.SIZE.SMALL};
  color: ${({ value }) => (value ? COLOR.BLACK : COLOR.GREY[400])};
`;
