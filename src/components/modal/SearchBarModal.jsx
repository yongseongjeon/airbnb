import styled from 'styled-components';
import COLOR from 'styles/colors';
import { BOX_SHADOW } from 'styles/utils';

function SearchBarModal({ padding, children }) {
  return (
    <Wrap>
      <Contents padding={padding}>{children}</Contents>
    </Wrap>
  );
}

export default SearchBarModal;

const Wrap = styled.div`
  position: relative;
`;

const Contents = styled.div`
  background: ${COLOR.WHITE};
  padding: ${({ padding }) => padding};
  border-radius: '40px';
  ${BOX_SHADOW[100]}
`;
