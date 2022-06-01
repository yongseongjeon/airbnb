import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';

function FilterBox({ title, value, placeholder }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Value value={value}>{value || placeholder}</Value>
    </Container>
  );
}

export default FilterBox;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 5px;
  font-size: ${FONT.SIZE.X_SMALL};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.BLACK};
`;

const Value = styled.p`
  font-size: ${FONT.SIZE.MEDIUM};
  color: ${({ value }) => (value ? COLOR.BLACK : COLOR.GREY[500])};
`;
