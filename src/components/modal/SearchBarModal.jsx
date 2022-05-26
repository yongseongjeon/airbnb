import styled from 'styled-components';
import COLOR from 'styles/colors';
import { BOX_SHADOW } from 'styles/utils';

function SearchBarModal({ borderRadius, padding, children }) {
  return (
    <Wrap>
      <Contents borderRadius={borderRadius} padding={padding}>
        {children}
      </Contents>
    </Wrap>
  );
}

export default SearchBarModal;

const Wrap = styled.div`
  position: relative;
`;

const Contents = styled.div`
  width: fit-content;
  background: ${COLOR.WHITE};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-radius: '40px';
  ${BOX_SHADOW[100]}
`;
