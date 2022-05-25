import styled from 'styled-components';
import COLOR from 'styles/colors';
import { POSITION_CENTER, BOX_SHADOW } from 'styles/utils';

function Modal({ position, padding, borderRadius, children }) {
  return (
    <Contents position={position} borderRadius={borderRadius} padding={padding}>
      {children}
    </Contents>
  );
}

export default Modal;

const Contents = styled.div`
  ${({ position }) => (position === 'CENTER' ? POSITION_CENTER : '')}
  background: ${COLOR.WHITE};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  ${BOX_SHADOW[100]}
`;
