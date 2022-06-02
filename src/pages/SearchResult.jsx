import Accommodations from 'components/Accommodations';
import Header from 'components/Header';
import Map from 'components/Map';
import styled from 'styled-components';

function SearchResult() {
  return (
    <>
      <Header pageType="sub" />
      <Wrap>
        <Accommodations />
        <Map />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  padding-top: 88px;
`;

export default SearchResult;
