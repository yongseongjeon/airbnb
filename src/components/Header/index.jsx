import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import FONT from 'styles/font';
import COLOR from 'styles/colors';
import { BOX_SHADOW } from 'styles/utils';
import MiniSearchBar from 'components/SearchBar/MiniSearchBar';
import SearchBar from 'components/SearchBar/SearchBar';
import Z_INDEX from 'styles/zIndex';
import GNB from './GNB';
import AccountMenu from './AccountMenu';

function Header({ pageType }) {
  const [isSpreadSearchBar, setSpreadSearchBar] = useState(true);

  useEffect(() => {
    if (pageType === 'sub') setSpreadSearchBar(false);
  }, []);

  return (
    <HeaderContainer pageType={pageType}>
      <Inner pageType={pageType}>
        {isSpreadSearchBar ? <DefaultSearchBarContainer /> : <MiniSearchBarContainer />}
      </Inner>
    </HeaderContainer>
  );
}

function DefaultSearchBarContainer() {
  return (
    <>
      <MainBar>
        <Logo>LOGO</Logo>
        <GNB />
        <AccountMenu />
      </MainBar>
      <SearchBar />
    </>
  );
}

function MiniSearchBarContainer() {
  return (
    <MainBar>
      <Logo>LOGO</Logo>
      <MiniSearchBar />
      <AccountMenu />
    </MainBar>
  );
}

export default Header;

const SubHeader = css`
  background: ${COLOR.WHITE};
  ${BOX_SHADOW[200]}
`;

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  padding: 20px 0;
  ${({ pageType }) => pageType === 'sub' && SubHeader};
  z-index: ${Z_INDEX.HEADER};
`;

const Inner = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: ${({ pageType }) => (pageType === 'sub' ? '0 24px' : '0 80px')};
`;

const MainBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: ${FONT.SIZE.LOGO};
  font-weight: ${FONT.WEIGHT.BOLD};
`;
