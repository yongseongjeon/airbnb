import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import IconButton from 'components/IconButton';
import Z_INDEX from 'styles/zIndex';

function SearchButton({ searchBarType }) {
  return (
    <SearchBtn searchBarType={searchBarType}>
      <IconButton
        icon="search"
        width={searchBarType === 'mini' ? '16' : '24'}
        height={searchBarType === 'mini' ? '16' : '24'}
        fill="none"
        stroke={COLOR.WHITE}
      />
      {searchBarType !== 'mini' && <Text>검색</Text>}
    </SearchBtn>
  );
}

export default SearchButton;

const SearchBtn = styled.span`
  z-index: ${Z_INDEX.SEARCH_BTN};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: ${({ searchBarType }) => searchBarType !== 'mini' && '42px'};
  width: ${({ searchBarType }) => (searchBarType === 'mini' ? '32px' : 'auto')};
  height: ${({ searchBarType }) => (searchBarType === 'mini' ? '32px' : '42px')};
  padding: 0 8px;
  border-radius: 32px;
  background: ${COLOR.PRIMARY};

  > button {
    width: 100%;
    height: 100%;
    font-size: 0;
  }
`;

const Text = styled.div`
  flex-shrink: 0;
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.WHITE};
`;
