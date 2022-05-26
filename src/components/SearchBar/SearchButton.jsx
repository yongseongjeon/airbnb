import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

function SearchButton({ searchBarType }) {
  return (
    <SearchBtn searchBarType={searchBarType}>
      <Icon />
      {/* 검색 모달창 활성화 했을때만 <span>검색</span> */}
    </SearchBtn>
  );
}

export default SearchButton;

const SearchBtn = styled.button`
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
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.WHITE};
  background: ${COLOR.PRIMARY};
`;

const Icon = styled(SearchIcon)`
  path {
    stroke: ${COLOR.WHITE};
  }
`;
