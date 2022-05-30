import styled from 'styled-components';
import COLOR from 'styles/colors';
import { BOX_SHADOW } from 'styles/utils';
import Z_INDEX from 'styles/zIndex';

function SearchBarModal({ borderRadius, padding, children }) {
  return (
    <Wrap>
      <Dim onClick={() => console.log('dim찍힘')} />
      <Contents borderRadius={borderRadius} padding={padding}>
        {children}
      </Contents>
    </Wrap>
  );
}

export default SearchBarModal;

const Dim = styled.div`
  z-index: ${Z_INDEX.SEARCHBAR_MODAL.DIM};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: red;
  opacity: 0.5;
`;

const Wrap = styled.div`
  z-index: ${Z_INDEX.SEARCHBAR_MODAL.WRAP};
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
`;

const Contents = styled.div`
  position: relative;
  z-index: ${Z_INDEX.SEARCHBAR_MODAL.CONTENTS};
  width: fit-content;
  background: ${COLOR.WHITE};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-radius: '40px';
  ${BOX_SHADOW[100]}
`;
