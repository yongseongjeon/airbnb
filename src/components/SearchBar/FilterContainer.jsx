import styled from 'styled-components';
import COLOR from 'styles/colors';

function FilterContainer({ type, children }) {
  return <Container type={type}>{children}</Container>;
}

export default FilterContainer;

const Container = styled.div`
  position: relative;
  flex: ${({ type }) => (type === 'Schedule' ? 2 : 1.5)};
  width: 100%;
  height: 100%;
  padding: 0 24px;
  border-left: ${({ type }) => type !== 'Schedule' && `1px solid ${COLOR.GREY[200]}`};
  cursor: pointer;
`;
