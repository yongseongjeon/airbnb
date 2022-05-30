import styled from 'styled-components';
import COLOR from 'styles/colors';
import Z_INDEX from 'styles/zIndex';

interface FilterContainerProps {
  type: string;
  children: React.ReactNode;
}

function FilterContainer({ type, children }: FilterContainerProps) {
  return <Container type={type}>{children}</Container>;
}

export default FilterContainer;

const Container = styled.div`
  z-index: ${Z_INDEX.FILTER_CONTAINER};
  position: relative;
  flex: ${(props: { type: string }) => (props.type === 'Schedule' ? 2 : 1.5)};
  width: 100%;
  height: 100%;
  padding: 0 24px;
  border-left: ${({ type }) => type !== 'Schedule' && `1px solid ${COLOR.GREY[200]}`};
  cursor: pointer;
`;
