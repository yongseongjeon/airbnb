import styled from 'styled-components';
import SIZE from 'constants/size';

function Map() {
  return <Wrap>나는 맵</Wrap>;
}

const Wrap = styled.div`
  flex: 1.6;
  height: calc(100vh - ${SIZE.RESULT_PAGE_HEADER});
  background-color: gray;
`;

export default Map;
